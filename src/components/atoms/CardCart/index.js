import { Box, HStack, Heading, Image, Text } from 'native-base';
import React from 'react';
import { colors } from '../../../utils';
import Ionicons from "@expo/vector-icons/Ionicons";

const CardCart = ({ cart }) => {
    return (
        <HStack space={3} flexDirection={"row"} mt={5} justifyContent={"space-between"} alignItems={"center"} backgroundColor={colors.white} shadow={2} mx={6} padding={3} borderRadius={10}>
            <Image source={cart.product.image} alt='product' width={60} height={60} />
            <Box>
                <Heading fontSize={"lg"} mb={2}>{cart.product.name}</Heading>
                <Text>Rp. {cart.product.price}</Text>
                <Text>QTY : {cart.qty}</Text>
                <Text>Total : {cart.totalPrice}</Text>
            </Box>
            <Ionicons name="trash-bin-outline" size={24} color={"#e84118"} />
        </HStack>
    )
}

export default CardCart