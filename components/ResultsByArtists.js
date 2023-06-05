import {Text,View,ScrollView, StyleSheet} from 'react-native';

import React from 'react';

export default function ResultsByArtists({route }){

    const { artists } = route.params;

    let myLoopByArtists = [];

    // Boucle pour afficher les résultats
    for (let i = 0; i < artists.length; i++) {
        myLoopByArtists.push(
            <View key={i} style={styles.container2}>
                <Text style={{marginBottom:10, color:'red'}}>Nom de l'artiste : {artists[i]?.artistName}</Text>
            </View>
        );
    }


    // Affichage des résultats seulement s'il y en a
    if (myLoopByArtists.length > 0) {
    return(
    <ScrollView style={{ marginTop: 50, marginLeft: 40}}>
        {/* résultat par artistes */}
        <View style={{ marginBottom: 20 }}>
        <Text>Artists</Text>
        <Text>Number of results : {artists.length}</Text>
        </View>
        <ScrollView style={styles.container}>
            {myLoopByArtists}
        </ScrollView>
    </ScrollView>
    );
    }
    else{
        return(
        <View style={{ marginTop: 50, marginLeft: 40}}>
            <Text>Artists</Text>
            <Text>Number of results : {artists.length}</Text>
            <View style={styles.container}>
                <Text style={{ padding:20 }} >Sorry ! There is no result for this search</Text>
            </View>
        </View>
        )

}
}

const styles = StyleSheet.create({
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
  });