import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState("");

    const handleSend = () => {
        // Handle the send action
        console.log("Email sent to:", email);
    };

    return (
        <View style={styles.container}>
            <View style={styles.blob1}></View>
            <View style={styles.blob2}></View>
            <Text style={styles.title}>Forgot Password</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#777"
                    value={email}
                    onChangeText={setEmail}
                    autoCorrect={false}
                    autoCapitalize="none"
                />
                <MaterialIcons name="email" size={24} color="#06045E" style={styles.icon} />
            </View>
            <Pressable style={styles.sendButton} onPress={handleSend}>
                <Text style={styles.sendButtonText}>Send</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    blob1: {
        position: 'absolute',
        width: width * 0.8,
        height: height * 0.3,
        backgroundColor: 'gold',
        borderBottomRightRadius: width * 0.4,
        borderBottomLeftRadius: width * 0.4,
        top: -height * 0.1,
        left: -width * 0.1,
      },
      blob2: {
        position: 'absolute',
        width: width * 0.8,
        height: height * 0.4,
        backgroundColor: '#06045E',
        borderTopLeftRadius: width * 0.4,
        borderTopRightRadius: width * 0.4,
        bottom: -height * 0.2,
        right: -width * 0.1,
      },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#06045E',
        marginBottom: 40,
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        color: '#06045E',
    },
    icon: {
        marginLeft: 10,
    },
    sendButton: {
        backgroundColor: '#06045E',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default ForgotPassword;
