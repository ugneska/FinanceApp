import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';


export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>HomeScreen</Text>
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

