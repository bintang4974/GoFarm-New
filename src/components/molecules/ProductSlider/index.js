import { Box, Image, Text } from 'native-base';
import React from 'react';
import ImageViewer from 'react-native-image-zoom-viewer';
import { colors } from '../../../utils';

const ProductSlider = ({ image }) => {
    return (
        <Box width={"70%"} height={"40%"} overflow={"hidden"}>
            <Image source={image} height={"100%"} width={"100%"} alt='slider' />
        </Box>
    )
}

export default ProductSlider