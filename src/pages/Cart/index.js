import { Box, Center, HStack, Heading, Image, Pressable, ScrollView, Text } from 'native-base';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Gap } from '../../components';
import { auth } from '../../config/FIREBASE';
import { snapTransactions } from '../../midtrans/payment';
import { decrementQuantity, incrementQuantity } from '../../redux/CartReducer';
import { decrementQty, incrementQty } from '../../redux/ProductReducer';
import { colors } from '../../utils';

const Cart = ({ navigation }) => {
    const cart = useSelector((state) => state.cart.cart);
    const total = cart
        .map((item) => item.quantity * item.price)
        .reduce((curr, prev) => curr + prev, 0);
    // const [order, setOrder] = useState(dummyOrder[0]);
    const user = auth.currentUser;
    const date = new Date().getTime();
    const dispatch = useDispatch();


    const payment = async () => {
        const data = {
            transaction_details: {
                order_id: "TEST-" + date + user.uid,
                gross_amount: parseInt(total)
            },
            credit_card: {
                secure: true
            },
            customer_details: {
                // name: user.name,
                email: user.email,
            },
        }

        if (data) {
            try {
                const post = await snapTransactions(data);
                // console.log(post);

                const url = post.redirect_url;
                console.log(url);
                navigation.navigate("PaymentGateway", { url, data, cart });
            } catch (error) {
                console.error("Error in Checkout:", error);
            }
        }

        console.log('cart: ', cart[0].name)
        // console.log('cart: ', cart);
        console.log('data: ', data);
    }

    return (
        <>
            {total === 0 ? (
                <Center flex={1}>Anda belum menambahkan barang ke keranjang!</Center>
            ) : (
                <Box backgroundColor={colors.white} flex={1}>
                    <ScrollView>
                        {cart.map((item, index) => {
                            console.log('item: ', item)
                            return (
                                <HStack key={index} space={3} justifyContent={"space-between"} alignItems={"center"} backgroundColor={colors.white} shadow={2} mx={6} my={2} padding={3} borderRadius={10}>
                                    <Image source={{ uri: item.image }} alt='image' height={50} width={50} />
                                    <Box>
                                        <Heading size={"sm"}>{item.name}</Heading>
                                        <Text style={{ fontSize: 14, fontWeight: "400" }}>
                                            Total : Rp. {item.price * item.quantity}
                                        </Text>
                                    </Box>
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
                                </HStack>
                            )
                        })}
                    </ScrollView>
                    <Box p={5} shadow={6} backgroundColor={colors.white} borderTopRadius={20}>
                        <HStack space={2} justifyContent={"space-between"}>
                            <Heading fontSize={"lg"}>Total: </Heading>
                            <Heading fontSize={"lg"}>{cart.length} items | Rp. {total}</Heading>
                        </HStack>
                        <Gap height={12} />
                        <Button
                            title="Checkout"
                            type="textIcon"
                            fontSize={18}
                            padding={15}
                            backgroundColor={colors.primary}
                            fontColor={colors.white}
                            icon="checkout"
                            onPress={payment}
                        />
                    </Box>
                </Box>
            )}
        </>
    )
}

export default Cart