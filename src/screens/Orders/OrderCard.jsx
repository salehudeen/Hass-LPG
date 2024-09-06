import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const OrderCard = ({ order, onPress }) => (
    <>
  {/* <TouchableOpacity style={styles.orderCard} onPress={onPress}>
   
  </TouchableOpacity> */}
  
  <View style={styles.card}>
  <View style={styles.orderInfo}>
      <Text style={styles.orderProduct}>{`${order.product}`}</Text>
      <Text style={styles.orderStatus}>{order.status}</Text>
    </View>
    
    
    <View style={styles.header}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>A</Text>
      </View>
      <View style={styles.headerText}>
        <Text style={styles.name}>Antony</Text>
        <Text style={styles.deliveryDetails}>Delivery Details</Text>
      </View>
      <View style={styles.iconContainer}>
        <MaterialIcons name="phone" size={24} color="#06045E" />
        <MaterialIcons name="chat" size={24} color="#06045E" style={styles.chatIcon} />
      </View>
    </View>
    <Text style={styles.deliveryInfo}>Your gas is being delivered to your address</Text>
    <View style={styles.progressContainer}>
      <View style={styles.progressStep}>
        <View style={[styles.progressIcon, styles.activeIcon]}>
          <MaterialIcons name="check" size={16} color="#fff" />
        </View>
        <View style={styles.progressLine} />
      </View>
      <View style={styles.progressStep}>
        <View style={[styles.progressIcon, styles.activeIcon]}>
          <MaterialIcons name="gas-meter" size={16} color="#fff" />
        </View>
        <View style={styles.progressLine} />
      </View>
      <View style={styles.progressStep}>
        <View style={[styles.progressIcon, styles.activeIcon]}>
          <MaterialIcons name="directions-bike" size={16} color="#fff" />
        </View>
        <View style={styles.progressLine} />
      </View>
      <View style={styles.progressStep}>
        <View style={[styles.progressIcon, styles.inactiveIcon]}>
          <MaterialIcons name="location-on" size={16} color="#fff" />
        </View>
      </View>
    </View>

    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Order Received</Text>
    </View>
  </View>
  </>
);

const styles = StyleSheet.create({
  orderCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  orderInfo: {
    gap:20,
    flexDirection:'row',
    padding:10,
  },
  orderProduct: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  orderStatus: {
    fontSize: 14,
    color: '#666',
  },
  iconContainer: {
    marginLeft: 12,
  },
//   detials card
card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    margin: 16,
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  deliveryDetails: {
    fontSize: 14,
    color: '#666',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  chatIcon: {
    marginLeft: 12,
  },
  deliveryInfo: {
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  progressStep: {
    alignItems: 'center',
    flex: 1,
  },
  progressIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeIcon: {
    backgroundColor: '#4CAF50',
  },
  inactiveIcon: {
    backgroundColor: '#E0E0E0',
  },
  progressLine: {
    height: 2,
    backgroundColor: '#E0E0E0',
    flex: 1,
    marginTop: -16,
  },
  buttonContainer: {
    backgroundColor: '#06045E',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OrderCard;