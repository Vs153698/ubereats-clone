import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetail/About';
import MenuItem from '../components/restaurantDetail/MenuItem';

function RestaurantDetail({route}) {
    return (
        <SafeAreaView style={styles.container}>
            <About route={route} />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            <MenuItem/>
        </SafeAreaView>
    );
}

export default RestaurantDetail;
const styles = StyleSheet.create({
    container: {
        flex:1
    },


});