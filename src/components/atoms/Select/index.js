import { Picker } from '@react-native-picker/picker';
import { Box, Text } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

const Select = ({ width, height, fontSize, label, data }) => {
    const [selectedValue, setSelectedValue] = useState('');

    return (
        <Box>
            <Text fontSize={(fontSize ? fontSize : 18)}>{label}</Text>
            <Box>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedValue(itemValue)
                    }>
                    {data.map((item, index) => {
                        return (
                            <Picker.Item label={item} value={item} key={index} />
                        )
                    })}
                </Picker>
            </Box>
        </Box>
    )
}

export default Select

const styles = StyleSheet.create()