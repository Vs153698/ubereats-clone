import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const RestaurantImage = ({image}) => {
    return (
        <>
        <Image style={styles.image} source={{ uri: image }} resizeMode='cover' />
        <TouchableOpacity style={styles.heart}>
            <Feather name='heart' size={25} color="#fff"/>
        </TouchableOpacity>
        </>
    );
};

export default RestaurantImage;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 180
    },
    heart:{
        position:"absolute",
        right:20,
        top:20
    }
});
