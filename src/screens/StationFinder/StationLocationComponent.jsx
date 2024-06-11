import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, Platform } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';
import { FontAwesome, Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const StationLocationComponent = ({ stations, selectedStation, onStationPress }) => {
  const mapRef = React.useRef(null);

  const handleStationPress = (coords) => {
    onStationPress(coords);

    mapRef.current.animateToRegion({
      latitude: coords.latitude,
      longitude: coords.longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    });
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
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.tabText}>Nearby</Text>
        </TouchableOpacity>
        <Text> Current Location: Hass Plaza</Text>
      </View>

      {/* Station Card */}
      <ScrollView horizontal>
        {stations.map((station, index) => (
          <TouchableOpacity key={index} onPress={() => handleStationPress(station.coords)}>
            <View style={styles.stationCard}>
              <Image source={station.image} style={styles.stationImage} />
              <View style={styles.stationDetails}>
                <Text style={styles.stationName}>{station.name}</Text>
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
      {Platform.OS === 'ios' ? (
        <MapView
          ref={mapRef}
          provider={PROVIDER_DEFAULT}
          style={styles.map}
          initialRegion={{
            latitude: stations[0].coords.latitude,
            longitude: stations[0].coords.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        >
          {stations.map((station, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: station.coords.latitude,
                longitude: station.coords.longitude,
              }}
              title={station.name}
              description={station.address}
            />
          ))}
        </MapView>
      ) : (
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: stations[0].coords.latitude,
            longitude: stations[0].coords.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        >
          {stations.map((station, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: station.coords.latitude,
                longitude: station.coords.longitude,
              }}
              title={station.name}
              description={station.address}
            />
          ))}
        </MapView>
      )}
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
