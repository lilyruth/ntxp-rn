import React, { useState } from 'react';
import { SafeAreaView, TextInput, Text, View, StyleSheet, Linking, Image, ScrollView, Button } from 'react-native';
import { Divider } from 'react-native-elements';
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
  <View style={styles.list} key={item}>
   
   <Button
     title="x"
     color="#708A70"
     onPress={() => dispatch(removePlantFromFavorites(item))}></Button>
   <Text style={styles.textList}>{item}</Text>
  
   </View>
   )
  console.log(plant)

  return(
    <View style={styles.container}>
      <LinearGradient
        style={{height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center'}}
        colors={['lavender', 'lavender', 'lavender','#C0CEC0']} >
     <Text style={styles.title}>Shopping List</Text>
     <View style={{marginBottom: 20 }}>{shoppingList}</View>
     <Text>Add your own items here:</Text>
     <SafeAreaView>
      <TextInput
       onChangeText={onChangeText}
       value={plant}
       placeholder="Add your items here">
      </TextInput>
     <Button
      title="submit"
      color="#708A70"
      onPress={() => {dispatch(addPlantToFavorites(plant)); onChangeText('') }  }></Button>
      </SafeAreaView>
      </LinearGradient>
    </View>
  )

}

const styles = StyleSheet.create({
 container: {
  margin: 10,
  height: '100%',
  alignContent: 'center',
  justifyContent: 'center'
 },
 title: {
  fontFamily: 'JuliusSansOne_400Regular',
  fontSize: 32,
  marginTop: 20,
  marginBottom: 20,

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


})