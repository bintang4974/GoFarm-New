import Ionicons from "@expo/vector-icons/Ionicons";
import { Box, HStack, Heading, Pressable, Text } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Gap, Input, ProductSlider, Select } from '../../components';
import { colors } from '../../utils';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity } from "../../redux/CartReducer";
import { decrementQty, incrementQty } from "../../redux/ProductReducer";
import { TouchableOpacity } from "react-native";

const ProductDetail = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const total = cart.map((item) => item.quantity * item.price).reduce((curr, prev) => curr + prev, 0);
    const [product, setProduct] = useState(route.params.product);
    const [image, setImage] = useState(route.params.product.image);

    const addItemToCart = () => {
        dispatch(addToCart(product)); // cart
        dispatch(incrementQty(product)); // product
    }

    console.log(product.id)
    console.log(cart)
    console.log(product.quantity)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Box backgroundColor={colors.white} flex={1}>
                <ProductSlider image={image} />
                <Box backgroundColor={colors.primary} padding={2} position={"absolute"} borderRadius={10} margin={4}>
                    <TouchableOpacity onPress={() => navigation.navigate('MainApp')}>
                        <Ionicons name="arrow-back-outline" size={24} color={colors.white} />
                    </TouchableOpacity>
                </Box>
                <Box position={"absolute"} bottom={0} padding={6} height={"60%"} width={"100%"} backgroundColor={colors.primary} borderTopRadius={30}>
                    <HStack space={2} justifyContent={"space-between"} alignItems={"center"}>
                        <Heading fontSize={"xl"} color={colors.white} textTransform={"capitalize"}>{product.name}</Heading>
                        <Heading color={colors.white} fontSize={"xl"}>{product.price}</Heading>
                    </HStack>
                    <Gap height={10} />
                    <HStack space={2} alignItems={"center"}>
                        <Ionicons name="star-half-outline" size={20} color={"yellow"} />
                        <Text color={colors.white}>(250 review)</Text>
                    </HStack>
                    <Gap height={10} />
                    <Text color={colors.white}>{product.description}</Text>
                    <Box position={"absolute"} bottom={0} left={0} right={0} margin={5}>
                        <Button
                            type="textIcon"
                            title="Add to cart"
                            icon="cart-white"
                            padding={15}
                            fontSize={18}
                            onPress={addItemToCart}
                        />
                    </Box>

                    {total === 0 ? (
                        null
                    ) : (
                        <Pressable
                            style={{
                                backgroundColor: "#088F8F",
                                padding: 10,
                                marginBottom: 40,
                                margin: 15,
                                borderRadius: 7,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <Box>
                                <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>{cart.length} items |  Rp. {total}</Text>
                                <Text style={{ fontSize: 15, fontWeight: "400", color: "white", marginVertical: 6 }}>extra charges might apply</Text>
                            </Box>

                            <Pressable onPress={() => navigation.navigate("Cart")}>
                                <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>Proceed to cart</Text>
                            </Pressable>
                        </Pressable>
                    )}
                </Box>
            </Box>
        </SafeAreaView>
    )
}

export default ProductDetail