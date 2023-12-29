import { Box, HStack, Heading, Image, Pressable, ScrollView, Text } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { dummyOrder } from '../../data';
import { Button, ListCart } from '../../components';
import { colors } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from "@expo/vector-icons/Ionicons";
import { decrementQuantity, incrementQuantity } from '../../redux/CartReducer';
import { decrementQty, incrementQty } from '../../redux/ProductReducer';

const Cart = ({ navigation }) => {
    const cart = useSelector((state) => state.cart.cart);
    const total = cart.map((item) => item.quantity * item.price).reduce((curr, prev) => curr + prev, 0);
    const [order, setOrder] = useState(dummyOrder[0]);
    const dispatch = useDispatch();

    return (
        // <SafeAreaView style={{ flex: 1 }}>
        <>
            {total === 0 ? (
                <Text>null</Text>
            ) : (
                <ScrollView backgroundColor={colors.white} flex={1}>
                    {cart.map((item, index) => {
                        console.log('item: ', item)
                        return (
                            <HStack space={3} justifyContent={"space-between"} alignItems={"center"} backgroundColor={colors.white} shadow={2} mx={6} my={2} padding={3} borderRadius={10}>
                                {/* <Image source={item.image} alt='image' height={50} width={50} /> */}
                                <Text style={{ fontSize: 16, fontWeight: "500" }}>
                                    ${item.price * item.quantity}
                                </Text>
                                <Text>{item.name}</Text>
                                <Pressable
                                    style={{
                                        flexDirection: "row",
                                        paddingHorizontal: 10,
                                        paddingVertical: 5,
                                        alignItems: "center",
                                        borderColor: "#BEBEBE",
                                        borderWidth: 0.5,
                                        borderRadius: 10,
                                    }}
                                >
                                    <Pressable
                                        onPress={() => {
                                            dispatch(decrementQuantity(item)); // cart
                                            dispatch(decrementQty(item)); // product
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                color: "#088F8F",
                                                paddingHorizontal: 6,
                                                fontWeight: "600",
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
                                            {item.quantity}
                                        </Text>
                                    </Pressable>

                                    <Pressable
                                        onPress={() => {
                                            dispatch(incrementQuantity(item)); // cart
                                            dispatch(incrementQty(item)); //product
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                color: "#088F8F",
                                                paddingHorizontal: 6,
                                                fontWeight: "600",
                                            }}
                                        >
                                            +
                                        </Text>
                                    </Pressable>
                                </Pressable>
                                {/* <Ionicons name="trash-bin-outline" size={24} color={"#e84118"} /> */}
                                {/* <ListCart cart={order.orders} />
                                <Box px={5} position={'absolute'} bottom={0} py={2} left={0} right={0} backgroundColor={colors.white} borderRadius={20} shadow={5}>
                                    <HStack space={2} justifyContent={"space-between"} my={3}>
                                        <Heading fontSize={"md"}>Total Price :</Heading>
                                        <Heading fontSize={"md"}>Rp. {order.totalPrice}</Heading>
                                    </HStack>
                                    <Button
                                        title="Checkout"
                                        type="textIcon"
                                        fontSize={18}
                                        padding={15}
                                        backgroundColor={colors.primary}
                                        fontColor={colors.white}
                                        icon="checkout"
                                        onPress={() => navigation.navigate('Checkout')}
                                    />
                                </Box> */}
                            </HStack>
                        )
                    })}

                </ScrollView>
            )}
        </>
        // </SafeAreaView>
    )
}

export default Cart