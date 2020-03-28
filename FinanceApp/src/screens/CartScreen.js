import React from 'react';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';

export default class Cart extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>KREPSELIS</Text>
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

