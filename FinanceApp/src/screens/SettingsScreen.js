
import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    TextInput,
    Button,
    Alert
} from 'react-native';

import fire from '../config/Fire';

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.state = {
            currentPassword: "",
            newPassword: "",
        };
    }

    logout() {
        fire.auth().signOut();
    }

    // onChangePasswordPress = () => {

    //     this.reauthenticate(this.state.currentPassword).then(() => {
    //         var user = fire.auth().currentUser;
    //         user.updatePassword(this.state.newPassword).then(() => {
    //             Alert.alert("Password was changed")
    //         }).catch((error) => {
    //             Alert.alert(error.message)
    //         })

    //     }).catch((error) => {
    //         Alert.alert(error.message)
    //     })
    // }

    // reauthenticate = (currentPassword) => {
    //     var user = fire.auth().currentUser;
    //     var cred = fire.auth.EmailAuthProvider.credential(user.email, currentPassword);
    //     return user.reauthenticateWithCredential(cred)
    // }

    render() {
        return (
            <View style={styles.container}>
                {/* <TextInput style={{ width: 200, height: 40, borderWidth: 1 }}
                    value={this.state.currentPassword}
                    onChangeText={(text) => { this.setState({ currentPassword: text }) }}
                    placeholder="Current password"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <TextInput style={{ width: 200, height: 40, borderWidth: 1 }}
                    value={this.state.newPassword}
                    onChangeText={(text) => { this.setState({ newPassword: text }) }}
                    placeholder="New password"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <Button title="Reset Password" onPress={this.onChangePasswordPress} /> */}

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
        alignContent: 'center'
    },
    buttonContainer: {
        backgroundColor: '#d3d3d3',
        height: 45,
        width: 350,
        borderRadius: 35,
        marginHorizontal: 25,
        marginBottom: 10,
        bottom: 0
    },
    buttonText: {
        textAlign: 'center',
        marginTop: 10,
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    }
});

