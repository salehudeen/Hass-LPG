import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import StationLocationComponent from './StationLocationComponent';
import Navbar from '../../components/Navbar';

const StationFinder = () => {
  const [selectedStation, setSelectedStation] = useState(null);

  const stations = [
    {
      name: 'Hass Plaza',
      address: 'Lower Hill Road',
      distance: '1.6 km',
      time: '5 mins',
      image: require('../../assets/download.jpg'),
      coords: {
        latitude: -1.2988106,
        longitude: 36.8204379,
      },
    },
    {
      name: 'Hass Station Westlands',
      address: 'Westlands, Nairobi',
      distance: '3.0 km',
      time: '10 mins',
      image: require('../../assets/download.jpg'),
      coords: {
        latitude: -1.270104,
        longitude: 36.805834,
      },
    },
    {
      name: 'Hass Station Karen',
      address: 'Karen, Nairobi',
      distance: '12.0 km',
      time: '25 mins',
      image: require('../../assets/download.jpg'),
      coords: {
        latitude: -1.324974,
        longitude: 36.717201,
      },
    },
    // Add more stations as needed
  ];

  const handleStationPress = (coords) => {
    setSelectedStation(coords);
  };

  return (
    <View style={styles.container}>
      <StationLocationComponent stations={stations} selectedStation={selectedStation} onStationPress={handleStationPress} />
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default StationFinder;
