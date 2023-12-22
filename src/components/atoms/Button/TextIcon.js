import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { IconBack, IconKeranjang, IconKeranjangPutih, IconSubmit } from '../../../../assets/icons';
// import { colors, fonts } from '../../../utils';
import Ionicons from "@expo/vector-icons/Ionicons";
import Gap from '../Gap';
import { colors } from '../../../utils';

const TextIcon = ({ icon, padding, onPress, title, fontSize }) => {
  const Icon = () => {
    if (icon === 'cart-white') {
      return <Ionicons name="cart-outline" size={24} color={colors.primary} />;
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
    <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
      <Icon />
      <Gap width={5} />
      {/* <Jarak width={5} /> */}
      <Text style={styles.title(fontSize)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextIcon;

const styles = StyleSheet.create({
  container: (padding) => ({
    backgroundColor: colors.white,
    padding: padding,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  title: (fontSize) => ({
    color: colors.primary,
    fontSize: fontSize ? fontSize : 15,
    // fontFamily: fonts.primary.bold,
  }),
});
