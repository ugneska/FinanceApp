import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

class Products extends Component {
    renderProducts = (products) => {
        return products.map((item, index) => {
            return (
                <TouchableOpacity key={index} onPress={() => this.props.onPress(item)}>
                    <View style={styles.goods}>
                        <Image source={item.imageUrl} style={styles.photo} />
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>{item.price + ' $'}</Text>
                    </View>
                </TouchableOpacity>
            )
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderProducts(this.props.products)}
            </View>
        );
    }
}

export default Products;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    goods: {
        borderColor: 'black',
        borderWidth: 2,
        width: 190,
        height: 250,
        alignContent: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    text: {
        textAlign: "center",
        paddingTop: 9
    },
    photo: {
        width: '100%',
        height: '70%',
    }
});