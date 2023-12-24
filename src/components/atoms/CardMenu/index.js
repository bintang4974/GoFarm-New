import { Box, Heading, Text } from 'native-base';
import React from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from '../../../utils';
import { TouchableOpacity } from 'react-native';

const CardMenu = ({ menu, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(menu.pages)}>
      <Box flexDirection={"row"} mt={5} justifyContent={"space-between"} alignItems={"center"} backgroundColor={colors.white} shadow={2} mx={6} padding={3} borderRadius={10}>
        <Box flexDirection={"row"} alignItems={"center"}>
          {menu.image}
          <Heading fontSize={"md"} marginLeft={3}>{menu.name}</Heading>
        </Box>
        <Ionicons name="chevron-forward-outline" size={24} color={colors.primary} />
      </Box>
    </TouchableOpacity>
  )
}

export default CardMenu