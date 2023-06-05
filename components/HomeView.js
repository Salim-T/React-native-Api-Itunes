import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function HomeView({ navigation }) {

    return (

        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the iTunes Search App</Text>

            <View style={styles.button}>
                <Button
                    title="Search by title"
                    onPress={() => navigation.navigate('Search')}
                />
            </View>

            <View style={styles.button}>
                <Button
                    title="Search by artist"
                    onPress={() => navigation.navigate('SearchByArtists')}
                />
            </View>

        </View>

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
      width: 300,
      paddingTop:20,
      paddingLeft:20,
      paddingRight:20,
      marginTop:50,
      marginLeft:40,
    },
    container2: {
      border: 'solid',
      borderColor: 'black',
      borderWidth: 1,
      width: '100%',
      padding:10,
      marginBottom:20,
    },
    title: {
        fontSize: 0,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        marginTop:20,
    }
  });