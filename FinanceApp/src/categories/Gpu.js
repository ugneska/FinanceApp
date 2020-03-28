import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux'

export default class Gpu extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>BLALLA</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent: 'center'
    },
});

