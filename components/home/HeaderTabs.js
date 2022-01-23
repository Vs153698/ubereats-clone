import { StyleSheet, View } from 'react-native';
import React from 'react';
import HeaderButton from '../utils/HeaderButton'


const HeaderTabs = ({setActiveTab,activeTab}) => {
    return (
        <View style={styles.container}>
            <HeaderButton activeTab={activeTab} setActiveTab={setActiveTab}  title='Delivery' activeTab={activeTab} setActiveTab={setActiveTab} />
            <HeaderButton activeTab={activeTab} setActiveTab={setActiveTab} title='Pickup' activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
    );
};

export default HeaderTabs;
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignSelf: "center",
    
        
    }
});




