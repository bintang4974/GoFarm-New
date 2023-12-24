import { Box, Text } from 'native-base';
import React from 'react';
import { CardHistory } from '../../atoms';

const ListHistory = ({ order }) => {
    return (
        <Box mx={5} marginTop={5}>
            {order.map((item) => {
                return <CardHistory order={item} key={item.id} />
            })}
        </Box>
    )
}

export default ListHistory