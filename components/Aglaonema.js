import React  from 'react';
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {  JuliusSansOne_400Regular } from '@expo-google-fonts/julius-sans-one';
import HOUSEPLANTS from '../shared/houseplantsInfo';
import { useSelector, useDispatch } from 'react-redux';
import { addPlantToFavorites, removePlantFromFavorites } from '../redux/features/favorites';
import Separator from './Separator';

const confirmationAdded = () => {
 
 Alert.alert(
   "Confirmation:",
   "Added to shopping list."
 )
}

const confirmationRemoved = () => {
 
 Alert.alert(
   "Confirmation:",
   "Removed from shopping list."
 )
}

function Aglaonema({props}) {

  let name = HOUSEPLANTS[0].name;
  let description = HOUSEPLANTS[0].description;

  const dispatch = useDispatch();

  return(

  <View style={styles.container}>
       <LinearGradient
        style={{height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center'}}
        colors={['lavender', 'lavender', 'lavender','#C0CEC0']} >
   <Text style={styles.title}>{name}</Text>
   
   <Image source={require('../images/aglaonema.jpg')} style={styles.image} alt="aglaonema commutatum" />

   <Text style={styles.description}>{description}</Text>

   <Button 
      title="Add to Shopping List"
      color='#6A006A'
      accessibilityLabel="Add Aglaonema Commutatum to Shopping List"
      onPress={() => { dispatch(addPlantToFavorites("Aglaonema Commutatum")); confirmationAdded()} }
      />  
  
  <Separator />

  <Button 
      title="Remove from Shopping List"
      color='#708A70'
      accessibilityLabel="Remove Aglaonema Commutatum from Shopping List"
    
      onPress={() => { dispatch(removePlantFromFavorites("Aglaonema Commutatum")); confirmationRemoved()} }
      />

  <Separator />
      
 
  </LinearGradient>
   
  </View>

  )
}


const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  title: {
     fontFamily: 'JuliusSansOne_400Regular',
     fontSize: 32,
     marginTop: 20,
     marginBottom: 20,
   
  },
  image: {
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#708A70'
  },
  description: {
    fontSize: 16,
    width: '75%', 
    margin: 20,
    lineHeight: 30,
    textAlign: 'justify'

  },
 
})

export default Aglaonema;

