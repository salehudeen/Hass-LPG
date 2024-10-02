import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ConfirmOrderDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { orderdetails, product } = route.params;
  const [deliveryLocation, setDeliveryLocation] = useState(null);
  const [pickupLocation, setPickupLocation] = useState("Hass Gas Station, Nairobi");

  useEffect(() => {
    // Set initial region for the map (you might want to use the user's current location)
    setDeliveryLocation({
      latitude: -1.2921,
      longitude: 36.8219,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  }, []);

  const handleLocationSelect = (event) => {
    setDeliveryLocation({
      ...deliveryLocation,
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });
  };

  const handleConfirmOrder = () => {
    // Here you would typically send the order to your backend
    navigation.navigate('OrderConfirmed', { 
      orderdetails, 
      product, 
      deliveryLocation: orderdetails.deliveryMethod === 'delivery' ? deliveryLocation : null,
      pickupLocation: orderdetails.deliveryMethod === 'pickup' ? pickupLocation : null,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Confirm Your Order</Text>
      
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.orderType}>
          {orderdetails.deliveryMethod === 'delivery' ? 'Delivery Order' : 'Pickup Order'}
        </Text>
      </View>

      {orderdetails.deliveryMethod === 'delivery' ? (
        <View style={styles.mapContainer}>
          <Text style={styles.sectionTitle}>Select Delivery Location:</Text>
          <MapView
            style={styles.map}
            region={deliveryLocation}
            onPress={handleLocationSelect}
          >
            {deliveryLocation && (
              <Marker coordinate={deliveryLocation} />
            )}
          </MapView>
        </View>
      ) : (
        <View style={styles.pickupInfo}>
          <Text style={styles.sectionTitle}>Pickup Information:</Text>
          <Text style={styles.pickupLocation}>{pickupLocation}</Text>
          <TouchableOpacity 
            style={styles.changeLocationButton}
            onPress={() => navigation.navigate('SelectLocation', { setPickupLocation })}
          >
            <Text style={styles.changeLocationButtonText}>Change Pickup Location</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.orderSummary}>
        <Text style={styles.sectionTitle}>Order Summary:</Text>
        <Text style={styles.summaryItem}>{product.name}</Text>
        <Text style={styles.summaryItem}>Type: {orderdetails.deliveryMethod}</Text>
        {/* Add price information here when available */}
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmOrder}>
        <Text style={styles.confirmButtonText}>Confirm Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productInfo: {
    marginBottom: 20,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderType: {
    fontSize: 16,
    color: '#666',
  },
  mapContainer: {
    marginBottom: 20,
  },
  map: {
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  },
  pickupInfo: {
    marginBottom: 20,
  },
  pickupLocation: {
    fontSize: 16,
    marginTop: 10,
  },
  changeLocationButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  changeLocationButtonText: {
    color: '#06045E',
    textAlign: 'center',
  },
  orderSummary: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summaryItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  confirmButton: {
    backgroundColor: '#06045E',
    padding: 15,
    borderRadius: 10,
  },
  confirmButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ConfirmOrderDetails;