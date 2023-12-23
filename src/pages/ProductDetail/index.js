import Ionicons from "@expo/vector-icons/Ionicons";
import { Box, HStack, Heading, Text } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Gap, Input, ProductSlider } from '../../components';
import { colors } from '../../utils';

const ProductDetail = ({ route, navigation }) => {
    const [product, setProduct] = useState(route.params.product);
    const [image, setImage] = useState(route.params.product.image);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Box backgroundColor={colors.white} flex={1}>
                <ProductSlider image={image} />
                <Box position={"absolute"} bottom={0} padding={4} height={"60%"} width={"100%"} backgroundColor={colors.primary} borderTopRadius={40}>
                    <HStack space={2} justifyContent={"space-between"} alignItems={"center"}>
                        <Heading fontSize={"xl"} color={colors.white} textTransform={"capitalize"}>{product.name}</Heading>
                        <Text color={colors.white} fontSize={14}>{product.price}</Text>
                    </HStack>
                    <Gap height={10} />
                    <HStack space={3} alignItems={"center"}>
                        <Ionicons name="star-half-outline" size={20} color={"yellow"} />
                        <Text color={colors.white}>{product.rating}</Text>
                        <Text color={colors.white}>(250 review)</Text>
                    </HStack>
                    <Gap height={10} />
                    <Text color={colors.white}>{product.description}</Text>
                    <Input label="qty" width={100} height={30} fontSize={16} />
                    {/* <Select label="qty" width={100} height={30} fontSize={16} data={product.weight} /> */}
                    <Box position={"absolute"} bottom={0} left={0} right={0} margin={5}>
                        <Button type="textIcon" title="Add to cart" icon="cart-white" padding={15} fontSize={18} />
                    </Box>
                </Box>
            </Box>
        </SafeAreaView>
    )
}

export default ProductDetail