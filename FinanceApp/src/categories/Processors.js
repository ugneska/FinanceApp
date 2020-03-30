import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView
} from 'react-native';

import Products from '../components/Products'
import { processors } from '../Data';
import { connect } from 'react-redux'

class Processors extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroll}>
                    <View style={styles.goodsContainer}>
                        <Products products={processors} onPress={this.props.addItemToCart} />
                    </View>
                </ScrollView>
            </View>

        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
    }
}

export default connect(null, mapDispatchToProps)(Processors)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent: 'center',
    },

    scroll: {
        marginTop: 15,
        marginHorizontal: 15,
        marginBottom: 10,
    },
});

