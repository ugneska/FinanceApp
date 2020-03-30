import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView
} from 'react-native';

import Products from '../components/Products'
import { hardDrives } from '../Data';
import { connect } from 'react-redux'

class Hard_drives extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroll}>
                    <View style={styles.goodsContainer}>
                        <Products products={hardDrives} onPress={this.props.addItemToCart} />
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

export default connect(null, mapDispatchToProps)(Hard_drives)

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

