import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Carousel from '../../components/caurosel/Carousel';
import QuickActionsCards from '../../components/quickactions/QuickActionsCards';
import LottieView from 'lottie-react-native';
import '../../lottie/Animation - 1715853586227.json'

export default function Homepage() {
 
  return (
    <View style={styles.container} >
      <Carousel/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#06045A',
  },
  
});
