import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const TopTab = createMaterialTopTabNavigator();
const { width } = Dimensions.get('window');

const ActiveOrdersScreen = () => (
  <View style={styles.emptyContainer}>
    <Image source={require('../../lottie/rider.json')} style={styles.emptyImage} />
    <Text style={styles.emptyText}>No items to display!</Text>
  </View>
);

const HistoryScreen = () => (
  <View style={styles.emptyContainer}>
    <Image source={require('../../lottie/rider.json')} style={styles.emptyImage} />
    <Text style={styles.emptyText}>No items to display!</Text>
  </View>
);

const MyOrdersScreen = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>My Orders</Text>
    </View>
    <TopTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarIndicatorStyle: { backgroundColor: '#00a859' },
        tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
      }}
    >
      <TopTab.Screen name="Active Orders" component={ActiveOrdersScreen} />
      <TopTab.Screen name="History" component={HistoryScreen} />
    </TopTab.Navigator>
    <View style={styles.bottomNav}>
      <MaterialIcons name="home" size={30} color="gray" />
      <MaterialIcons name="receipt" size={30} color="#00a859" />
      <MaterialIcons name="verified" size={30} color="gray" />
      <MaterialIcons name="credit-card" size={30} color="gray" />
    </View>
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
    color: '#00a859',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
});


export default MyOrdersScreen