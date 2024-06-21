import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Navbar from '../../components/Navbar';
import { useNavigation } from '@react-navigation/native';

const FuelCardLanding = () => {
    const navigation = useNavigation();

    const handleSignUp = () => {
        navigation.navigate('fuelcard');
    };
    const handleSignIn = () => {
        navigation.navigate('Card details');
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/backcard.png')} style={styles.image} />
            <Text style={styles.title}>Make payments at Lightning Speed</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.signUpButton]} onPress={handleSignUp}>
                    <Text style={[styles.buttonText, styles.signUpButtonText]}>Apply for a card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.signInButton]} onPress={handleSignIn}>
                    <Text style={[styles.buttonText, styles.signInButtonText]}>Already have a card</Text>
                </TouchableOpacity>
            </View>
            <Navbar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: 500,
        height: 300,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    buttonContainer: {
        width: '80%',
        alignItems: 'center',
    },
    button: {
        width: '100%',
        paddingVertical: 15,
        borderRadius: 25,
        marginVertical: 10,
        alignItems: 'center',
    },
    signUpButton: {
        backgroundColor: '#06045E',
    },
    signUpButtonText: {
        color: '#fff',
    },
    signInButton: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000',
    },
    signInButtonText: {
        color: '#000',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default FuelCardLanding;