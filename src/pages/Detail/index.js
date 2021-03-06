import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

import Dot from '../../component/Dot'
import SizeButton from '../../component/SizeButton'
import Button from '../../component/Button'
import Footer from '../../component/Footer'

export default function Detail({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Nike Downshifter 10'
  })

  const [sizeToggle, setSizeToggle] = useState('40')

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/detail.png')}
        style={styles.image}
        resizeMode='cover'
      />

      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24 }]}>R$ 280,90</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30 }]}>Nike Downshifter 10</Text>
        </View>

        <View style={styles.dotContainer}>
          <Dot color='#2379F4' />
          <Dot color='#FB6E53' />
          <Dot color='#DDD' />
          <Dot color='#000' />
        </View>

        <View style={{flexDirection: 'row', width: '100%'}}>
        	<ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton sizeToggle={sizeToggle} setSizeToggle={setSizeToggle}>40</SizeButton>
            <SizeButton sizeToggle={sizeToggle} setSizeToggle={setSizeToggle}>37</SizeButton>
            <SizeButton sizeToggle={sizeToggle} setSizeToggle={setSizeToggle}>39</SizeButton>
            <SizeButton sizeToggle={sizeToggle} setSizeToggle={setSizeToggle}>42</SizeButton>
          </ScrollView>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}>
            Nike Downshifter 10
          </Text>
          <Text style={styles.textContent}>
            O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte atualizados, para garantir uma corrida estável e confortável. Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético
          </Text>
          <Text style={styles.textList}>
            - Categoria: Amortecimento
          </Text>
          <Text style={styles.textList}>
            - Material: Mesh
          </Text>
        </View>

        <Button />

        <View style={styles.line} />

        <Footer />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },

  image: {
    width: '100%'
  },

  title: {
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%'
  },

  dotContainer: {
    flexDirection: 'row',
    marginVertical: '7%'
  },

  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%',   
  },

  textTitle: {
    fontSize: 22,
    marginVertical: '2%',
  },

  textList: {
    fontSize: 16,
    lineHeight: 25,
  },
  
  line: {
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%',
  }
})