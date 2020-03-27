import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux'
import fire from '../config/Fire';


export default class Home extends React.Component {
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
    },
});

