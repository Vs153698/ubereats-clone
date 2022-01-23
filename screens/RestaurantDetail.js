import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetail/About';

function RestaurantDetail(props) {
    return (
        <View>
            <About />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
        </View>
    );
}

export default RestaurantDetail;
const styles = StyleSheet.create({
    container: {

    },


});