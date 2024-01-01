import { Box, Text } from 'native-base';
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";

const PaymentGateway = ({ route }) => {
    // const { url, data } = route.params;
    console.log('params: ', route.params);

    return (
        <SafeAreaView>
            <Box>
                <Text>payment gateway</Text>
            </Box>
        </SafeAreaView>
    )
}

export default PaymentGateway