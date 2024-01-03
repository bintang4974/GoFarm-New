import { getAuth } from 'firebase/auth';
import { arrayUnion, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import { db } from '../../config/FIREBASE';
import { HEADER_MIDTRANS } from '../../midtrans/config';
import axios from 'axios';

const PaymentGateway = ({ route, navigation }) => {
    const { url, data } = route.params;
    const [paymentStatus, setPaymentStatus] = useState(null);
    const order_id = data.transaction_details.order_id;
    const user = getAuth().currentUser;
    // const historyRef = collection(FIRESTORE, "history");

    console.log('user: ', user.email);
    console.log('order_id: ', order_id);
    console.log('url: ', url);
    console.log('data: ', data);

    const fetchData = async () => {
        try {
            const response = await axios({
                method: "GET",
                url: `https://api.sandbox.midtrans.com/v2/${order_id}/status`,
                headers: HEADER_MIDTRANS,
                // timeout: API_TIMEOUT,
            });

            console.log(response.data);
            console.log(url);

            const status = response.data.transaction_status;
            setPaymentStatus(status);

            if (status === 'pending') {
                console.log('Pembayaran menunggu konfirmasi');
            } else if (status === 'settlement') {
                console.log('Pembayaran berhasil');

                await setDoc(
                    doc(db, "history", user.email),
                    {
                        paid: arrayUnion({
                            order_id: order_id,
                            // name: data.item_details.name,
                            // price: data.item_details.price,
                            // quantity: data.item_details.quantity,
                            status: paymentStatus
                        })
                    },
                    { merge: true }
                );

                navigation.navigate('MainApp');
            } else {
                console.log('Status pembayaran tidak dikenali');
            }
        } catch (error) {
            console.error("Error fetching order status:", error);
        }
    };

    useEffect(() => {
        if (url) {
            fetchData();

            const intervalId = setInterval(() => {
                fetchData();
            }, 10000);

            // Membersihkan interval saat komponen tidak lagi terrender
            return () => clearInterval(intervalId);
        } else {
            console.error("No URL provided");
        }
    }, [url]);

    return (
        <WebView source={{ uri: route.params.url }} />
    )
}

export default PaymentGateway