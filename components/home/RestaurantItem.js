import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import RestaurantImage from '../utils/RestaurantImage';
import RestaurantInfo from '../utils/RestaurantInfo';

const RestaurantItem = ({restaurantData}) => {
    return (
        <TouchableOpacity activeOpacity={.9} style={{ marginBottom: 30 }}>
            {restaurantData?.map((restaurant,index)=>(<View key={index} style={styles.container}>
                <RestaurantImage image={restaurant.image_url} />
                <RestaurantInfo title={restaurant.name} rating={parseFloat(restaurant.rating)} />
            </View>))}
        </TouchableOpacity>
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
