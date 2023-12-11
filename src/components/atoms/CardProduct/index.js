import { Box, Text, Image, VStack, Heading, HStack } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from '../../../utils';

const CardProduct = ({ product }) => {
    return (
        <Box mx={4} my={5}>
            <TouchableOpacity style={styles.card}>
                <Image source={product.image} alt='image' width={140} height={144} />
                <Box backgroundColor={"#67D490"} p={2}>
                    <Heading color={colors.white} fontSize={"lg"} textTransform={"capitalize"}>{product.name}</Heading>
                    <HStack space={2} justifyContent={"space-between"}>
                        <Text color={colors.white} fontWeight={"semibold"}>{product.price}</Text>
                        <Ionicons name="arrow-forward-outline" size={24} color={colors.white} />
                    </HStack>
                </Box>
            </TouchableOpacity>
        </Box>
    )
}

export default CardProduct;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FAFBFD',
        borderRadius: 20,
        overflow: 'hidden', // to ensure the rounded corners are applied to the Image
    },
});
