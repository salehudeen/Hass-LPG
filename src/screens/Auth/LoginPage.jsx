import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { getCurrentUser } from '@aws-amplify/auth';
import { signIn } from '@aws-amplify/auth';
const { width, height } = Dimensions.get('window');

const LoginForm = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigation();

  useEffect(() => {const checkUser = async () => {
    try {
     const user =  await getCurrentUser();
      console.log(user)
      navigate.navigate('Home');
    } catch (err) {
      console.log(err)
    }
  };

  checkUser();
}, [navigation]);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }
    try {
      console.log('Attempting sign in with:', email);
      await signIn({
        username: email,
        password,
        options: {
          authFlowType: "USER_PASSWORD_AUTH"
        }
      });
      

        Alert.alert('Success', 'Logged in successfully');
        navigation.navigate('Home');
      
    } catch (error) {
      console.log('Error signing in:', error);
      console.log('Error name:', error.name);
      console.log('Error message:', error.message);
      console.log('Error code:', error.code);
      Alert.alert('Error', `Sign in failed: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <View style={styles.blob1}></View>
      <View style={styles.blob2}></View>
      
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome Back</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Email" 
          placeholderTextColor="#777" 
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <MaterialIcons name="email" size={24} color="#06045E" style={styles.icon} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Password" 
          placeholderTextColor="#777" 
          secureTextEntry 
          value={password}
          onChangeText={setPassword}
        />
        <MaterialIcons name="lock" size={24} color="#06045E" style={styles.icon} />
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity onPress={() => Alert.alert('Info', 'Remember Me functionality not implemented yet.')}>
          <Text style={styles.rememberMe}>Remember Me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      
      <View style={styles.footer}>
        <Text style={styles.noAccountText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: '#06045E',
    borderBottomRightRadius: width * 0.4,
    borderBottomLeftRadius: width * 0.4,
    top: -height * 0.1,
    left: -width * 0.1,
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
  header: {
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 30,
    color: '#06045E',
    fontWeight: 'bold',
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
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  rememberMe: {
    color: '#06045E',
  },
  forgotPassword: {
    color: '#06045E',
  },
  loginButton: {
    backgroundColor: '#06045E',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  noAccountText: {
    color: '#06045E',
  },
  signUpText: {
    color: 'gold',
    marginLeft: 5,
  },
});

export default LoginForm;