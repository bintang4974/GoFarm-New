import { Box, Heading, Image, Text } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { dummyMenu, dummyProfile } from '../../data';
import { colors } from '../../utils';
import { ListMenu } from '../../components';

const ProductDetail = ({ route, navigation }) => {
    const [product, setProduct] = useState(route.params.product);
    const [image, setImage] = useState(route.params.product.image);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Box backgroundColor={colors.white} flex={1}>
                <Box position={"absolute"} bottom={0} height={"50%"} width={"100%"} backgroundColor={colors.primary} borderTopRadius={40}>
                    <Text>{product.name}</Text>
                </Box>
            </Box>
        </SafeAreaView>
    )
}

export default ProductDetail