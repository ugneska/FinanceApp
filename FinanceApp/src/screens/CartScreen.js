import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text
} from 'react-native';
import Products from '../components/Products'
import { connect } from 'react-redux'

class CartScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroll}>
                    <View style={styles.goodsContainer}>

                        {this.props.cartItems.length > 0 ?
                            <Products
                                products={this.props.cartItems}
                                onPress={this.props.removeItem}
                            />
                            :
                            <Text style={styles.text}> No items in your cart</Text>
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (product) => dispatch({
            type:
                'REMOVE_FROM_CART', payload: product
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen)

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
    },
    text:{
        textAlign: 'center'
    }
});

