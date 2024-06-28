import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Auth } from 'aws-amplify';

export default function ConfirmSignUp({ route, navigation }) {
    const [code, setCode] = useState('');
    const { email } = route.params;

    async function handleConfirmSignUp() {
        try {
            await Auth.confirmSignUp(email, code);
            Alert.alert("Success", "Confirmation successful! You can now log in.");
            navigation.navigate('Login');
        } catch (error) {
            console.log('Error confirming sign up:', error);
            Alert.alert("Error", error.message || "An error occurred during confirmation.");
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
