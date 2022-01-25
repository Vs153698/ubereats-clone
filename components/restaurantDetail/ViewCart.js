//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import db from '../../firebase';
import { addDoc, collection, Timestamp } from "firebase/firestore";
import OrderItem from '../utils/OrderItem';
import LottieView from 'lottie-react-native';


// create a component
const ViewCart = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems)

    // ⏬ will work like this 
    // price : $13.50
    // Number ['13.50','20.5','25.32']
    // reduce 👉 [13.5 , 20.5 , 19.5]
    // reduce 👉 13.5 + 20.5 + 19.5 👉 43.5
    // here 0 is cummulator
    const total = items.map((item) => Number(item.price.replace("$", ""))).reduce((prev, curr) => prev + curr, 0)
    const totalusd = total.toLocaleString("en", {
        style: "currency",
        currency: "usd",
    })
    const addordertofirebase = async (items) => {
        try {
            const docRef = await addDoc(collection(db, "orders"), { items: items, restaurantName: restaurantName, createdAt: Timestamp.now() })
            setModalVisible(false)
            navigation.navigate("OrderCompleted")


        } catch (err) {
            setModalVisible(false)
            console.log("error aagya cart mai", err);
        }

    }

    return (
        <>
            <Modal animationType='slide' visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)} >
                <View style={styles.modalcontainer}>
                    <View style={styles.checkoutcontainer}>
                        <Text style={styles.modaltitle}>{restaurantName}</Text>
                        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                            {items.map((item, i) => (
                                <View key={i}>
                                    <OrderItem item={item} />
                                </View>
                            ))}
                        </ScrollView>
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subTotalText}>SubTotal</Text>
                            <Text style={styles.subTotalText}>{totalusd}</Text>
                        </View>
                        <TouchableOpacity onPress={() => addordertofirebase(items)}>
                            <View style={styles.btncontainer}>
                                <View style={styles.checkoutbtn}>
                                    <Text style={styles.checkout}>CheckOut</Text>
                                    <Text style={styles.checkout}>{totalusd}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            {total ? <View style={styles.cartcontainer}>
                <View style={styles.main} >
                    <TouchableOpacity onPress={() => setModalVisible(true)} activeOpacity={0.6} style={styles.container}>
                        <Text style={styles.title}>ViewCart</Text>
                        <Text style={styles.price}>{totalusd}</Text>
                    </TouchableOpacity>
                </View>
            </View> : (<></>)}
        </>
    );

};
// define your styles
const styles = StyleSheet.create({
    cartcontainer: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        padding: 15,
        bottom: 10,
        zIndex: 999
    },
    main: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%"
    },
    container: {
        marginTop: 20,
        backgroundColor: "black",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 13,
        borderRadius: 30,
        width: 300
    },
    title: {
        color: "white",
        fontSize: 20,
        marginRight: 30
    },
    price: {
        color: "white",
        fontSize: 20
    },
    checkout: {
        color: "white",
        fontSize: 16

    },
    checkoutbtn: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "black",
        padding: 15,
        borderRadius: 30,
        width: 300,
        alignItems: "center"
    },
    modalcontainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.7)"
    },
    checkoutcontainer: {
        backgroundColor: "white",
        padding: 16,
        height: 500,
        borderWidth: 1
    },
    modaltitle: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 10
    },
    subtotalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
        paddingVertical: 10
    },
    subTotalText: {
        textAlign: "left",
        fontWeight: "bold",
        fontSize: 15,
        marginBottom: 10
    },
    btncontainer: {
        justifyContent: "center",
        alignItems: "center",
    }
});
//make this component available to the app
export default ViewCart;




