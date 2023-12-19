import { Box, HStack, Heading, Image, Text } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { dummyMenu, dummyProfile } from '../../data';
import { colors } from '../../utils';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Gap, ListMenu } from '../../components';

const ProductDetail = ({ route, navigation }) => {
    const [product, setProduct] = useState(route.params.product);
    const [image, setImage] = useState(route.params.product.image);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Box backgroundColor={colors.white} flex={1}>
                <Box position={"absolute"} bottom={0} padding={4} height={"60%"} width={"100%"} backgroundColor={colors.primary} borderTopRadius={40}>
                    <HStack space={2} justifyContent={"space-between"} alignItems={"center"}>
                        <Heading fontSize={"xl"}>{product.name}</Heading>
                        <Text>{product.price}</Text>
                    </HStack>
                    <Gap height={10} />
                    <HStack space={3} alignItems={"center"}>
                        <Ionicons name="star-half-outline" size={24} color={colors.white} />
                        <Text>{product.rating}</Text>
                        <Text>(250 review)</Text>
                    </HStack>
                    <Gap height={10} />
                    <Text>{product.description}</Text>
                </Box>
            </Box>
        </SafeAreaView>
    )
}

export default ProductDetail