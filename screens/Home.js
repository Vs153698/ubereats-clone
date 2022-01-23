import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import HeaderTabs from '../components/home/HeaderTabs';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItem from '../components/home/RestaurantItem';
import BottomTabs from '../components/home/BottomTabs';



const YELP_API_KEY = 'kPyKwHbNsy6KHu3z6_OmD1rybrNJ-HaHgwqJIFhDDkZTRrGIG3mX-v4KELBfJB0KRh7gqUGyncnRM2L_nRfmytcz6Q1p9JTljzCJaNDgCb2W4rc2owbc6P-kHx7sYXYx'
const Home = ({ navigation }) => {
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
        <View style={styles.container}>
            <View style={styles.header}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar setCity={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem restaurantData={restaurantData} navigation={navigation} />
            </ScrollView>
            {/* <Divider width={1}/>  */}
            <View style={styles.bottom}>
                <BottomTabs />
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eee",
        flex: 1, // using flex1 is very important for SafeAreaView,
    },
    header: {
        backgroundColor: "white",
        padding: 15
    },
    bottom: {
        backgroundColor: "white"
    }

});