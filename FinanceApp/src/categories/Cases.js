import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView
} from 'react-native';


import { connect } from 'react-redux'
import Products from '../components/Products'
import { cases } from '../Data'

class Cases extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroll}>
                    <View style={styles.goodsContainer}>
                        <Products products={cases} onPress={this.props.addItemToCart} />
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

export default connect(null, mapDispatchToProps)(Cases)

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
        marginBottom: 10
    },
});

