import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Home, Trees, Flowers, ShoppingList, Vitex, Creek, Crape, Magnolia, Redbud, Holly, Nurseries, Houseplants, TopGunRose, Quince,  Dragon, Firecracker, Hibiscus, Hydrangea, Petunias, Aglaonema, Pothos, Spider, Succulents, Tradescantia  } from './Plants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'react-native-elements';
import { Card } from 'react-native-paper';

import { 
JuliusSansOne_400Regular 
} from '@expo-google-fonts/julius-sans-one';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


function Logo() {


  return (
    <View style={styles.title} >
    <Image 
      style={{ width: 30, height: 30, marginRight: 10, transform:  [{translateX: -15}]}} 
      source={require('../images/logo.png')}
      />
    <Text style={{ transform:  [{translateX: -15}], fontSize: 20, color: 'darkmagenta', fontWeight: 'bold', fontFamily: 'JuliusSansOne_400Regular' }}>North Texas Plants</Text>
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
          name="Home" 
          component={Home} 
          options={{
          headerTitle: props => <Logo {...props} />,
          headerStyle: {
          backgroundColor: '#D0DFD0',
           },
          }}/>
    </HomeStack.Navigator>
  )
}

const TreesStack = createNativeStackNavigator();

function TreesStackScreen() {
  return (
    <TreesStack.Navigator>
      <TreesStack.Screen 
          name="Trees" 
          component={Trees} 
          options={{
          headerTitle: props => <Logo {...props} />,
          headerStyle: {
          backgroundColor: '#D0DFD0',
           },
          }}/>
      <TreesStack.Screen 
          name="Creek" 
          component={Creek} 
          options={{
          headerTitle: props => <Logo {...props} />,
          headerStyle: {
          backgroundColor: '#D0DFD0',
           },
          }}/>
       <TreesStack.Screen 
          name="Crape" 
          component={Crape} 
          options={{
          headerTitle: props => <Logo {...props} />,
          headerStyle: {
          backgroundColor: '#D0DFD0',
           },
          }}/>
      <TreesStack.Screen 
          name="Magnolia" 
          component={Magnolia} 
          options={{
          headerTitle: props => <Logo {...props} />,
          headerStyle: {
          backgroundColor: '#D0DFD0',
           },
          }}/>
       <TreesStack.Screen 
          name="Redbud" 
          component={Redbud} 
          options={{
          headerTitle: props => <Logo {...props} />,
          headerStyle: {
          backgroundColor: '#D0DFD0',
           },
          }}/>
       <TreesStack.Screen 
          name="Holly" 
          component={Holly} 
          options={{
          headerTitle: props => <Logo {...props} />,
          headerStyle: {
          backgroundColor: '#D0DFD0',
           },
          }}/>
      <TreesStack.Screen 
          name="Vitex" 
          component={Vitex} 
          options={{
          headerTitle: props => <Logo {...props} />,
          headerStyle: {
          backgroundColor: '#D0DFD0',
           },
          }}/>
       <TreesStack.Screen 
          name="TopGunRose" 
          component={TopGunRose} 
          options={{
          headerTitle: props => <Logo {...props} />,
          headerStyle: {
          backgroundColor: '#D0DFD0',
           },
          }}/>
        <TreesStack.Screen 
          name="Quince" 
          component={Quince} 
          options={{
          headerTitle: props => <Logo {...props} />,
          headerStyle: {
          backgroundColor: '#D0DFD0',
           },
          }}/>
    </TreesStack.Navigator>
  )
}

const FlowersStack = createNativeStackNavigator();

function FlowersStackScreen() {
  return (
    <FlowersStack.Navigator>
      <FlowersStack.Screen 
          name="Flowers" 
          component={Flowers} 
          options={{
          headerTitle: props => <Logo {...props} />,
          headerStyle: {
          backgroundColor: '#D0DFD0',
           },
          }}/>
      <FlowersStack.Screen 
          name="Dragon" 
          component={Dragon} 
          options={{
          headerTitle: props => <Logo {...props} />,
          headerStyle: {
          backgroundColor: '#D0DFD0',
           },
          }}/>
       <FlowersStack.Screen 
          name="Firecracker" 
          component={Firecracker} 
          options={{
          headerTitle: props => <Logo {...props} />,
          headerStyle: {
          backgroundColor: '#D0DFD0',
           },
          }}/>
      <FlowersStack.Screen 
          name="Hibiscus" 
          component={Hibiscus} 
          options={{
          headerTitle: props => <Logo {...props} />,
          headerStyle: {
          backgroundColor: '#D0DFD0',
           },
          }}/>
       <FlowersStack.Screen 
          name="Hydrangea" 
          component={Hydrangea} 
          options={{
          headerTitle: props => <Logo {...props} />,
          headerStyle: {
          backgroundColor: '#D0DFD0',
           },
          }}/>
       
        <FlowersStack.Screen 
          name="Petunias" 
          component={Petunias} 
          options={{
          headerTitle: props => <Logo {...props} />,
          headerStyle: {
          backgroundColor: '#D0DFD0',
           },
          }}/>
    </FlowersStack.Navigator>
  )
}

const HouseplantsStack = createNativeStackNavigator();

function HouseplantsStackScreen() {
  return (
    <HouseplantsStack.Navigator>
      <HouseplantsStack.Screen 
          name="Houseplants" 
          component={Houseplants} 
          options={{
          headerTitle: props => <Logo {...props} />,
          headerStyle: {
          backgroundColor: '#D0DFD0',
           },
          }}/>
      <HouseplantsStack.Screen 
          name="Aglaonema" 
          component={Aglaonema} 
          options={{
          headerTitle: props => <Logo {...props} />,
          headerStyle: {
          backgroundColor: '#D0DFD0',
           },
          }}/>
      <HouseplantsStack.Screen 
          name="Pothos" 
          component={Pothos} 
          options={{
          headerTitle: props => <Logo {...props} />,
          headerStyle: {
          backgroundColor: '#D0DFD0',
           },
          }}/>
       <HouseplantsStack.Screen 
          name="Spider" 
          component={Spider} 
          options={{
          headerTitle: props => <Logo {...props} />,
          headerStyle: {
          backgroundColor: '#D0DFD0',
           },
          }}/>
      <HouseplantsStack.Screen 
          name="Succulents" 
          component={Succulents} 
          options={{
          headerTitle: props => <Logo {...props} />,
          headerStyle: {
          backgroundColor: '#D0DFD0',
           },
          }}/>
       <HouseplantsStack.Screen 
          name="Tradescantia" 
          component={Tradescantia} 
          options={{
          headerTitle: props => <Logo {...props} />,
          headerStyle: {
          backgroundColor: '#D0DFD0',
           },
          }}/>
       
    </HouseplantsStack.Navigator>
  )
}

export default function MainComponent() {

  
  return (
     
      <NavigationContainer>
         <Tab.Navigator
           screenOptions={({ route }) => ({
              headerShown: false,
              
              tabBarIcon: ({focused, color, size }) => {
                let iconName;
                let iconColor;
                
                if (route.name === 'Home') {  
                  iconName = 'home';
                } else if (route.name === 'Trees & Shrubs') {
                  iconName = 'tree';
                } else if (route.name === 'Flowers') {
                  iconName = 'flower-outline';
                } else if (route.name === 'Houseplants') {
                  iconName = 'leaf';
                } else if (route.name === 'Nurseries') {
                  iconName = 'map-marker';
                } else if (route.name === 'Shopping List') {
                  iconName = 'heart-outline';
                }

                if (focused) {
                  iconColor='darkmagenta'
                } else {
                  iconColor='#6A006A'
                }
                return <MaterialCommunityIcons name={iconName} color={iconColor} size={26} />
              },
              tabBarActiveTintColor: 'darkmagenta',
              tabBarInactiveTintColor: '#6A006A', 
              tabBarActiveBackgroundColor:'#D0DFD0',
              tabBarInactiveBackgroundColor: '#C0CEC0'

           })}>

          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Trees & Shrubs" component={TreesStackScreen} />
          <Tab.Screen name="Flowers" component={FlowersStackScreen} />
          <Tab.Screen name="Houseplants" component={HouseplantsStackScreen} />
          <Tab.Screen name="Nurseries" component={Nurseries} />
          <Tab.Screen name="Shopping List" component={ShoppingList} />
        </Tab.Navigator>
      </NavigationContainer>
    
  )
}



const styles = StyleSheet.create({

  title: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }
});

