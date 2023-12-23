import { Box, Text } from 'native-base';
import React from 'react';
import { CardCart } from '../../atoms';

const ListCart = ({ cart }) => {
    return (
        <Box>
            {cart.map((item) => {
                return <CardCart cart={item} key={item.id} />
            })}
        </Box>
    )
}

export default ListCart