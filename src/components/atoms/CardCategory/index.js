import { Box, Text } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { colors } from '../../../utils';

const CardCategory = ({ category }) => {
    return (
        <Box backgroundColor={colors.white} shadow={1} p={3} borderRadius={10}>
            <TouchableOpacity>
                <Text>{category.name}</Text>
            </TouchableOpacity>
        </Box>
    )
}

export default CardCategory