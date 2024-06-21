import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, Dimensions } from 'react-native';
import Navbar from '../../components/Navbar';

const { width, height } = Dimensions.get('window');

const CardDetailsScreen = () => {
  const transactions = [
    { id: '1', name: 'Hass Eastleigh', amount: 'Ksh 2,500', time: '2:30 pm' },
    { id: '2', name: 'Hass Karen', amount: 'Ksh 10,000', time: '4:20 pm' },
    { id: '3', name: 'Hass Kasarani', amount: 'Ksh 5,500', time: '10:00 pm' },
    { id: '4', name: 'Hass Eastleigh', amount: 'Ksh 3,000', time: '11:00 am' },
    { id: '5', name: 'Hass Karen', amount: 'Ksh 8,000', time: '1:20 pm' },
    { id: '6', name: 'Hass Kasarani', amount: 'Ksh 7,500', time: '6:30 pm' },
    { id: '7', name: 'Hass Eastleigh', amount: 'Ksh 2,200', time: '9:00 pm' },
    { id: '8', name: 'Hass Karen', amount: 'Ksh 10,200', time: '7:45 pm' },
    { id: '9', name: 'Hass Kasarani', amount: 'Ksh 6,000', time: '3:15 pm' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
        <Image source={require('../../assets/backcard.png')} style={styles.cardImage} />
        <Text style={styles.cardName}>Silahudeen Salah</Text>
        <Text style={styles.cardDetails}>Purchased 12/07/2022</Text>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Your Total Balance</Text>
        <Text style={styles.balanceAmount}>236,690 Ksh</Text>
      </View>
      <View style={styles.transactionsContainer}>
        <Text style={styles.transactionsTitle}>Your Transactions</Text>
        <FlatList
          data={transactions}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <Text style={styles.transactionName}>{item.name}</Text>
              <Text style={styles.transactionAmount}>{item.amount}</Text>
              <Text style={styles.transactionTime}>{item.time}</Text>
            </View>
          )}
          contentContainerStyle={styles.transactionsList}
        />
      </View>
      <Navbar/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 5,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  cardImage: {
    width: 500,
    height: 280,
    resizeMode: 'cover',
    borderRadius: 15,
    marginBottom: 10,
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 14,
    color: '#555',
  },
  balanceContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  balanceText: {
    fontSize: 16,
    color: '#777',
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  transactionsContainer: {
    flex: 1,
    marginBottom:height * 0.09,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 8,
    elevation: 5,

  },
  transactionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  transactionsList: {
    paddingBottom: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  transactionName: {
    fontSize: 16,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionTime: {
    fontSize: 14,
    color: '#777',
  },
});

export default CardDetailsScreen;