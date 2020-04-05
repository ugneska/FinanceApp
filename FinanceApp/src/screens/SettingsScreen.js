
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


    changePassword = (currentPassword, newPassword) => {
        this.reauthenticate(currentPassword).then(() => {
            var user = fire.auth().currentUser;
            user.updatePassword(newPassword).then(() => {
                console.log("Password updated!");
            }).catch((error) => { console.log(error); });
        }).catch((error) => { console.log(error); });
    }
    changeEmail = (currentPassword, newEmail) => {
        this.reauthenticate(currentPassword).then(() => {
            var user = fire.auth().currentUser;
            user.updateEmail(newEmail).then(() => {
                console.log("Email updated!");
            }).catch((error) => { console.log(error); });
        }).catch((error) => { console.log(error); });
    }

    reauthenticate = (currentPassword) => {
        var user = fire.auth().currentUser;
        var cred = fire.auth.EmailAuthProvider.credential(
            user.email, currentPassword);
        return user.reauthenticateWithCredential(cred);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={{ width: 200, height: 40, borderWidth: 1 }}
                    value={this.state.currentPassword}
                    onChangeText={(currentPassword) => { this.setState({ currentPassword }) }}
                    placeholder="Current password"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <TextInput style={{ width: 200, height: 40, borderWidth: 1 }}
                    value={this.state.newPassword}
                    onChangeText={(newPassword) => { this.setState({ newPassword }) }}
                    placeholder="New password"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <Button title="Reset Password" onPress={this.changePassword} />

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

