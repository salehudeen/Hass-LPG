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
import HassFuelCardApplication from './src/screens/FuelCard/HassFuelCardApplication';
// other imports
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import LocationInputScreen from './src/screens/PlaceOrder/LocationInputScreen';
import GasCylinderSelectionScreen from './src/screens/PlaceOrder/GasCylinderSelectionScreen';
import OrderConfirmationScreen from './src/screens/PlaceOrder/OrderConfirmationScreen';
import DeliveryTrackingScreen from './src/screens/PlaceOrder/DeliveryTrackingScreen';
import FuelCardLanding from './src/screens/FuelCard/FuelCardLanding';
import CardDetailsScreen from './src/screens/FuelCard/CardDetailsScreen';




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
     
      {/* placing orders screens */}
      <Stack.Screen name="delivery location" component={LocationInputScreen} />
      <Stack.Screen name="Gas Selection" component={GasCylinderSelectionScreen} />
      <Stack.Screen name="Successful order" component={OrderConfirmationScreen} />
      <Stack.Screen name="DeliveryTrackingScreen" component={DeliveryTrackingScreen} />
      {/* Fuel card Screens */}
      <Stack.Screen name="fuelcard" component={HassFuelCardApplication} />
      <Stack.Screen name="Fuel Card Landing" component={FuelCardLanding} />
      <Stack.Screen name="Card details" component={CardDetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer> 

   )}
  </>
  );
}


registerRootComponent(App);