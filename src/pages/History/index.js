import { getAuth } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { Box, Center, ScrollView, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { db } from '../../config/FIREBASE';
import { dummyOrder } from '../../data';
import { colors } from '../../utils';

const History = () => {
    const user = getAuth().currentUser;
    const [history, setHistory] = useState([]);
    const [item, setItem] = useState(dummyOrder);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            doc(db, "history", user.email),
            (doc) => {
                const data = doc.data();
                console.log("Current data: ", data);

                if (data) {
                    setHistory(data.paid);
                }
                else {
                    console.log('Gaada data');
                }
            }
        );

        return () => unsubscribe();
    }, [user.email]);

    console.log(history);

    return (
        // <ListHistory order={item} />
        <>
            {history.length < 0 ? (
                <Center>Anda belum melakukan transaksi apapun!</Center>
            ) : (
                <Box backgroundColor={colors.white} flex={1}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Box backgroundColor={colors.white} shadow={5} padding={5} borderRadius={10} margin={5}>
                            {history.map((item, index) => (
                                <Box key={index} borderBottomWidth={1} p={2}>
                                    <Text>Order ID: {item.order_id}</Text>
                                    <Text>Order ID: {item.orders[0].name}</Text>
                                    <Text>Status: {item.status}</Text>
                                </Box>
                            ))}
                        </Box>
                    </ScrollView>
                </Box>

            )}
        </>
    )
}

export default History