import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const LoginForm = ({navigation}) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.blob1}></View>
      <View style={styles.blob2}></View>

      
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome Back</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#777" />
        <MaterialIcons name="email" size={24} color="#06045E" style={styles.icon} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#777" secureTextEntry />
        <MaterialIcons name="lock" size={24} color="#06045E" style={styles.icon} />
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity>
          <Text style={styles.rememberMe}>Remember Me</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPassword} onPress={() => navigation.navigate('ForgotPassword')} >Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}  >
        <Text style={styles.loginButtonText} >Login</Text>
      </TouchableOpacity>
      
      <View style={styles.footer}>
        <Text style={styles.noAccountText}>Don't have an account ?</Text>
        <TouchableOpacity>
          <Text style={styles.signUpText} onPress={() => navigation.navigate('Signup')} >Sign Up</Text>
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
  orText: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#06045E',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#06045E',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  googleLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    color: '#06045E',
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
