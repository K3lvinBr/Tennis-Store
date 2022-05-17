import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function SizeButton(props) {

    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: props.bgColor || '#FFF' }]}>

            <Text style={[styles.text, { color: props.color || '#C9C' }]}>
                {props.children}
            </Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: '#E6E6E6',
        borderWidth: 3,
        marginHorizontal: 10,
    },

    text: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})