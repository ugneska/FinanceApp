import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './HomeScreen'
import CartScreen from './CartScreen'
import AccountScreen from './AccountScreen'

const Tab = createMaterialBottomTabNavigator();

createBottomTabs = () => {
    return (
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: 'rgb(143,143,145)' }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    );
}

export default createBottomTabs