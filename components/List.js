import React, { useState } from 'react';
import { SafeAreaView, TextInput, Text, View, StyleSheet, Share, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useSelector, useDispatch } from 'react-redux';
import { addPlantToFavorites, removePlantFromFavorites } from '../redux/features/favorites';
import Separator from './Separator';


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

   

const onShare = () => {
 const sendingList = favoritesList.join(', ');
 Share.share({
  
  message: `Take a look at my plants list! ${sendingList}`,
  title: "Plants list"

 })
 
}

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
      <Separator />
      <Button
      title="Share this list"
      color="#708A70"
      onPress={() => onShare()}></Button>
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