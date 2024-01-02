import { Box } from 'native-base';
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from 'react-native-webview';

const PaymentGateway = ({ route }) => {
    // const { url, data } = route.params;
    // console.log('params: ', route.params);

    return (
        <SafeAreaView>
            <Box>
                <WebView source={{ uri: route.params.url }} androidHardwareAccelerationDisabled={true} />
            </Box>
        </SafeAreaView>
    )
}

export default PaymentGateway