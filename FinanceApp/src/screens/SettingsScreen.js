
import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';

import fire from '../config/Fire';

export default class Settings extends React.Component {
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
                    <Text style={styles.buttonText}>Logout</Text>
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
    buttonContainer:{
        backgroundColor: '#d3d3d3',
        height: 45,
        width: 350,
        borderRadius: 35,
        marginHorizontal: 25,
        marginBottom: 10,
        bottom: 0
    },
    buttonText:{
        textAlign: 'center',
        marginTop: 10,
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    }
});

