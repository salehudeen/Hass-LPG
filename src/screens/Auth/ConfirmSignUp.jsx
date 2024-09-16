import React, { useState, useEffect } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { confirmSignUp, getCurrentUser, signIn } from '@aws-amplify/auth';
import { generateClient } from '@aws-amplify/api';
import * as mutations from '../../graphql/mutations';

export default function ConfirmSignUp({ route, navigation }) {
    const [code, setCode] = useState('');
    const { email, username, phoneNumber,user,password } = route.params;

    async function handleConfirmSignUp() {
        if (!user || !code) {
            Alert.alert("Error", "Please enter the confirmation code.");
            return;
        }
        try {
            // Confirm sign up
            await confirmSignUp({ username, confirmationCode: code });
            await signIn({
                username: username,                 
                password,                                              
                options: {
                  authFlowType: "USER_PASSWORD_AUTH"
                }
              });
            // Generate a new client
            const client = generateClient();
    
            // Prepare user data
            const userData = {
                input: {
                    uniqueCustomerId: user,
                    name: email,
                    deliveryLocations: [],
                    phoneNumber: phoneNumber,
                    email: username
                }
            };
    
            // Create customer account
            const newUser = await client.graphql({
                query: mutations.createCustomerAccount,
                variables: userData
              
            });
    
            console.log('User created successfully:', newUser);
            Alert.alert("Success", "Account confirmed and created successfully!");
            navigation.navigate('Login');
        } catch (error) {
            console.error('Error in sign up process:', error);
            if (error.name === 'CodeMismatchException') {
                Alert.alert("Error", "Invalid verification code provided, please try again.");
            } else if (error.name === 'ExpiredCodeException') {
                Alert.alert("Error", "Verification code has expired, please request a new one.");
            } else {
                Alert.alert("Error", error.message || "An error occurred during the sign up process.");
            }
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Confirm Sign Up</Text>
            <TextInput 
                style={styles.input} 
                placeholder='Confirmation Code' 
                value={code} 
                onChangeText={setCode} 
                autoCorrect={false} 
                autoCapitalize='none' 
                placeholderTextColor="#777"
            />
            <Button title="Confirm Sign Up" onPress={handleConfirmSignUp} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 50,
        paddingHorizontal: 20,
        borderColor: "#06045E",
        borderWidth: 1,
        borderRadius: 7,
        color: '#06045E',
        marginBottom: 20,
        width: '100%',
    },
});