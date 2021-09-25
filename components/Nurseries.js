import React, { Component } from 'react';
import { Text, View, StyleSheet, Linking, Image, ScrollView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';


import { Card } from 'react-native-paper';

export default function Nurseries() {

  return(
    <View>
    <Text>Nurseries</Text>
       <TouchableOpacity style={{ color: 'darkmagenta', width: '90%' }} onPress={() => WebBrowser.openBrowserAsync('https://www.wildflower.org/plants-main')}><Text style={styles.paragraph2}>The Lady Bird Johnson Wildflower Center is a valuable resource for any gardener. </Text></TouchableOpacity>
    </View>
  )

}

const styles = StyleSheet.create({ 
  
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
})