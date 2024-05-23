import React, { useState } from 'react';
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';

const logo = require("../../assets/Hass-Logo.png");

const { width, height } = Dimensions.get('window');

export default function SignupForm({navigation}) {
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    async function handleSignUp() {
        try {
            const { isSignUpComplete, userId, nextStep } = await signUp({
                email,
                password,
                options: {
                    userAttributes: {
                        phone_number: phoneNumber
                    },
                    autoSignIn: true
                }
            });

            console.log(userId);
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.blob1}></View>
            <View style={styles.blob2}></View>
            <Image source={logo} style={styles.image} resizeMode='contain' />
            <Text style={styles.title}>Sign Up</Text>
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.input} 
                    placeholder='Email' 
                    value={email} 
                    onChangeText={setEmail} 
                    autoCorrect={false} 
                    autoCapitalize='none' 
                    placeholderTextColor="#777"
                />
                <TextInput 
                    style={styles.input} 
                    placeholder='Password' 
                    secureTextEntry 
                    value={password} 
                    onChangeText={setPassword} 
                    autoCorrect={false} 
                    autoCapitalize='none' 
                    placeholderTextColor="#777"
                />
                <TextInput 
                    style={styles.input} 
                    placeholder='Phone Number' 
                    value={phoneNumber} 
                    onChangeText={setPhoneNumber} 
                    autoCorrect={false} 
                    autoCapitalize='none' 
                    placeholderTextColor="#777"
                />
            </View>
            <View style={styles.buttonView}>
                <Pressable style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>
            </View>
            <Text style={styles.footerText}>Already have an account? 
                <Text style={styles.signup} onPress={() => navigation.navigate('Login')}> Login</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    blob1: {
        position: 'absolute',
        width: width * 0.8,
        height: height * 0.3,
        backgroundColor: '#06045E',
        borderBottomRightRadius: width * 0.4,
        borderBottomLeftRadius: width * 0.4,
        top: -height * 0.1,
        left: -width * 0.5,
      },
      blob2: {
        position: 'absolute',
        width: width * 0.8,
        height: height * 0.4,
        backgroundColor: 'gold',
        borderTopLeftRadius: width * 0.4,
        borderTopRightRadius: width * 0.4,
        bottom: -height * 0.2,
        right: -width * 0.1,
      },
    image: {
        height: 160,
        width: 170,
        marginBottom: 40,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        color: "#06045E",
        marginBottom: 40,
    },
    inputView: {
        gap: 15,
        width: "100%",
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    input: {
        height: 50,
        paddingHorizontal: 20,
        borderColor: "#06045E",
        borderWidth: 1,
        borderRadius: 7,
        color: '#06045E',
    },
    buttonView: {
        width: "100%",
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#06045E",
        height: 50,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    footerText: {
        textAlign: "center",
        color: "gray",
        marginTop: 20,
    },
    signup: {
        color: "red",
        fontSize: 13,
    }
});
