import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { AntDesign, Ionicons } from '@expo/vector-icons';


const SearchBar = () => {
    return (
        <View style={styles.container}>
            {/* to work with googleplaces auto complete we need to enable billing in that project  */}
            {/* here onpress will give data as shown below and we can set the state and use it in our api for finding data according to places */}
            <GooglePlacesAutocomplete query={{key:'AIzaSyDebscJJwRGSVplHtwBvueVkeZn8GhdmsM',language:'en'}} styles={{
                textInput: {
                    backgroundColor: '#eee',
                    borderRadius: 20,
                    fontWeight: "700",
                    marginTop: 7
                },
                textInputContainer: {
                    backgroundColor: '#eee',
                    borderRadius: 50,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 10

                }
            }} onPress={(data,details = null)=>{
                    console.log(data);
            }} renderLeftButton={() => (
                <View style={styles.iconleft}><Ionicons name="location-sharp" size={24} /></View>
            )} renderRightButton={() => (
                <View style={styles.rightgoogle}>
                    <AntDesign name='clockcircle' size={11} style={{ marginRight: 6 }} />
                    <Text>Search</Text>
                </View>
            )} placeholder='Search...' />
            {/*in acobe google we didnt use style we used styles  as a prop as it is build in package style */}
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flexDirection: "row",
    },
    iconleft: {
        marginLeft: 10
    },
    rightgoogle: {
        flexDirection: "row",
        marginRight: 8,
        backgroundColor: "white",
        padding: 9,
        borderRadius: 30,
        alignItems: 'center',
    }


});
