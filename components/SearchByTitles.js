import { StyleSheet, Text, View, ScrollView, Button, TextInput } from 'react-native';

import React from 'react';

export default function SearchByTitles({ navigation}){
    
  const [title, setTitle] = React.useState([]);
  const [value, setValue] = React.useState([]);

  // variable qui récupère la valeur de l'input aux titres
  
  let titleInput = title;

  //url pour récupérer les titres  
  const urlTitles = `https://itunes.apple.com/search?term=${title}&entity=musicTrack&attribute=songTerm&media=music&limit=5`;
  

  //fonction qui récupère les titres de l'API puis navigue vers la page ResultsByTitles

  const fetchTitles = async () => {
    if (titleInput.length > 0 ){
    try {
      const response = await fetch(urlTitles);
      const json = await response.json();
      const titles = json.results;
      navigation.navigate('Results By Titles', {titles});
      setValue("");
    } catch (error) {
      console.log(error);
    }
    }
    else{
      setValue("Please enter a title");
    } 
  };

  return (

    <ScrollView style={{ marginTop: 50, marginLeft: 40}}>
      <TextInput style={styles.input}
        placeholder="Search by title"
        value={titleInput} onChangeText={setTitle}
      />
        <Text>{value}</Text>
        <View style={styles.button}>
        <Button 
        title="Go to results"
        onPress = {fetchTitles}
      />

        </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  input: {
    height: 'auto',
    borderWidth: 1,
    width:300,
    padding:10
  },
  container: {
    border: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    width: 300,
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20,
    marginBottom:20,
  },
  container2: {
    border: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
    padding:10,
    marginBottom:20,
  },
  button: {
    width: 300,
    marginTop: 20,
  }
});