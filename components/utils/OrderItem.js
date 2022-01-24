import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const OrderItem = ({item}) => {
    const {title, price,image} = item
  return (
    <View style={styles.conatiner}>
      <Image style={styles.image} source={{ uri: image }}/>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text2}>{price}</Text>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
    conatiner:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:20,
        borderBottomColor:"#999",
        borderBottomWidth:1
    },
    text:{
        fontSize:16,
        fontWeight:"600"
    },
    text2:{
        opacity:0.7,
        fontSize:16
    },
    image:{
      height:50,
      width:50,
      borderRadius:10
    },
});
