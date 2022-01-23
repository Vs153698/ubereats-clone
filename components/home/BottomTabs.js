import React from 'react';
import { View,StyleSheet } from 'react-native';
import Icon from '../utils/Icon';

function BottomTabs(props) {
    return (
        <View style={styles.container}>
            <Icon icon='home' text='Home'/>
            <Icon icon='search' text='Search'/>
            <Icon icon='shopping-bag' text='Grocery'/>
            <Icon icon='receipt' text='Orders'/>
            <Icon icon='user' text='Account'/>
        </View>
    );
}

export default BottomTabs;
const styles = StyleSheet.create({
    container: { 
      flexDirection:"row",
      margin:10,
      marginHorizontal:30,
      justifyContent:"space-between",
      
    }
  });
