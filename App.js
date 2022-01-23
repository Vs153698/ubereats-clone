import { StatusBar, StyleSheet, View } from 'react-native';
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar/>
      {/* <Home /> */}
      <RestaurantDetail/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor:"#eee",
    flex:1

  }
});
