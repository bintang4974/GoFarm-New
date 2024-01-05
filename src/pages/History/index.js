import { doc, onSnapshot } from 'firebase/firestore';
import { Box, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { db } from '../../config/FIREBASE';
import { colors } from '../../utils';
import { getAuth } from 'firebase/auth';
import { ListHistory } from '../../components';

const History = () => {
    const user = getAuth().currentUser;
    const [history, setHistory] = useState([]);

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
        <Box backgroundColor={colors.white} flex={1}>
            {history.map((item, index) => (
                <Box key={index} borderBottomWidth={1} p={2}>
                    <Text>Order ID: {item.order_id}</Text>
                    <Text>Order ID: {item.orders[0].name}</Text>
                    <Text>Status: {item.status}</Text>
                </Box>
            ))}
        </Box>
    )
}

export default History