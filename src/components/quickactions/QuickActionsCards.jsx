import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const QuickActionsCards = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require('../../assets/icon.png')} style={styles.image} />
        <Text style={styles.text}>Find Stations</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Go</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#06053E',
    borderRadius: 10,
    padding: 10,
    width: 150,
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
  },
  button: {
    backgroundColor: 'gold',
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#06053E',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default QuickActionsCards;
