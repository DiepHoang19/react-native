import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../Account/Login/Login'
import Register from '../Account/Register/Register'
import Home from '../Home/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'



const Stack = createNativeStackNavigator();
const RouterNavigate = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RouterNavigate;

const styles = StyleSheet.create({})