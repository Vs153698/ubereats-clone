import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItem from '../components/RestaurantItem';


const Home = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [activeTab, setActiveTab] = useState('Delivery');
    useEffect(() => {
        fetch("https://foodbukka.herokuapp.com/api/v1/restaurant").then((data) => data.json()).then((data) => {
            activeTab === "Pickup" ? setRestaurantData(data.Result.filter((item) => item.restauranttype === 'eatery')) : setRestaurantData(data.Result)
        })


    }, [activeTab]);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem restaurantData={restaurantData} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eee"
    },
    header: {
        backgroundColor: "white",
        padding: 15
    }
});
