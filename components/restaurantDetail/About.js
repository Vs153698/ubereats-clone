import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

function About({route}) {
    const {name, image, price, reviews, categories,rating} = route.params
    const formattedCategories = categories.map((cat)=> cat.title).join(" · ")
    const description  = `${formattedCategories} ${price  ? " · " + price : ""} · 🎟️ ·  ${rating} ⭐  (${reviews}+)`
    return (
        <View>
            <Image style={styles.image} source={{ uri: image }} resizeMode='cover' />
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
}

export default About;
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 180
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        marginTop:10,
        marginHorizontal:15
    },
    description:{
        marginTop:10,
        marginHorizontal:15,
        fontWeight: "400",
        fontSize:15.5
    }

});
// yelp api giving data in this form
// const yelpRestaurantData = {
//     name:'Farmhouse Kichen Thai Cuisine',
//     image:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
//     price:"$$",
//     reviews:"1500",
//     rating:"4.5",
//     categories:[{title:"Thai"},{title:"Comfort Food"}]
// }
