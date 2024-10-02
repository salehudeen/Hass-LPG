// src/screens/GasCylinderSelectionScreen.js
import React,{useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../../components/Navbar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const products = [
  { id: '1', name: '6kg Metallic', image: require('../../assets/hass-6kg-metalic.jpg') },
  { id: '2', name: '13kg Composite', image: require('../../assets/hass-composit-13Kg.png') },
  { id: '3', name: '13kg Metallic', image: require('../../assets/hass-13kg-Metalic.jpg') },
  { id: '4', name: '50kg', image: require('../../assets/hass-13kg-Metalic.jpg') },
];


const { width } = Dimensions.get('window');

const GasCylinderSelectionScreen = () => {
  const navigation = useNavigation();
  
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');

  const handleSelectProduct = (product) => {
    const orderdetails = {
        deliveryMethod,
    }
    
    console.log('order details are: ',orderdetails)
    navigation.navigate('Confirm Your Order', { orderdetails,product });
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
      <View style={styles.deliveryPickupContainer}>
        <Text style={styles.deliveryPickupTitle}>Delivery or pickup?</Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity 
            style={[styles.option, deliveryMethod === 'delivery' && styles.selectedOption]}
            onPress={() => setDeliveryMethod('delivery')}
          >
            <MaterialCommunityIcons name="truck-delivery-outline" size={24} color={deliveryMethod === 'delivery' ? '#06045E' : '#000'} />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Delivery</Text>
              <Text style={styles.optionSubtitle}>Get gas to your doorstep</Text>
            </View>
            
            <View style={[styles.radio, deliveryMethod === 'delivery' && styles.radioSelected]} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.option, deliveryMethod === 'pickup' && styles.selectedOption]}
            onPress={() => setDeliveryMethod('pickup')}
          >
            <MaterialCommunityIcons name="walk" size={24} color={deliveryMethod === 'pickup' ? '#06045E' : '#000'} />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Pickup</Text>
              <Text style={styles.optionSubtitle}>Get gas at Hass</Text>
            </View>
           
            <View style={[styles.radio, deliveryMethod === 'pickup' && styles.radioSelected]} />
          </TouchableOpacity>
        </View>
      </View>

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
    padding: 15,
   
    backgroundColor: 'white',

  },
  deliveryPickupContainer: {
    marginBottom: 20,
  },
  deliveryPickupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionsContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: 8,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  selectedOption: {
    backgroundColor: '#fff',
  },
  optionTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  priceContainer: {
    marginRight: 12,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  strikethrough: {
    textDecorationLine: 'line-through',
    color: '#666',
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#06045E',
  },
  radioSelected: {
    backgroundColor: '#06045E',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  list: {
    
    paddingBottom: 55,
  },
  row: {
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: (width - 40) / 2,
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
