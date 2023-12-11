import { Box, Text, Image } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const CardProduct = ({ product }) => {
    return (
        <Box>
            <TouchableOpacity>
                <Image source={product.image} alt='image' width={124} height={124} />
                <Text>{product.name}</Text>
            </TouchableOpacity>
        </Box>
    )
}

export default CardProduct