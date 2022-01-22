import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const HeaderButton = ({title, setActiveTab, activeTab }) => {
    const handlepress = ()=>{
        setActiveTab(title);
    }
    return (

        <TouchableOpacity onPress={handlepress} style={{ ...styles.touchable, ...{ backgroundColor: activeTab === title ? "black" : "white" } }}>
            <Text style={{ ...styles.text, ...{ color: activeTab === title ? "white" : "black" } }} >{title}</Text>
        </TouchableOpacity>

    );
};

export default HeaderButton;

const styles = StyleSheet.create({
    touchable: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
    },
    text: {
        fontSize: 15,
        fontWeight: "900",
    }
});
