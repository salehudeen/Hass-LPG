// src/screens/GasCylinderSelectionScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../../components/Navbar';


const products = [
  { id: '1', name: '6kg Metallic', image: require('../../assets/hass-6kg-metalic.jpg') },
  { id: '2', name: '13kg Composite', image: require('../../assets/hass-composit-13Kg.png') },
  { id: '3', name: '13kg Metallic', image: require('../../assets/hass-13kg-Metalic.jpg') },
  { id: '4', name: '50kg', image: require('../../assets/hass-13kg-Metalic.jpg') },
];


const { width } = Dimensions.get('window');

const GasCylinderSelectionScreen = ({route}) => {
  const navigation = useNavigation();
  const location  = route.params
  const handleSelectProduct = (product) => {
    navigation.navigate('Successful order', { product,location });
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.itemImage} resizeMode="contain" />
      </View>
      <Text style={styles.itemName}>{item.name}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleSelectProduct(item)}>
          <Text style={styles.buttonText}>New</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleSelectProduct(item)}>
          <Text style={styles.buttonText}>Refill</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a product</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
      <Navbar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: (width - 48) / 2,
    backgroundColor: '#f8f8f8',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  imageContainer: {
    width: '100%',
    height: 120,
    marginBottom: 8,
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: '#06045E',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default GasCylinderSelectionScreen;
