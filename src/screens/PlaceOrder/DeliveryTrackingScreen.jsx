// src/screens/DeliveryTrackingScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Modal, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');
const customMapStyle = [
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#999999', // Set the color of the roads to light gray
        },
      ],
    },
  ];

const DeliveryTrackingScreen = () => {
  const route = useRoute();
  const { orderNumber } = route.params;
  const [region, setRegion] = useState({
    latitude: 6.5244,
    longitude: 3.3792,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const [markers, setMarkers] = useState([
    { id: '1', title: 'Warehouse', coordinate: { latitude: 6.5244, longitude: 3.3792 } },
    { id: '2', title: 'Customer', coordinate: { latitude: 6.5244, longitude: 3.3892 } },
  ]);
  const [modalVisible, setModalVisible] = useState(false);

  const renderCustomMarker = (marker) => (
    <View style={styles.markerContainer}>
      <Ionicons
        name={marker.title === 'Warehouse' ? 'location' : 'location-outline'}
        size={40}
        color={marker.title === 'Warehouse' ? 'black' : 'green'}
      />
      {marker.title === 'Customer' && (
        <View style={styles.markerInfoContainer}>
          <Text style={styles.markerInfoText}>20mins</Text>
          <Text style={styles.markerInfoText}>15mins</Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={(region) => setRegion(region)}
        customMapStyle={customMapStyle}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            tracksViewChanges={false}
            anchor={{ x: 0.5, y: 0.5 }}
          >
            {renderCustomMarker(marker)}
          </Marker>
        ))}
      </MapView>
      <View style={styles.bottomContainer}>
        <Text style={styles.orderNumber}>#{orderNumber}</Text>
        <View style={styles.progressContainer}>
            <View style={[styles.progressStep, styles.completedStep]}>
            <Ionicons name="checkmark-circle" size={24} color="#2ecc71" />
            <Text style={styles.progressStepText}>Order Confirmed</Text>
            </View>
            <View style={[styles.progressStep, styles.activeStep]}>
            <Ionicons name="bicycle" size={24} color="#f39c12" />
            <Text style={styles.progressStepText}>Getting Rider</Text>
            </View>
            <View style={styles.progressStep}>
            <Ionicons name="send" size={24} color="#bbb" />
            <Text style={styles.progressStepText}>Rider Out for Delivery</Text>
            </View>
        </View>

    <TouchableOpacity style={styles.trackButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.trackButtonText}>Order Details</Text>
    </TouchableOpacity>
    </View>
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Remaining time</Text>
            <Text style={styles.modalTime}>20mins</Text>
            <Text style={styles.modalTitle}>Estimated time</Text>
            <Text style={styles.modalTime}>15mins</Text>
            <View style={styles.modalDivider} />
            <View style={styles.modalRow}>
              <Text style={styles.modalLabel}>From</Text>
              <Text style={styles.modalValue}>Oba Akinjoba str.</Text>
            </View>
            <View style={styles.modalRow}>
              <Text style={styles.modalLabel}>To</Text>
              <Text style={styles.modalValue}>A152, Conoil Rd.</Text>
            </View>
            <View style={styles.driverDetailsContainer}>
              <Ionicons name="person-circle-outline" size={48} color="#666666" />
              <View style={styles.driverDetails}>
                <Text style={styles.driverName}>Marcus Suitonh</Text>
                <Text style={styles.driverPhone}>+1 101212345</Text>
              </View>
              <View style={styles.driverActions}>
                <TouchableOpacity style={styles.driverAction}>
                  <Ionicons name="call-outline" size={24} color="#666666" />
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.driverAction}>
                  <MaterialIcons name="message-outline" size={24} color="#666666" />
                </TouchableOpacity> */}
              </View>
            </View>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
    },
    map: {
      width: width,
      height: height * 0.7,
    },
    markerContainer: {
      alignItems: 'center',
    },
    markerImage: {
      width: 40,
      height: 40,
    },
    markerInfoContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderRadius: 8,
      paddingHorizontal: 8,
      paddingVertical: 4,
      marginTop: 4,
    },
    markerInfoText: {
      color: '#FFFFFF',
      fontSize: 12,
    },
    bottomContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#FFFFFF',
      padding: 16,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: -2 },
      shadowRadius: 8,
      elevation: 5,
    },
    orderNumber: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    trackButton: {
      backgroundColor: '#06045e',
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 8,
      alignSelf: 'center',
    },
    trackButtonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
    progressContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 16,
      },
      progressStep: {
        alignItems: 'center',
      },
      completedStep: {
        opacity: 0.5,
      },
      activeStep: {
        opacity: 1,
      },
      progressStepText: {
        fontSize: 12,
        marginTop: 4,
        textAlign: 'center',
      },
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      padding: 16,
      width: '80%',
    },
    modalTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    modalTime: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    modalDivider: {
      height: 1,
      backgroundColor: '#DDDDDD',
      marginVertical: 16,
    },
    modalRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    modalLabel: {
      fontSize: 16,
      color: '#666666',
    },
    modalValue: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    driverDetailsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 16,
    },
    driverAvatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#DDDDDD', // Add a background color for the avatar icon
      },
    driverDetails: {
      flex: 1,
      marginLeft: 16,
    },
    driverName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    driverPhone: {
      fontSize: 14,
      color: '#666666',
    },
    driverActions: {
      flexDirection: 'row',
    },
    driverAction: {
      marginLeft: 16,
    },
    driverActionIcon: {
        width: 24,
        height: 24,
        tintColor: '#666666',
      },
    closeButton: {
      backgroundColor: '#e74c3c',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      alignSelf: 'center',
      marginTop: 16,
    },
    closeButtonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
  });

export default DeliveryTrackingScreen;
