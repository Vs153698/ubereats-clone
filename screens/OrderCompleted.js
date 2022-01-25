import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { Divider } from 'react-native-elements/dist/divider/Divider';
// lottie react native is library for animated things
// get the animaion from lottiefiles
// https://lottiefiles.com/
import LottieView from 'lottie-react-native';
import { useRef } from 'react';


const OrderCompleted = () => {
    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems)
    const total = items.map((item) => Number(item.price.replace("$", ""))).reduce((prev, curr) => prev + curr, 0)
    const totalusd = total.toLocaleString("en", {
        style: "currency",
        currency: "usd",
    })
    const ref = useRef();
    const ref2 = useRef();

    useEffect(() => {
        ref.current.play()
        ref2.current.play()
    }, []);

    return (
        <View style={styles.container}>
            <LottieView ref={ref2} source={require('../assets/animations/check-mark.json')} loop={false} autoplay={true} style={{ height: 100, alignSelf: "center", marginBottom: 30, width: 100 }} />
            <Text style={styles.title}>Your order at {restaurantName} has been placed for {totalusd}</Text>
            <View style={styles.itemcontainer}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                    {items.map((food, index) => (
                        <View key={index}><View style={styles.containerfood}>
                            <View style={styles.infofood}>
                                <Text style={styles.title}>{food.titlefood}</Text>
                                <Text>{food.description}</Text>
                                <Text>{food.price}</Text>
                            </View>
                            <Image style={styles.image} source={{ uri: food.image }} resizeMode='cover' />
                        </View>
                            <Divider width={0.5} orientation='vertical' style={{ marginVertical: 10, marginHorizontal: 20 }} />
                        </View>
                    ))}
                </ScrollView>
                <LottieView ref={ref} source={require('../assets/animations/cooking.json')} autoplay={true} style={{ height: 250, alignSelf: "center", marginBottom: 20, width: 300 }} />
            </View>
        </View>
    );
};

export default OrderCompleted;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
    },
    itemcontainer: {
        flex: 1,
        padding: 15,
    },
    containerfood: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20
    },
    infofood: {
        width: 240,
        justifyContent: "space-evenly"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8
    },
    titlefood: {
        fontSize: 19,
        fontWeight: "bold"
    }

});
