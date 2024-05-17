import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import '../../lottie/Animation - 1715853586227.json'
const Carousel = () => {
  return (
    <View >

      <ScrollView style={styles.container}>

       <View style={styles.section}>
        <Image
         source={require('../../assets/Hass-Logo.png')}
         style={styles.image}
        />
        <Text/>
      </View>      

      </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'column',
    backgroundColor: '#06053E',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    height:'400px',
  },
  section: {
    backgroundColor:'navyblue',
    width:'100px',
    height:'400px',
  },
  image:{
    width:'40px',
    height:'40px'
  }
  
});

export default Carousel;
