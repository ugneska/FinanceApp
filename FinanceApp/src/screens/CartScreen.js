import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import HomeScreen from './HomeScreen'

class CartScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>CartScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    }
})

export default CartScreen
