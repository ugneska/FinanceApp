
import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';

import fire from '../config/Fire';

export default class CartScreen extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        fire.auth().signOut();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>AccountScreen</Text>
                <TouchableOpacity style={styles.buttonContainer} onPress={this.logout}>
                    <Text style={styles.buttonText}>logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent:'center'
    },
});

