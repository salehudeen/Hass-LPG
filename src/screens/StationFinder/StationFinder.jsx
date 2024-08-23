import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import StationLocationComponent from './StationLocationComponent';
import * as Location from 'expo-location';
import Navbar from '../../components/Navbar';
import { listStations } from '../../graphql/queries';
import { generateClient } from '@aws-amplify/api';

// Function to calculate distance using Haversine formula
const haversineDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of Earth in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in kilometers
};

// Function to estimate travel time in minutes (assuming average speed of 50 km/h)
const estimateTravelTime = (distance) => {
  const speed = 50; // Average speed in km/h
  return Math.round((distance / speed) * 60); // Time in minutes
};

const StationFinder = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [stations, setStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // Generate the API client
  const client = generateClient();

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const stationData = await client.graphql({
          query: listStations,
        });
        const stationList = stationData.data.listStations.items.map((station) => {
          const stationCoords = {
            latitude: station.StationLocation.latitude,
            longitude: station.StationLocation.longitude,
          };
          const distance = userLocation ? haversineDistance(
            userLocation.latitude,
            userLocation.longitude,
            stationCoords.latitude,
            stationCoords.longitude
          ) : 0;
          const time = estimateTravelTime(distance);

          return {
            ...station,
            coords: stationCoords,
            distance: `${distance.toFixed(2)} km`,
            time: `${time} min`,
          };
        });
        setStations(stationList);
      } catch (error) {
        console.error('Error fetching stations:', error);
      }
    };

    const getLocationPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        Alert.alert('Location Permission', 'Please enable location services to use this feature.');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation(location.coords);
    };

    fetchStations();
    getLocationPermission();
  }, [userLocation]);

  const handleStationPress = (coords) => {
    setSelectedStation(coords);
  };

  return (
    <View style={styles.container}>
      <StationLocationComponent
        stations={stations}
        userLocation={userLocation}
        selectedStation={selectedStation}
        onStationPress={handleStationPress}
      />
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
