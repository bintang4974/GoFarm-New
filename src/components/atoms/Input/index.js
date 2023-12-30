import { Box, Text } from 'native-base';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = ({ width, height, placeholder, fontSize, label, value, secureTextEntry, onChangeText }) => {
  return (
    <Box>
      <Text fontSize={(fontSize ? fontSize : 18)}>{label}</Text>
      <TextInput
        style={styles.input(width, height, fontSize)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
      />
    </Box>
  )
}

export default Input

const styles = StyleSheet.create({
  input: (width, height, fontSize) => ({
    fontSize: fontSize ? fontSize : 18,
    width: width,
    height: height,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#c4c4c4',
    paddingVertical: 5,
    paddingHorizontal: 10
  })
})