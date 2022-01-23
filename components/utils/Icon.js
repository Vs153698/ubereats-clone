import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';


function Icon({icon,text}) {
    return (
        <View>
            <FontAwesome5 name={icon} size={25} color='black' style={{marginBottom:3,alignSelf:"center"}}/>
            <Text>{text}</Text>
        </View>
    );
}

export default Icon;