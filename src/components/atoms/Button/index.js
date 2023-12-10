import { Box, Text } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from '../../../utils';

const Button = ({ icon, totalCart, padding }) => {
    const Icon = () => {
        if (icon === 'cart') {
            return <Ionicons name='basket-outline' size={28} />
        }

        return <Ionicons name='basket-outline' size={28} />
    }

    return (
        <TouchableOpacity>
            <Box backgroundColor={colors.white} p={padding} borderRadius={5}>
                <Icon />
                {totalCart && (
                    <Box position={"absolute"} top={1} right={1} backgroundColor={"red.600"} borderRadius={3} padding={0.5}>
                        <Text color={colors.white} fontSize={12}>{totalCart}</Text>
                    </Box>
                )}
            </Box>
        </TouchableOpacity>
    )
}

export default Button