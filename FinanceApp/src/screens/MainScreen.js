import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './HomeScreen'
import CartScreen from './CartScreen'
import SettingsScreen from './SettingsScreen'

import ShoppingCartIcon from '../components/ShoppingCartIcon'
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createMaterialBottomTabNavigator();

createBottomTabs = () => {
    return (
            <Tab.Navigator
                initialRouteName="Home"
                activeColor="#f0edf6"
                inactiveColor="black"
                barStyle={{ backgroundColor: 'rgb(143,143,145)' }}
            >
                <Tab.Screen name="Home" component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Icon name="ios-home" color={color} size={28} />
                        ),
                    }}

                />
                <Tab.Screen name="Cart" component={CartScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            // <Icon name="ios-cart" color={color} size={28} />
                            <ShoppingCartIcon />
                        ),
                    }}
                />
                <Tab.Screen name="Settings" tabBarIcon={<Icon name='ios-settings' />} component={SettingsScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Icon name="ios-settings" color={color} size={28} />
                        ),
                    }}
                />
            </Tab.Navigator>
    );
}

export default createBottomTabs