import {Text,View,ScrollView, StyleSheet} from 'react-native';

import React from 'react';

export default function ResultsByTitles({route }){

    const { titles } = route.params;

    // Boucle pour contenir les resultats
    let myLoopByTitles = [];

    // Boucle pour afficher les résultats
      for (let i = 0; i < titles.length; i++) {
        // Conversion de la date en string
        let date = new Date(titles[i]?.releaseDate);
        let day = date.toDateString();
        myLoopByTitles.push(
          <View key={i} style={styles.container2}>
            <Text style={{ marginBottom: 10 }}>titre numéro {i + 1}</Text>
            <Text style={{ marginBottom: 10 }}>Type : {titles[i]?.kind}</Text>
            <Text style={{ marginBottom: 10 }}>
              Nom de l'artiste : {titles[i]?.artistName}
            </Text>
            <Text style={{ marginBottom: 10 }}>
              Nom de la piste : {titles[i]?.trackName}
            </Text>
            <Text style={{ marginBottom: 10 }}>
              Nom de l'album : {titles[i]?.collectionName}
            </Text>
            <Text style={{ marginBottom: 10 }}>Date de sortie : {day} </Text>
          </View>
        );
      }
    

    //si titles.length est vrai, on affiche les résultats

    if(myLoopByTitles.length > 0){
    return(
    <ScrollView style={{ marginTop: 50, marginLeft: 40}}>
        {/* résultat par titres */}
        <View style={{ marginBottom: 20 }}>
        <Text>Tracks</Text>
        <Text>Number of results : {titles.length}</Text>
        </View>
        <ScrollView style={styles.container}>
            {myLoopByTitles}
        </ScrollView>
    </ScrollView>
    )
    }else{
        return (
            <View style={{ marginTop: 50, marginLeft: 40}}>
                <Text>Tracks</Text>
                <Text>Number of results : {titles.length}</Text>
                <View style={styles.container}>
                    <Text style={{ padding:20 }} >Sorry ! There is no result for this search</Text>
                </View>
            </View>
        )
    }

    //le truc de chatgpt

    
    
      // if (titles.length) {
      //   return (
      //     <ScrollView style={{ marginTop: 50, marginLeft: 40 }}>
      //       {/* Résultats par titres */}
      //       <View style={{ marginBottom: 20 }}>
      //         <Text>Tracks</Text>
      //         <Text>Number of results : {titles.length}</Text>
      //       </View>
      //       <ScrollView style={styles.container}>
      //         {titles.map((title, index) => (
      //           <View key={index} style={styles.container2}>
      //             <Text style={{ marginBottom: 10 }}>titre numéro {index + 1}</Text>
      //             <Text style={{ marginBottom: 10 }}>Type : {title?.kind}</Text>
      //             <Text style={{ marginBottom: 10, color: "red" }}>
      //               Nom de l'artiste : {title?.artistName}
      //             </Text>
      //             <Text style={{ marginBottom: 10 }}>
      //               Nom de la piste : {title?.trackName}
      //             </Text>
      //             <Text style={{ marginBottom: 10 }}>
      //               Nom de l'album : {title?.collectionName}
      //             </Text>
      //             <Text style={{ marginBottom: 10 }}>Date de sortie : {day} </Text>
      //           </View>
      //         ))}
      //       </ScrollView>
      //     </ScrollView>
      //   );
      // } else {
      //   return (
      //     <View>
      //       <Text>Loading...</Text>
      //     </View>
      //   );
      // }
    
    

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