import React, { useState, Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Separator from './Separator';
import { useFonts, JuliusSansOne_400Regular } from '@expo-google-fonts/julius-sans-one';



function Flowers ({navigation}) {

  
  return(
   
     <View style={{height: '100%'}}> 
       <LinearGradient
    
        colors={['lavender', 'lavender', 'lavender','#C0CEC0']}
        style={{height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center'}} >       
 
        <Text style={styles.title}>Flowers</Text>

         <View>
            
            <Button 
               title= "Dragon's Breath"
                color='#6A006A'
                accessibilityLabel="Information about the Dragon's Breath flower"
               onPress={() => navigation.navigate('Dragon')}
               />
            <Separator />
            <Button 
               title= "Firecracker"
                color='#6A006A'
                accessibilityLabel="Information about the Firecracker flower"
               onPress={() => navigation.navigate('Firecracker')}
               />
                <Separator />
             <Button 
               title= "Hibiscus"
                color='#6A006A'
                accessibilityLabel="Information about the Hibiscus"
               onPress={() => navigation.navigate('Hibiscus')}
               />
                 <Separator />
             <Button 
               title= "Hydrangea"
                color='#6A006A'
                accessibilityLabel="Information about the Hydrangea flower"
               onPress={() => navigation.navigate('Hydrangea')}
               />
               <Separator />
             <Button 
               title= "Petunias"
                color='#6A006A'
                accessibilityLabel="Information about Petunias"
               onPress={() => navigation.navigate('Petunias')}
               />
              
          </View>

      </LinearGradient>
     </View>
   
    )
  }


export default Flowers;

const styles = StyleSheet.create({
 
  title: {
     fontFamily: 'JuliusSansOne_400Regular',
     fontSize: 32,
     marginTop: 20,
     marginBottom: 20,
  },

  
});



