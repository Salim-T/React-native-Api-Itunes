import { StyleSheet, Text, View, ScrollView, Button, TextInput } from 'react-native';

import React, { useEffect } from 'react';

export default function SearchByArtists({ navigation}){
 
    const [artists, setArtists] = React.useState([]);
    const [value, setValue] = React.useState([]);

      // variable qui donne la valeur de l'input aux artistes

    let artist = artists;
    
    // url pour récupérer les artistes
    const urlArtists = `https://itunes.apple.com/search?term=${artists}&entity=allArtist&attribute=allArtistTerm&limit=2`;

    // fonction qui récupère les artistes de l'API puis navigue vers la page ResultsByArtists

    const fetchArtists = async () => {
      if (artist.length > 0 ) {
        try {
          const response = await fetch(urlArtists);
          const json = await response.json();
          const artists = json.results;
          navigation.navigate("Results By Artists", { artists });
          setValue("");
        } catch (error) {
          console.log(error);
        }
      }
      else{
        setValue("Please enter an artist name");
      }

    };

      return (

    <ScrollView style={{ marginTop: 50, marginLeft: 40}}>
      <TextInput style={styles.input}
        placeholder="Search by Artist"
        value={artist} onChangeText={setArtists}
      />
        <Text>{value}</Text>
        <View style={styles.button}>
        <Button 
        title="Go to results"
        onPress = {fetchArtists}
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
    marginTop: 20
  }
});
