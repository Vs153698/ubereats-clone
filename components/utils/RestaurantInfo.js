import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const RestaurantInfo = ({title,rating}) => {
    return (
        <View style={styles.container}>
            <View style={styles.infocontainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.time}>30-45 · min </Text>
            </View>
            <View style={styles.rating}>
                <Text style={styles.ratingtext}>{rating}</Text>
            </View>
        </View>
    );
};

export default RestaurantInfo;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        
    },
    infocontainer: {

    },
    title: {
        fontSize: 15,
        fontWeight: "bold"
    },
    time: {
        fontSize: 13,
        color: "gray"
    },
    rating: {
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:15,
    },

});
