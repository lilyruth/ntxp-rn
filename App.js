import * as React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import MainComponent from './components/MainComponent';
import AppLoading from 'expo-app-loading';
import { useFonts, JuliusSansOne_400Regular } from '@expo-google-fonts/julius-sans-one';
import { MontserratAlternates_400Regular } from '@expo-google-fonts/montserrat-alternates';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs()

export default function App(props) {
   
   let [fontsLoaded] = useFonts({
     JuliusSansOne_400Regular,
     MontserratAlternates_400Regular
   });

    if (!fontsLoaded) {
      return <AppLoading />;
    } else {
    return (
      <Provider store={store}>
       <MainComponent />
      </Provider>  
    );
  }
}

