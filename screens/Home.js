import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItem from '../components/RestaurantItem';



const YELP_API_KEY = 'kPyKwHbNsy6KHu3z6_OmD1rybrNJ-HaHgwqJIFhDDkZTRrGIG3mX-v4KELBfJB0KRh7gqUGyncnRM2L_nRfmytcz6Q1p9JTljzCJaNDgCb2W4rc2owbc6P-kHx7sYXYx'
const Home = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [activeTab, setActiveTab] = useState('Delivery');
    const [city, setCity] = useState("Las Vegas");
    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };
        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) => {
                setRestaurantData(
                    json.businesses.filter((business) =>
                        business.transactions.includes(activeTab.toLowerCase())
                    )
                )
            })
    }
    useEffect(() => {
        getRestaurantsFromYelp()
    }, [city, activeTab]);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar setCity={setCity} />
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