import React, { useState, Component } from 'react';
import { Text, View, StyleSheet, Linking, Image, ScrollView, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import  TREES  from '../shared/treesInfo';
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Separator from './Separator';
import { useFonts, JuliusSansOne_400Regular } from '@expo-google-fonts/julius-sans-one';



function Trees ({navigation}) {

  
  return(
   
     <View style={{height: '100%'}}> 
       <LinearGradient
    
        colors={['lavender', 'lavender', 'lavender','#C0CEC0']}
        style={{height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center'}} >       
 
        <Text style={styles.title}>Trees & Shrubs</Text>

         <View>
            
            <Button 
               title= "Creek Willow"
                color='#6A006A'
                accessibilityLabel="Information about the Creek Willow Tree"
               onPress={() => navigation.navigate('Creek')}
               />
            <Separator />
            <Button 
               title= "Crape Myrtle"
                color='#6A006A'
                accessibilityLabel="Information about Crape Myrtles"
               onPress={() => navigation.navigate('Crape')}
               />
                <Separator />
             <Button 
               title= "Magnolia"
                color='#6A006A'
                accessibilityLabel="Information about Magnolias"
               onPress={() => navigation.navigate('Magnolia')}
               />
                 <Separator />
             <Button 
               title= "Redbud"
                color='#6A006A'
                accessibilityLabel="Information about Redbuds"
               onPress={() => navigation.navigate('Redbud')}
               />
               <Separator />
             <Button 
               title= "Nellie Stevens Holly"
                color='#6A006A'
                accessibilityLabel="Information about the Nellie Stevens Holly"
               onPress={() => navigation.navigate('Holly')}
               />
               <Separator />
              <Button 
               title= "Vitex"
                color='#6A006A'
                accessibilityLabel="Information about the Vitex"
               onPress={() => navigation.navigate('Vitex')}
               />
               <Separator />
              <Button 
               title= "Top Gun Rose"
                color='#6A006A'
                accessibilityLabel="Information about the Top Gun Rose"
               onPress={() => navigation.navigate('TopGunRose')}
               />
                  <Separator />
               <Button 
               title= "Quince"
                color='#6A006A'
                accessibilityLabel="Information about the Quince"
               onPress={() => navigation.navigate('Quince')}
               />
            
          </View>

      </LinearGradient>
     </View>
   
    )
  }


export default Trees;

const styles = StyleSheet.create({
 
  title: {
     fontFamily: 'JuliusSansOne_400Regular',
     fontSize: 32,
     marginTop: 20,
     marginBottom: 20,
  },

  
});



