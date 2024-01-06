import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from '../../../utils';

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
    const Icon = () => {
        switch (label) {
            case 'Home':
                return isFocused ? <Ionicons name='home-outline' size={28} /> : <Ionicons name='home-outline' size={28} />
            case 'Search':
                return isFocused ? <Ionicons name='search-outline' size={28} /> : <Ionicons name='search-outline' size={28} />
            case 'History':
                return isFocused ? <Ionicons name='bookmark-outline' size={28} /> : <Ionicons name='bookmark-outline' size={28} />
            case 'Profile':
                return isFocused ? <Ionicons name='person-outline' size={28} /> : <Ionicons name='person-outline' size={28} />
            default:
                return <Ionicons name='home-outline' size={28} />
        }
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
        >
            <Icon />
            <Text style={styles.text(isFocused)}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: (isFocused) => ({
        color: isFocused ? colors.black : colors.secondary,
        fontSize: 11,
        marginTop: 4
    }),
})