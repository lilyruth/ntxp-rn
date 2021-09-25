import React, { Component } from 'react';
import { Text, View, StyleSheet, Linking, Platform, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { 
 JuliusSansOne_400Regular 
} from '@expo-google-fonts/julius-sans-one';

import { 
 
 MontserratAlternates_400Regular,
 
} from '@expo-google-fonts/montserrat-alternates'
import { Card } from 'react-native-paper';


export default function Home() {
  

  return(
     <View style={styles.container}>
      
       <LinearGradient
        style={{height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center'}}
        colors={['lavender', 'lavender', 'lavender','darkmagenta']} >
   
        <Image source={require('../images/jumbotronfinal.jpg')} style={styles.image} />
     
     
        <Text style={styles.title}>A Tour of Plants</Text>
        <Text style={styles.paragraph}>This is a resource for the beginning gardener in the DFW Metroplex (Texas). Presented here is a limited selection of plants that do well in the oftentimes challenging conditions of the North Texas climate.</Text>
    

      </LinearGradient>
     </View>
    
    )
  }




const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
 
  image: {
    flex: 7,
    resizeMode: 'cover',
    width: '100%',
    marginBottom: 10,
  },
  
  title: {
    flex: .7,
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    width: '90%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'JuliusSansOne_400Regular',
    marginBottom: 0
  
  },
  paragraph: {
    flex: 4,
    backgroundColor: 'white',
    opacity: .6,
    padding: 10,
    width: '90%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 10,
    fontSize: Platform.OS === "ios" ? 22 : 18,
    textAlign: 'center',
    lineHeight: Platform.OS === 'ios' ? 33 : 29,
  },
 
 
});