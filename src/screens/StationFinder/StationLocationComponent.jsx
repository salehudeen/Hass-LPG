import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, Platform } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, PROVIDER_DEFAULT, Polyline } from 'react-native-maps';
import { FontAwesome, Feather } from '@expo/vector-icons';
import defaultStationImage from '../../assets/station.png';

const { width, height } = Dimensions.get('window');

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

const StationLocationComponent = ({ stations, userLocation, selectedStation, onStationPress }) => {
  const [closestStation, setClosestStation] = useState(null);
  const mapRef = React.useRef(null);

  useEffect(() => {
    if (userLocation && stations.length > 0) {
      // Find the closest station
      let minDistance = Infinity;
      let closest = null;

      stations.forEach((station) => {
        if (station.coords) {
          const distance = haversineDistance(
            userLocation.latitude,
            userLocation.longitude,
            station.coords.latitude,
            station.coords.longitude
          );
          if (distance < minDistance) {
            minDistance = distance;
            closest = station;
          }
        }
      });

      setClosestStation(closest);
    }
  }, [userLocation, stations]);

  const handleStationPress = (coords) => {
    onStationPress(coords);

    if (coords && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      });
    }
  };

  const initialRegion = userLocation ? {
    latitude: userLocation.latitude,
    longitude: userLocation.longitude,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  } : stations.length > 0 ? {
    latitude: stations[0].coords.latitude,
    longitude: stations[0].coords.longitude,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  } : {
    latitude: -1.286389, // Default to Nairobi's latitude
    longitude: 36.817223, // Default to Nairobi's longitude
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  const pathCoordinates = userLocation && selectedStation ? [
    { latitude: userLocation.latitude, longitude: userLocation.longitude },
    { latitude: selectedStation.latitude, longitude: selectedStation.longitude }
  ] : [];

  const handleNearbyPress = () => {
    if (closestStation && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: closestStation.coords.latitude,
        longitude: closestStation.coords.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      });
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greetingText}>Hello, Silahudeen Salah</Text>
        <Image source={require('../../assets/Hass-Logo.png')} style={styles.profileImage} />
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]} onPress={handleNearbyPress}>
          <Text style={styles.tabText}>Nearby</Text>
        </TouchableOpacity>
        <Text>Closest Location: {closestStation ? closestStation.StationName : 'N/A'}</Text>
      </View>

      {/* Station Card */}
      <ScrollView horizontal>
        {stations.map((station, index) => (
          <TouchableOpacity key={index} onPress={() => handleStationPress(station.coords)}>
            <View style={styles.stationCard}>
              <Image source={defaultStationImage} style={styles.stationImage} />
              <View style={styles.stationDetails}>
                <Text style={styles.stationName}>{station.StationName}</Text>
                <Text style={styles.stationAddress}>{station.address}</Text>
                <View style={styles.stationMeta}>
                  <FontAwesome name="location-arrow" size={16} color="gold" />
                  <Text style={styles.stationDistance}>{station.distance}</Text>
                  <FontAwesome name="clock-o" size={16} color="gold" style={styles.clockIcon} />
                  <Text style={styles.stationTime}>{station.time}</Text>
                </View>
              </View>
              <Feather name="navigation" size={24} color="gold" />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Map */}
      <MapView
        ref={mapRef}
        provider={Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={initialRegion}
      >
        {/* User Location Marker */}
        {userLocation && (
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
            title="Your Location"
            description="This is where you are"
            pinColor="blue"
          />
        )}

        {/* Stations Markers */}
        {stations.map((station, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: station.coords.latitude,
              longitude: station.coords.longitude,
            }}
            title={station.StationName}
            description={station.address}
          />
        ))}

        {/* Path */}
        {userLocation && selectedStation && (
          <Polyline
            coordinates={[
              { latitude: userLocation.latitude, longitude: userLocation.longitude },
              { latitude: selectedStation.latitude, longitude: selectedStation.longitude }
            ]}
            strokeColor="#000" // Change the color as needed
            strokeWidth={2} // Adjust the width as needed
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  greetingText: {
    fontSize: 24,
    color: '#06045E',
    fontWeight: 'bold',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: 'gold',
  },
  tabText: {
    color: '#06045E',
    fontWeight: 'bold',
  },
  stationCard: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    margin: 20,
  },
  stationImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  stationDetails: {
    flex: 1,
  },
  stationName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#06045E',
  },
  stationAddress: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  stationMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stationDistance: {
    marginLeft: 5,
    color: 'gold',
    fontWeight: 'bold',
  },
  clockIcon: {
    marginLeft: 15,
  },
  stationTime: {
    marginLeft: 5,
    color: 'gold',
    fontWeight: 'bold',
  },
  map: {
    width: width,
    height: height / 2,
    borderRadius: 10,
    marginTop: 20,
  },
});

export default StationLocationComponent;
