import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


// screens
import Homepage from './src/screens/homepage/Homepage';
import LoginForm from './src/screens/Auth/LoginPage';
import SignupForm from './src/screens/Auth/SignupPage';
import ForgotPassword from './src/screens/Auth/ForgotPassword';

// other imports
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';





const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen  name="Login" component={LoginForm}/>
      <Stack.Screen name="Signup" component={SignupForm} />
      <Stack.Screen name ="Home" component={Homepage}/>
      <Stack.Screen name ="ForgotPassword" component={ForgotPassword}/>
    </Stack.Navigator>
  </NavigationContainer> 
  );
}


