import React  from 'react';
import { Text, View, StyleSheet, Linking, Platform, Image, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { useFonts, JuliusSansOne_400Regular } from '@expo-google-fonts/julius-sans-one';
import {  MontserratAlternates_400Regular } from '@expo-google-fonts/montserrat-alternates';
import { Card } from 'react-native-paper';
import TREES from '../shared/treesInfo';
import { useSelector, useDispatch } from 'react-redux';
import { addPlantToFavorites, removePlantFromFavorites } from '../redux/features/favorites';

  

function TopGunRose({props}) {

  let name = TREES[6].name;
  
     let favoritesList = useSelector((state) => state.favorites.value)
  
  getFavoritesList = () => {
   console.log(favoritesList)
  }

  const dispatch = useDispatch();

  return(

  <View>
   <Text>{name}</Text>
   <Image source={require('../images/topgun.jpg')} style={styles.image} alt="Top Gun Rose" />
   <Button 
      title="Add to Shopping List"
      onPress={() => { dispatch(addPlantToFavorites("Top Gun Rose"))} }
      />  
  <Button 
      title="Remove from Shopping List"
      onPress={() => { dispatch(removePlantFromFavorites("Top Gun Rose"))} }
      />
  <Button
    title="Show Favorites List"
    
    onPress={() => this.getFavoritesList() } />
   
  </View>

  )
}


const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    
  }
})

export default TopGunRose;

