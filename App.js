import { StyleSheet} from 'react-native';
import React from 'react';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Components
import Search from './components/SearchByTitles';
import ResultsByTitles from './components/ResultsByTitles';
import HomeView from './components/HomeView';
import ResultsByArtists from './components/ResultsByArtists';
import SearchByArtists from './components/SearchByArtists';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer initialRouteName="Search">
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeView}></Stack.Screen>
      <Stack.Screen name="Search" component={Search}></Stack.Screen>
      <Stack.Screen name="SearchByArtists" component={SearchByArtists}></Stack.Screen>
      <Stack.Screen name="Results By Titles" component={ResultsByTitles}></Stack.Screen>
      <Stack.Screen name="Results By Artists" component={ResultsByArtists}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding:10
  },
  container: {
    border: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    width: 300,
    padding:20
  },
});
