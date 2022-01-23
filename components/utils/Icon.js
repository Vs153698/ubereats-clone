import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';


function Icon({icon,text}) {
    return (
        <TouchableOpacity activeOpacity={0.2}>
        <View>
            <FontAwesome5 name={icon} size={25} color='black' style={{marginBottom:3,alignSelf:"center"}}/>
            <Text>{text}</Text>
        </View>
        </TouchableOpacity>
    );
}

export default Icon;