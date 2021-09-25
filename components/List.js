import React, { useState } from 'react';
import { SafeAreaView, TextInput, Text, View, StyleSheet, Linking, Image, ScrollView, Button } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { Card } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { addPlantToFavorites, removePlantFromFavorites } from '../redux/features/favorites';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

export default function ShoppingList(props) {

  const [plant, onChangeText ] = useState("");

  const dispatch = useDispatch();

  let favoritesList = useSelector((state) => state.favorites.value)
 
  let shoppingList = favoritesList.map((item) => 
  <View key={item}>
   <Text>{item}</Text>
   <Button
     title="Remove"
     onPress={() => dispatch(removePlantFromFavorites(item))}></Button>
   </View>
   )
  console.log(plant)

  return(
    <View style={styles.container}>
     <Text>Shopping List</Text>
     <View>{shoppingList}</View>
     <Text>Add your own items here:</Text>
     <SafeAreaView>
      <TextInput
       onChangeText={onChangeText}
       value={plant}
       placeholder="Add your items here">
      </TextInput>
     <Button
      title="submit"
      onPress={() => {dispatch(addPlantToFavorites(plant)); onChangeText('') }  }></Button>
      </SafeAreaView>
    </View>
  )

}

const styles = StyleSheet.create({
 container: {
  margin: 10,
  height: '100%',
  alignContent: 'center',
  justifyContent: 'center'
 }
})