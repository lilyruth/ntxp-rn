import React, { useState, Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Separator from './Separator';
import { useFonts, JuliusSansOne_400Regular } from '@expo-google-fonts/julius-sans-one';



function Houseplants({navigation}) {

  
  return(
   
     <View style={{height: '100%'}}> 
       <LinearGradient
    
        colors={['lavender', 'lavender', 'lavender','#C0CEC0']}
        style={{height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center'}} >       
 
        <Text style={styles.title}>Houseplants</Text>

         <View>
            
            <Button 
               title= "Aglaonema Commutatum"
                color='#6A006A'
                accessibilityLabel="Information about Aglaonema Commutatum"
               onPress={() => navigation.navigate('Aglaonema')}
               />
            <Separator />
            <Button 
               title= "Pothos Ivy"
                color='#6A006A'
                accessibilityLabel="Information about Pothos Ivy"
               onPress={() => navigation.navigate('Pothos')}
               />
                <Separator />
             <Button 
               title= "Spider Plant"
                color='#6A006A'
                accessibilityLabel="Information about the Spider Plant"
               onPress={() => navigation.navigate('Spider')}
               />
                 <Separator />
             <Button 
               title= "Succulents"
                color='#6A006A'
                accessibilityLabel="Information about Succulents"
               onPress={() => navigation.navigate('Succulents')}
               />
               <Separator />
             <Button 
               title= "Tradescantia"
                color='#6A006A'
                accessibilityLabel="Information about Tradescantia"
               onPress={() => navigation.navigate('Tradescantia')}
               />
              
          </View>

      </LinearGradient>
     </View>
   
    )
  }


export default Houseplants;

const styles = StyleSheet.create({
 
  title: {
     fontFamily: 'JuliusSansOne_400Regular',
     fontSize: 32,
     marginTop: 20,
     marginBottom: 20,
  },

  
});



