import React, { useState, useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Navbar = ({userId}) => {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
        <View style={styles.navBar}>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home',{userId})}>
                    <MaterialIcons name="home" size={30} color="white" />
                    <Text style={styles.navButtonText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('MyOrders',{userId})}>
                    <MaterialIcons name="receipt" size={30} color="white" />
                    <Text style={styles.navButtonText}>My Orders</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Anticounterfeit')}>
                    <MaterialIcons name="verified" size={30} color="white" />
                    <Text style={styles.navButtonText}>Anticounterfeit</Text>
                </TouchableOpacity> */}

                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Fuel Card Landing',{userId})}>
                    <MaterialIcons name="credit-card" size={30} color="white" />
                    <Text style={styles.navButtonText}>My Card</Text>
                </TouchableOpacity>
            </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#06045E',
        position:'absolute',
        bottom:0,
        width:width,
        paddingBottom:10,
    },
    
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#06045E',
    },
    navButton: {
        alignItems: 'center',
    },
    navButtonText: {
        color: 'white',
        fontSize: 12,
        marginTop: 5,
    },
});

export default Navbar;