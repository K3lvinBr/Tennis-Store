import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Shoes from '../Shoes'

export default function Footer() {
    return (
        <View>
            <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ marginHorizontal: 10 }}>
                    <Shoes img={require('../../assets/1.png')} cost='R$140,90'>
                        Nike Air Max Dia
                    </Shoes>
                </View>
                <View style={{ marginHorizontal: 10 }}>
                    <Shoes img={require('../../assets/3.png')} cost='R$560,90'>
                        Adidas Squidward Tentacles
                    </Shoes>
                </View>
                <View style={{ marginHorizontal: 10 }}>
                    <Shoes img={require('../../assets/6.png')} cost='R$920'>
                        Adidas Suje
                    </Shoes>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%',
    }
})