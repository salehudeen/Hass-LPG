import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Navbar from '../../components/Navbar';

const TopTab = createMaterialTopTabNavigator();
const { width } = Dimensions.get('window');

const ActiveOrdersScreen = () => (
  <View style={styles.emptyContainer}>
    {/* <Image source={require('../../lottie/rider.json')} style={styles.emptyImage} /> */}
    <Text style={styles.emptyText}>No items to display!</Text>
  </View>
);

const HistoryScreen = () => (
  <View style={styles.emptyContainer}>
    {/* <Image source={require('../../lottie/rider.json')} style={styles.emptyImage} /> */}
    <Text style={styles.emptyText}>No items to display!</Text>
  </View>
);

const MyOrdersScreen = () => (
  <View style={styles.container}>
    
    <TopTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarIndicatorStyle: { backgroundColor: '#06045E' },
        tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
      }}
    >
      <TopTab.Screen name="Active Orders" component={ActiveOrdersScreen} />
      <TopTab.Screen name="History" component={HistoryScreen} />
    </TopTab.Navigator>
    <Navbar/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyImage: {
    width: width * 0.5,
    height: width * 0.5,
    resizeMode: 'contain',
  },
  emptyText: {
    marginTop: 20,
    fontSize: 18,
    color: '#06045E',
    fontWeight: 'bold',
  },
  
});


export default MyOrdersScreen