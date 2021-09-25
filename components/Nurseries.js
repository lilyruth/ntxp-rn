import React, { Component } from 'react';
import { Text, View, StyleSheet, Linking, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';


import { Card } from 'react-native-paper';

export default function Nurseries() {
  

    return(
      <View style={styles.container}>
     
       <Text style={styles.title}>Local Nurseries</Text>
       <WebView
          style={styles.map}
          source={{ uri: 'https://www.google.com/maps/d/embed?mid=1RR1PjOxcD58sR2RNuqPR5A7rXEW2dXSi&hl=en' }} />
     

      </View>
    )
  
  }
  
  const styles = StyleSheet.create({
   container: {
    margin: 10,
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#C0CEC0'
   },
   title: {
    fontFamily: 'JuliusSansOne_400Regular',
    fontSize: 32,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center'
  
  },
  list: {
   flexDirection: 'row',
   
  }, 
  textList: {
   fontSize: 16, 
   marginTop: 8,
   marginBottom: 3,
   padding: 3,
   marginLeft: 20,
   borderBottomWidth: 1,
   borderBottomColor: '#708A70'
  },

  paragraph2: {
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#D0DFD0',
    borderColor: 'white',
    borderWidth: 4,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 20,
    fontFamily: 'MontserratAlternates_400Regular',

  },

  map: {
    height: '50%',
    width: '80%',
    alignSelf: 'center',

  }
  
})