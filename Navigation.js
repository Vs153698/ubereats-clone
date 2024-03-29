import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import configureStore from './redux/store'
import OrderCompleted from "./screens/OrderCompleted";
const store = configureStore()
export default function RootNavigation() {
    const Stack = createStackNavigator();
    const screenOptions = {
        headerShown: false,
    };
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='RestaurantDetail' component={RestaurantDetail} />
                    <Stack.Screen name='OrderCompleted' component={OrderCompleted} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
       
    )

}