import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import AutoCompleteInput from 'react-native-tomtom-autocomplete';

const SearchBar = ({ setCity }) => {
    return (
        <View style={styles.container}>
            {/* to work with googleplaces auto complete we need to enable billing in that project  */}
            {/* here onpress will give data as shown below and we can set the state and use it in our api for finding data according to places */}
            <AutoCompleteInput
                inputProps={{
                    placeholder: 'Search Location...'

                }}
                inputContainerStyle={{
                    backgroundColor: "#eee",
                    borderRadius: 30,
                    padding: 15,
                    margin: 10,
                    borderColor: "grey",
                }}
                listItemsContainerStyle={{
                    borderColor: "grey",
                    marginRight: 5,
                    justifyContent: "center",
                    marginRight: 10,
                    
                }}
                titleStyle={{fontWeight:"700"}}
                delay={false}
                bottomDivider
                tomtomOptions={{ key: "84s1bROWVARuQyPFDDps2VxYD4CIzQg6" }}
                onPress={(data, details = null) => {
                    setCity(data.address.municipality);
                }}
            />
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
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
