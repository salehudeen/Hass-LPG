
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';

const LPGProductsScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const products = [
    { id: '1', name: '6kg Metallic', image: require('../../assets/hass-6kg-metalic.jpg') },
    { id: '2', name: '13kg Composite', image: require('../../assets/hass-composit-13Kg.png') },
    { id: '3', name: '13kg Metallic', image: require('../../assets/hass-13kg-Metalic.jpg') },
    { id: '4', name: '50kg', image: require('../../assets/hass-13kg-Metalic.jpg') },
  ];

  const nearestStation = {
    name: 'Nearby Station',
    address: '123 Petroleum Street, Cityname',
  };

  const renderItem = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
    </View>
  );

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = `Location: (${location.coords.latitude}, ${location.coords.longitude})`;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.locationText}>{text}</Text>
        <Text style={styles.nearestStationText}>Nearest Station: {nearestStation.name}</Text>
        <Text style={styles.nearestStationAddress}>{nearestStation.address}</Text>
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productsContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    marginBottom: 20,
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  nearestStationText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  nearestStationAddress: {
    fontSize: 14,
    color: '#666',
  },
  productsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  productCard: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LPGProductsScreen;
