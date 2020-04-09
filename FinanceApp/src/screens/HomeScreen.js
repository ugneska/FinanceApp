import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import { Actions } from 'react-native-router-flux'

import gpuPhoto from '../../assets/gpu.jpg'
import ramPhoto from '../../assets/ram.jpg'
import casesPhoto from '../../assets/cases.jpg'
import coolersPhoto from '../../assets/coolers.jpg'
import cpuPhoto from '../../assets/cpu.jpg'
import hddPhoto from '../../assets/hdd.jpg'
import motherboardPhoto from '../../assets/motherboard.jpg'
import psuPhoto from '../../assets/psu.jpg'

export default class HomeScreen extends React.Component {

    cases() {
        Actions.Cases()
    }

    coolers() {
        Actions.Coolers()
    }

    gpu() {
        Actions.Gpu()
    }

    hard_drives() {
        Actions.Hard_drives()
    }

    motherboards() {
        Actions.Motherboards()
    }

    power_supplies() {
        Actions.Power_supplies()
    }

    processors() {
        Actions.Processors()
    }

    ram() {
        Actions.Ram()
    }

    infiniteScroll(){
        Actions.Scroll()
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <Icon style={styles.searchIcon} name="ios-search" size={30} color="#000" />
                    <TextInput placeholder="Search" placeholderTextColor="black" style={styles.input} />
                </View>
                <ScrollView style={styles.scroll}>
                    <View style={styles.categoriesContainer}>
                        <TouchableOpacity onPress={this.motherboards}>
                            <View style={styles.categories}>
                                <Image source={motherboardPhoto} style={styles.photo} />
                                <Text style={styles.text}> Motherboards</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.processors}>
                            <View style={styles.categories}>
                                <Image source={cpuPhoto} style={styles.photo} />
                                <Text style={styles.text}> Processors</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.coolers}>
                            <View style={styles.categories}>
                                <Image source={coolersPhoto} style={styles.photo} />
                                <Text style={styles.text}> Coolers</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.cases}>
                            <View style={styles.categories}>
                                <Image source={casesPhoto} style={styles.photo} />
                                <Text style={styles.text}> Cases</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.power_supplies}>
                            <View style={styles.categories}>
                                <Image source={psuPhoto} style={styles.photo} />
                                <Text style={styles.text}> Power supplies</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.gpu}>
                            <View style={styles.categories}>
                                <Image source={gpuPhoto} style={styles.photo} />
                                <Text style={styles.text}> Graphics card</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.ram}>
                            <View style={styles.categories}>
                                <Image source={ramPhoto} style={styles.photo} />
                                <Text style={styles.text}> Ram</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.hard_drives}>
                            <View style={styles.categories}>
                                <Image source={hddPhoto} style={styles.photo} />
                                <Text style={styles.text}> Hard drives</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.infiniteScroll}>
                            <View style={styles.categories}>
                                <Image source={hddPhoto} style={styles.photo} />
                                <Text style={styles.text}> InfiniteScroll</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent: 'center',
    },
    searchContainer: {
        height: 45,
        width: 350,
        backgroundColor: '#d3d3d3',
        marginHorizontal: 25,
        marginTop: 20,
        borderRadius: 35
    },
    input: {
        textAlign: 'center',
        marginTop: -40,
        color: 'black'
    },
    searchIcon: {
        padding: 9
    },
    scroll: {
        marginTop: 30,
        marginHorizontal: 15,
        marginBottom: 10
    },
    categoriesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    categories: {
        borderColor: 'black',
        borderWidth: 2,
        width: 190,
        height: 225,
        alignContent: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    text: {
        textAlign: "center",
        paddingTop: 9
    },
    photo: {
        width: '100%',
        height: '85%',
    }
});

