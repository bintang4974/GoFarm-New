import { Box, HStack, Image, Text } from 'native-base';
import React from 'react';
import { colors } from '../../../utils';
import Gap from '../Gap';

const CardHistory = ({ order }) => {
    return (
        <Box backgroundColor={colors.white} shadow={5} padding={5} borderRadius={10} marginBottom={5}>
            <Text fontSize={16} fontWeight={"semibold"}>{order.orderDate}</Text>
            <Gap height={10} />
            {order.orders.map((item, index) => {
                return (
                    <HStack space={3} key={index} marginBottom={2}>
                        <Text>{index + 1}</Text>
                        <Image source={item.product.image} width={60} height={60} alt='product' />
                        <Box>
                            <Text>{item.product.name}</Text>
                            <Text>Rp. {item.product.price}</Text>
                            <Gap height={10} />
                            <Text>QTY : {item.qty}</Text>
                            <Text>Total : {item.totalPrice}</Text>
                        </Box>
                    </HStack>
                )
            })}
        </Box>
    )
}

export default CardHistory