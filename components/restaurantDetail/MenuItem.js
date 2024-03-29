import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
// for check box we use below library but install tslib also with it
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { useDispatch, useSelector } from 'react-redux';
const foods = [
    {
        id: 1,
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel 🔥 🔥",
        price: "$13.50",
        image: "https://wallpapercave.com/wp/wp3030132.jpg"
    },
    {
        id: 2,
        title: "Panner Tikka",
        description: "With Panner lettuce, tomato and sauce chilli 🔥",
        price: "$19.50",
        image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG"
    },
    {
        id: 3,
        title: "Chole Bhature",
        description: "With butter lettuce, tomato and sauce bechamel 🥘",
        price: "$15.70",
        image: "https://wallpapercave.com/wp/wp9199690.jpg"
    },
    {
        id: 4,
        title: "Chilli Potato",
        description: "With butter lettuce, tomato and sauce bechamel 🔥",
        price: "$16.50",
        image: "https://static.toiimg.com/photo/msid-79742397/79742397.jpg?211629"
    },
    {
        id: 5,
        title: "Masala Dosa",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$18.00",
        image: "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__1200_0_0_0_auto.jpg"
    },
    {
        id: 6,
        title: "Chilli Potato",
        description: "With butter lettuce, tomato and sauce bechamel 🔥",
        price: "$16.50",
        image: "https://static.toiimg.com/photo/msid-79742397/79742397.jpg?211629"
    },
    {
        id: 7,
        title: "Chole Bhature",
        description: "With butter lettuce, tomato and sauce bechamel 🥘",
        price: "$15.70",
        image: "https://wallpapercave.com/wp/wp9199690.jpg"
    },
    {
        id: 8,
        title: "Chole Bhature",
        description: "With butter lettuce, tomato and sauce bechamel 🥘",
        price: "$15.70",
        image: "https://wallpapercave.com/wp/wp9199690.jpg"
    },
    {
        id: 9,
        title: "Chole Bhature",
        description: "With butter lettuce, tomato and sauce bechamel 🥘",
        price: "$15.70",
        image: "https://wallpapercave.com/wp/wp9199690.jpg"
    },
    {
        id: 10,
        title: "Chole Bhature",
        description: "With butter lettuce, tomato and sauce bechamel 🥘",
        price: "$15.70",
        image: "https://wallpapercave.com/wp/wp9199690.jpg"
    },
    {
        id: 11,
        title: "Chole Bhature",
        description: "With butter lettuce, tomato and sauce bechamel 🥘",
        price: "$15.70",
        image: "https://wallpapercave.com/wp/wp9199690.jpg"
    },
    {
        id: 12,
        title: "Chole Bhature",
        description: "With butter lettuce, tomato and sauce bechamel 🥘",
        price: "$15.70",
        image: "https://wallpapercave.com/wp/wp9199690.jpg"
    },
]

function MenuItem({ restaurantName }) {
    const items = useSelector((state) => state.cartReducer.selectedItems.items)
    const dispatch = useDispatch()
    const selectitem = (item, checkboxValue) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: { ...item, restaurantName, checkboxValue: checkboxValue }
        })
    }
    const isFoodinCart = (food, items) => {
        return Boolean(items.find((item) => item.id === food.id))
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}><View style={styles.container}>
                    <BouncyCheckbox isChecked={isFoodinCart(food, items)} onPress={(checkboxValue) => selectitem(food, checkboxValue)} iconStyle={{ borderColor: "lighgray", borderRadius: 0 }} fillColor='green' />
                    <View style={styles.info}>
                        <Text style={styles.title}>{food.title}</Text>
                        <Text>{food.description}</Text>
                        <Text>{food.price}</Text>
                    </View>
                    <Image style={styles.image} source={{ uri: food.image }} resizeMode='cover' />
                </View>
                    <Divider width={0.5} orientation='vertical' style={{ marginVertical: 10, marginHorizontal: 20 }} />
                </View>
            ))}
        </ScrollView>
    );
}

export default MenuItem;
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20
    },
    info: {
        width: 240,
        justifyContent: "space-evenly"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8
    },
    title: {
        fontSize: 19,
        fontWeight: "bold"
    }

});