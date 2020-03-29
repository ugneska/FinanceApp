import React, { Component } from 'react'

import { Router, Stack, Scene, Actions } from 'react-native-router-flux'

import Login from './components/Login'
import Register from './components/Register'
import MainScreen from './screens/MainScreen'
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'


import Cases from './categories/Cases'
import Coolers from './categories/Coolers'
import Gpu from './categories/Gpu'
import Hard_drives from './categories/Hard_drives'
import Motherboards from './categories/Motherboards'
import Power_supplies from './categories/Power_supplies'
import Processors from './categories/Processors'
import Ram from './categories/Ram'


import { Provider } from 'react-redux'
import store from './store'


export default class Routes extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Stack key="root">
                        {/* <Scene key="login" component={Login} title="login" initial={true} hideNavBar={true} /> */}
                        {/* <Scene key="register" component={Register} title="register" hideNavBar={true} /> */}
                        <Scene key="MainScreen" component={MainScreen} title="PC PARTS" type='replace' titleStyle={{ flex: 1, textAlign: 'center', }} />
                        <Scene key="HomeScreen" component={HomeScreen} />
                        <Scene key="CartScreen" component={CartScreen} title="Cart" />

                        <Scene key="Cases" component={Cases} title="Cases" titleStyle={{ flex: 1, textAlign: 'center', }} />
                        <Scene key="Coolers" component={Coolers} title="Coolers" titleStyle={{ flex: 1, textAlign: 'center', }} />
                        <Scene key="Gpu" component={Gpu} title="Grapchics Card" titleStyle={{ flex: 1, textAlign: 'center', }} />
                        <Scene key="Hard_drives" component={Hard_drives} title="Hard drives" titleStyle={{ flex: 1, textAlign: 'center', }} />
                        <Scene key="Motherboards" component={Motherboards} title="Motherboards" titleStyle={{ flex: 1, textAlign: 'center', }} />
                        <Scene key="Power_supplies" component={Power_supplies} title="Power supplies" titleStyle={{ flex: 1, textAlign: 'center', }} />
                        <Scene key="Processors" component={Processors} title="Processors" titleStyle={{ flex: 1, textAlign: 'center', }} />
                        <Scene key="Ram" component={Ram} title="Ram" titleStyle={{ flex: 1, textAlign: 'center', }} />
                    </Stack>
                </Router>
            </Provider>
        )
    }
}