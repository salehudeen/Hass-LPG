import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


// screens
import Homepage from './src/screens/homepage/Homepage';
import LoginForm from './src/screens/Auth/LoginPage';
import SignupForm from './src/screens/Auth/SignupPage';
import ForgotPassword from './src/screens/Auth/ForgotPassword';
import MyOrdersScreen from './src/screens/Orders/Myorders';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import StationFinder from './src/screens/StationFinder/StationFinder';
import LPGProductsScreen from './src/screens/LPGProducts/LPGProductsScreen';
import HassFuelCardApplication from './src/screens/FuelCard/HassFuelCardApplication';
// other imports
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';






const Stack = createNativeStackNavigator();
export default function App() {
  const [isShowSplash,setIsShowSplash] = useState(true);

  useEffect(() =>{
    setTimeout(() => {
      setIsShowSplash(false)
    }, 3000)
  })
  return (
    <>
    {isShowSplash ? (
      <SplashScreen/>
    ) : ( 
    <NavigationContainer>
    <Stack.Navigator>
      {/* auth screens  */}
      <Stack.Screen name="Login" component={LoginForm}/>
      <Stack.Screen name="Signup" component={SignupForm} />
      <Stack.Screen name ="ForgotPassword" component={ForgotPassword}/>
      {/* other screens */}
      <Stack.Screen name ="Home" component={Homepage}/>
      <Stack.Screen name ="MyOrders" component={MyOrdersScreen}/>
      <Stack.Screen name ="stationfinder" component={StationFinder}/>
      <Stack.Screen name="LPGProducts" component={LPGProductsScreen} />
      <Stack.Screen name="fuelcard" component={HassFuelCardApplication} />
    </Stack.Navigator>
  </NavigationContainer> 

   )}
  </>
  );
}


registerRootComponent(App);