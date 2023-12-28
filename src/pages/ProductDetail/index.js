import Ionicons from "@expo/vector-icons/Ionicons";
import { Box, HStack, Heading, Pressable, Text } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Gap, Input, ProductSlider, Select } from '../../components';
import { colors } from '../../utils';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity } from "../../redux/CartReducer";
import { decrementQty, incrementQty } from "../../redux/ProductReducer";

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
                    {/* <Input label="qty" width={100} height={30} fontSize={16} />
                    <Select label="qty" width={100} height={30} fontSize={16} data={product.weight} /> */}
                    {cart.some((c) => c.id === product.id) ? (
                        <Box backgroundColor={colors.white} borderRadius={5} alignItems={"center"} py={2} position={"absolute"} bottom={0} left={0} right={0} margin={5}>
                            <Pressable
                                style={{
                                    flexDirection: "row",
                                    paddingHorizontal: 10,
                                    paddingVertical: 5,
                                    // alignItems: "center"
                                }}
                            >
                                <Pressable
                                    onPress={() => {
                                        dispatch(decrementQuantity(product)); // cart
                                        dispatch(decrementQty(product)); // product
                                    }}
                                    style={{
                                        width: 26,
                                        height: 26,
                                        borderRadius: 13,
                                        borderColor: "#BEBEBE",
                                        backgroundColor: "#E0E0E0",
                                        justifyContent: "center",
                                        alignContent: "center",
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            color: "#088F8F",
                                            paddingHorizontal: 6,
                                            fontWeight: "600",
                                            textAlign: "center",
                                        }}
                                    >
                                        -
                                    </Text>
                                </Pressable>

                                <Pressable>
                                    <Text
                                        style={{
                                            fontSize: 19,
                                            color: "#088F8F",
                                            paddingHorizontal: 8,
                                            fontWeight: "600",
                                        }}
                                    >
                                        {product.quantity}
                                    </Text>
                                </Pressable>

                                <Pressable
                                    onPress={() => {
                                        dispatch(incrementQuantity(product)); // cart
                                        dispatch(incrementQty(product)); //product
                                    }}
                                    style={{
                                        width: 26,
                                        height: 26,
                                        borderRadius: 13,
                                        borderColor: "#BEBEBE",
                                        backgroundColor: "#E0E0E0",
                                        justifyContent: "center",
                                        alignContent: "center",
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            color: "#088F8F",
                                            paddingHorizontal: 6,
                                            fontWeight: "600",
                                            textAlign: "center",
                                        }}
                                    >
                                        +
                                    </Text>
                                </Pressable>
                            </Pressable>
                        </Box>
                    ) : (
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
                    )}

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
                                <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>{cart.length} items |  $ {total}</Text>
                                <Text style={{ fontSize: 15, fontWeight: "400", color: "white", marginVertical: 6 }}>extra charges might apply</Text>
                            </Box>

                            <Pressable onPress={() => navigation.navigate("PickUp")}>
                                <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>Proceed to pickup</Text>
                            </Pressable>
                        </Pressable>
                    )}
                </Box>
            </Box>
        </SafeAreaView>
    )
}

export default ProductDetail