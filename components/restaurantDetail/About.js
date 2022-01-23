import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const image = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
const title = 'Farmhouse Kichen Thai Cuisine'
const description = 'Thai · Comfort Food · $$ · 🎟️ · 4 ⭐'
function About() {
    return (
        <View>
            <Text>{description}</Text>
        </View>
    );
}

export default About;
const styles = StyleSheet.create({
    

});