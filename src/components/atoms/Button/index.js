import { Box, Text } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from '../../../utils';
import TextIcon from './TextIcon';
import TextOnly from './TextOnly';

const Button = (props) => {
    const { icon, totalCart, padding, type, onPress, background } = props;

    const Icon = () => {
        if (icon === 'cart') {
            return <Ionicons name='basket-outline' size={28} />
        }

        return <Ionicons name='basket-outline' size={28} />
    }

    // const { icon, totalKeranjang, padding, type, onPress } = props;

    if (type === "textIcon") {
        return <TextIcon {...props} />
    } else if(type === "text") {
        return <TextOnly {...props} />
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <Box backgroundColor={(background ? background : colors.white)} p={padding} borderRadius={5}>
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