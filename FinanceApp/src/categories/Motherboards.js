import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { books } from '../Data'
import Products from '../components/Products'
import { connect } from 'react-redux'


class Motherboards extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Products products={books} onPress={this.props.addItemToCart} />
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
    }
}

export default connect(null, mapDispatchToProps)(Motherboards)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent: 'center'
    },
});

