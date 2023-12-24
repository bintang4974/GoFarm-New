import { Box, HStack, Heading, Text } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { dummyOrder } from '../../data';
import { Button, ListCart } from '../../components';
import { colors } from '../../utils';

const Cart = ({ navigation }) => {
    const [order, setOrder] = useState(dummyOrder[0]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Box backgroundColor={colors.white} flex={1}>
                <ListCart cart={order.orders} />
                <Box px={5} position={'absolute'} bottom={0} py={2} left={0} right={0} backgroundColor={colors.white} borderRadius={20} shadow={5}>
                    <HStack space={2} justifyContent={"space-between"} my={3}>
                        <Heading fontSize={"md"}>Total Price :</Heading>
                        <Heading fontSize={"md"}>Rp. {order.totalPrice}</Heading>
                    </HStack>
                    <Button
                        title="Checkout"
                        type="textIcon"
                        fontSize={18}
                        padding={15}
                        backgroundColor={colors.primary}
                        fontColor={colors.white}
                        icon="checkout"
                        onPress={() => navigation.navigate('Checkout')}
                    />
                </Box>
            </Box>
        </SafeAreaView>
    )
}

export default Cart