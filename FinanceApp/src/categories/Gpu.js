import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView
} from 'react-native';

import { gpu } from '../Data'
import Products from '../components/Products'
import { connect } from 'react-redux'

class Gpu extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroll}>
                    <View style={styles.goodsContainer}>
                        <Products products={gpu} onPress={this.props.addItemToCart} />
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

export default connect(null, mapDispatchToProps)(Gpu)

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

