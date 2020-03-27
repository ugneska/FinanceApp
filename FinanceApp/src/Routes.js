import React, { Component } from 'react'

import { Router, Stack, Scene } from 'react-native-router-flux'

import Login from './components/Login'
import Register from './components/Register'
import MainScreen from './screens/MainScreen'

export default class Routes extends Component {
    render() {
        return (
            <Router>
                    <Stack key="root" hideNavBar={true}>
                        <Scene key="login" component={Login} title="" initial={true}/>
                        <Scene key="register" component={Register} title="" />
                        <Scene key="mainScreen" component={MainScreen} />
                    </Stack>
            </Router>

        )
    }
}