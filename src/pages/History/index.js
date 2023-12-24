import { Box, Text } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { dummyOrder } from '../../data';
import { colors } from '../../utils';
import { ListHistory } from '../../components';

const History = () => {
    const [order, setOrder] = useState(dummyOrder);

    return (
        // <SafeAreaView style={{flex: 1}}>
        <Box backgroundColor={colors.white} flex={1}>
            <ListHistory order={order} />
        </Box>
        // </SafeAreaView>
    )
}

export default History