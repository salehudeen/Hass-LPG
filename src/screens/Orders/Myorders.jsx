import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Navbar from '../../components/Navbar';
import { useNavigation, useRoute } from '@react-navigation/native';
import { listOrdersPlaceds } from '../../graphql/queries'; // Import the query
import { generateClient } from '@aws-amplify/api'; // Use generateClient for API interaction

import OrderCard from './OrderCard';

const TopTab = createMaterialTopTabNavigator();
const { width } = Dimensions.get('window');

const fetchOrders = async (userId, status) => {
  try {
    const client = await generateClient();
    const filter = {
      userId: { eq: userId },
      status: { eq: status },
    };
    
    const { data } = await client.graphql({
      query: listOrdersPlaceds,
      variables: { filter },
    });
    
    return data.listOrdersPlaceds.items;
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
};

const ActiveOrdersScreen = ({ userId }) => {
  const [orders, setOrders] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const getOrders = async () => {
      const fetchedOrders = await fetchOrders(userId, 'pending');
      setOrders(fetchedOrders);
    };
    getOrders();
  }, [userId]);

  return (
    <View style={styles.ordersContainer}>
      {orders.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No items to display!</Text>
        </View>
      ) : (
        <FlatList
          style = {styles.cardholder}
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <OrderCard
              order={item}
             
            />
          )}
        />
      )}
    </View>
  );
};

const HistoryScreen = ({ userId }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const fetchedOrders = await fetchOrders(userId, 'complete');
      setOrders(fetchedOrders);
    };
    getOrders();
  }, [userId]);

  return (
    <View style={styles.ordersContainer}>
      {orders.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No items to display!</Text>
        </View>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <OrderCard order={item} />}
        />
      )}
    </View>
  );
};


const MyOrdersScreen = () => {
  const route = useRoute();
  const { userId } = route.params; // Get userId from the route

  return (
    <View style={styles.container}>
      <TopTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#000',
          tabBarIndicatorStyle: { backgroundColor: '#06045E' },
          tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
        }}
      >
        <TopTab.Screen name="Active Orders">
          {() => <ActiveOrdersScreen userId={userId} />}
        </TopTab.Screen>
        <TopTab.Screen name="History">
          {() => <HistoryScreen userId={userId} />}
        </TopTab.Screen>
      </TopTab.Navigator>
      <Navbar userId={userId} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardholder:{
    marginBottom:100,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ordersContainer: {
    flex: 1,
    padding: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    marginTop: 20,
    fontSize: 18,
    color: '#06045E',
    fontWeight: 'bold',
  },
});

export default MyOrdersScreen;
