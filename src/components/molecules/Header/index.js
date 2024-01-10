import Ionicons from "@expo/vector-icons/Ionicons";
import { Box, HStack, Heading, Image, Text } from 'native-base';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { colors } from '../../../utils';
import { Button } from '../../atoms';
import { Logo } from "../../../assets";

const Header = ({ navigation }) => {
    return (
        <HStack space={2} justifyContent={"space-between"} backgroundColor={colors.white} px={5} py={3} alignItems={"center"}>
            <HStack alignItems={"center"} space={2}>
                <Image source={Logo} height={45} width={45} alt="logo" />
                <Heading fontSize={"xl"}>Go Farm</Heading>
            </HStack>
            <HStack space={2}>
                <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                    <Ionicons name="notifications-outline" size={28} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Ionicons name="cart-outline" size={28} />
                </TouchableOpacity>
            </HStack>
            {/* <HStack space={2} mt={15} marginX={30} justifyContent={'space-between'}>
                <HStack backgroundColor={colors.white} borderRadius={5} p={2} alignItems={"center"}>
                    <Ionicons name="search-outline" size={24} />
                    <TextInput placeholder='Search' style={styles.input} />
                </HStack>

                <Button icon="cart" totalCart={2} padding={2} onPress={() => navigation.navigate('Cart')} />
            </HStack> */}
        </HStack>
    )
}

export default Header

const styles = StyleSheet.create({
    input: {
        fontSize: 16,
        width: '70%'
    }
})