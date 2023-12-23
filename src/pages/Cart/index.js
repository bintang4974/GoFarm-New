import { Box, Text } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { dummyOrder } from '../../data';
import { ListCart } from '../../components';
import { colors } from '../../utils';

const Cart = () => {
    const [order, setOrder] = useState(dummyOrder[0]);

    return (
        <SafeAreaView style={{flex: 1}}>
            <Box backgroundColor={colors.white} flex={1}>
                <ListCart cart={order.orders} />
            </Box>
        </SafeAreaView>
    )
}

export default Cart