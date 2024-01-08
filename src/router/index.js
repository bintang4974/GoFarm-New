import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Cart, Checkout, EditProfile, History, HomeScreen, Search, Login, ProductDetail, Profile, SplashScreen, Register, PaymentGateway, FAQ, Onboarding, SuccesCheckout, Notification } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            {/* <Tab.Screen name="Search" component={Search} options={{ headerShown: false }} /> */}
            <Tab.Screen name="History" component={History} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash'>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Splash"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="MainApp"
                    component={MainApp}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ProductDetail"
                    component={ProductDetail}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Cart"
                    component={Cart}
                    // options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Checkout"
                    component={Checkout}
                    // options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="EditProfile"
                    component={EditProfile}
                    // options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="History"
                    component={History}
                    // options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="PaymentGateway"
                    component={PaymentGateway}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="FAQ"
                    component={FAQ}
                    // options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Onboarding"
                    component={Onboarding}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SuccessCheckout"
                    component={SuccesCheckout}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router