import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetail/About';
import MenuItem from '../components/restaurantDetail/MenuItem';
import ViewCart from '../components/restaurantDetail/ViewCart';

function RestaurantDetail({ route, navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <About route={route} />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            <MenuItem restaurantName={route.params.name} />
            <ViewCart navigation={navigation} restaurantName={route.params.name} />
        </SafeAreaView>
    );
}

export default RestaurantDetail;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },


});