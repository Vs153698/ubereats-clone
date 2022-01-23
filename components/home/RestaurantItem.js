import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import RestaurantImage from '../utils/RestaurantImage';
import RestaurantInfo from '../utils/RestaurantInfo';

const RestaurantItem = ({ restaurantData, navigation }) => {
    return (
        <>
            {restaurantData?.map((restaurant, index) => (
                <TouchableOpacity onPress={()=>navigation.navigate("RestaurantDetail",{
                    name: restaurant.name,
                    image: restaurant.image_url,
                    price: restaurant.price,
                    reviews: restaurant.review_count,
                    rating: restaurant.rating,
                    categories: restaurant.categories
                })} key={index} activeOpacity={.9} style={{ marginBottom: 30 }}>
                    <View style={styles.container}>
                        <RestaurantImage image={restaurant.image_url} />
                        <RestaurantInfo title={restaurant.name} rating={parseFloat(restaurant.rating)} />
                    </View>
                </TouchableOpacity>
            ))}
        </>
    );
};

export default RestaurantItem;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        padding: 15,
        backgroundColor: "white"
    }

});
