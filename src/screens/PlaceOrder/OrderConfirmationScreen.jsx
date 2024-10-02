// src/screens/OrderConfirmationScreen.js
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { generateClient } from '@aws-amplify/api';
import * as mutations from '../../graphql/mutations'


const OrderConfirmationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { product } = route.params;
  const OrderNumber = Math.random().toString(36).substr(2, 9).toUpperCase()

  useEffect(() => {
    const handleOrderConfirmation = async (product, location,OrderNumber) => {
      
      

      const order = {
        id: OrderNumber,
        userId: 'b2d5a4f4-50d1-70fd-9857-a8e735d1517a', // Hardcoded for now;
        product:product.name,
        status: 'pending',
        DeliveryLocationDL: {
          houseNo: 'no',
          latitude: 1.2943434,  // Hardcoded for now;
          longitude: 35.4748383, // Hardcoded for now;
     
        },
      };
  
      const client = generateClient();
      try {
        await client.graphql({
          query: mutations.createOrdersPlaced,
          variables: { input: order },
        });
      } catch (error) {
        console.log(error);
      }
    };
  
    // Ensure product and location are not null before making the call
    if (product) {
      console.log("Order number:",OrderNumber)
      handleOrderConfirmation(product,OrderNumber);
     
    } else {
      console.error("Product or location is missing.");
    }
  }, [product]); 
  
  
  const handleTrackDelivery = () => {
    navigation.navigate('DeliveryTrackingScreen', { orderNumber: Math.random().toString(36).substr(2, 9).toUpperCase() });
  };

  const handleContinueShopping = () => {
    navigation.navigate('Gas Selection');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={handleContinueShopping}>
        <Text style={styles.closeButtonText}>×</Text>
      </TouchableOpacity>
      <Image source={product.image} style={styles.productImage} resizeMode="contain" />
      <Text style={styles.title}>Order successfully placed</Text>
      <Text style={styles.orderNumber}>Your order #{OrderNumber} has been successfully processed and will soon be delivered to you.</Text>
      <TouchableOpacity style={styles.trackButton} onPress={handleTrackDelivery}>
        <Text style={styles.trackButtonText}>Track Delivery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.continueButton} onPress={handleContinueShopping}>
        <Text style={styles.continueButtonText}>Continue Shopping</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 24,
    color: '#000',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  orderNumber: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  trackButton: {
    backgroundColor: '#60A917',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  trackButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#ddd',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default OrderConfirmationScreen;
