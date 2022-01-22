import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const items = [
    {
        image: require('../assets/images/shopping-bag.png'),
        text: "Pick-up"
    },
    {
        image: require('../assets/images/soft-drink.png'),
        text: "Soft Drinks"
    },
    {
        image: require('../assets/images/bread.png'),
        text: "Bakery Items"
    },
    {
        image: require('../assets/images/fast-food.png'),
        text: "Fast Foods"
    },
    {
        image: require('../assets/images/deals.png'),
        text: "Deals"
    },
    {
        image: require('../assets/images/coffee.png'),
        text: "Coffee & Tea"
    },
];

const Categories = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item, index) => (
                    <View key={index} style={styles.itemsview}>
                        <Image style={styles.image} source={item.image} />
                        <Text style={styles.itemtext}>{item.text}</Text>
                    </View>
                ))}

            </ScrollView>
        </View>
    );
};

export default Categories;

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 40,
        resizeMode: "contain"
    },
    itemsview: {
        alignItems: "center",
        marginRight: 30
    },
    itemtext: {
        fontSize: 13,
        fontWeight: "bold"
    },
    container: {
        backgroundColor: '#fff',
        marginTop:5,
        paddingVertical:10,
        paddingLeft:20
    }



});
