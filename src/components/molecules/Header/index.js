import Ionicons from "@expo/vector-icons/Ionicons";
import { Box, HStack } from 'native-base';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { colors } from '../../../utils';
import { Button } from '../../atoms';

const Header = () => {
    return (
        <Box backgroundColor={colors.primary} height={90} borderBottomRadius={15}>
            <HStack space={2} mt={15} marginX={30} justifyContent={'space-between'}>
                <HStack backgroundColor={colors.white} borderRadius={5} p={2} alignItems={"center"}>
                    <Ionicons name="search-outline" size={24} />
                    <TextInput placeholder='Search' style={styles.input} />
                </HStack>

                <Button icon="cart" totalCart={2} padding={2} />
            </HStack>
        </Box>
    )
}

export default Header

const styles = StyleSheet.create({
    input: {
        fontSize: 16,
        width: '70%'
    }
})