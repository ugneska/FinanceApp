import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'

const ShoppingCartIcon = (props) =>
    (
        <View>
            <View style={{ position: 'absolute', height: 28, width: 28, borderRadius: 15, backgroundColor: 'rgba(95,197,123,0.8)', right: 15, bottom: 9, alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>{props.cartItems.length}</Text>
            </View>
            <Icon name="ios-cart" size={28} />
        </View>
    )

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

export default connect(mapStateToProps)(ShoppingCartIcon)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})