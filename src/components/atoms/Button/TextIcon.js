import Ionicons from "@expo/vector-icons/Ionicons";
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../../utils';
import Gap from '../Gap';

const TextIcon = ({ icon, padding, onPress, title, fontSize, backgroundColor, fontColor }) => {
  const Icon = () => {
    if (icon === 'cart-white') {
      return <Ionicons name="cart-outline" size={24} color={colors.primary} />;
    } else if (icon === 'checkout') {
      return <Ionicons name="arrow-forward-outline" size={24} color={colors.white} />;
    } else if (icon === 'back') {
      return <Ionicons name="arrow-back-circle-outline" size={24} color={colors.white} />;
    }
    //   const Icon = () => {
    //     if (icon === 'keranjang') {
    //       return <IconKeranjang />;
    //     } else if (icon === 'arrow-left') {
    //       return <IconBack />;
    //     } else if (icon === 'keranjang-putih') {
    //       return <IconKeranjangPutih />;
    //     } 

    return <Ionicons name="cart-outline" size={24} color={colors.white} />;
  };

  return (
    <TouchableOpacity style={styles.container(padding, backgroundColor)} onPress={onPress}>
      <Text style={styles.title(fontSize, fontColor)}>{title}</Text>
      <Gap width={5} />
      <Icon />
    </TouchableOpacity>
  );
};

export default TextIcon;

const styles = StyleSheet.create({
  container: (padding, backgroundColor) => ({
    backgroundColor: backgroundColor ? backgroundColor : colors.white,
    padding: padding,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  title: (fontSize, fontColor) => ({
    color: fontColor ? fontColor : colors.primary,
    fontSize: fontSize ? fontSize : 15,
    // fontFamily: fonts.primary.bold,
  }),
});
