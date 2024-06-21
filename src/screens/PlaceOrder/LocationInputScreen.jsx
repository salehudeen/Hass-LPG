// src/screens/LocationInputScreen.js
import React, { useState, useRef } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  Animated,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const LocationInputScreen = () => {
  const [region, setRegion] = useState({
    latitude: -1.286389,
    longitude: 36.817223,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const [marker, setMarker] = useState({
    latitude: -1.286389,
    longitude: 36.817223,
  });
  const [description, setDescription] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);

  const navigation = useNavigation();

  const mapOpacity = useRef(new Animated.Value(1)).current;
  const inputTranslateY = useRef(new Animated.Value(0)).current;

  const handleFocus = () => {
    setIsInputFocused(true);
    Animated.parallel([
      Animated.timing(mapOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(inputTranslateY, {
        toValue: -height / 4,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleBlur = () => {
    setIsInputFocused(false);
    Animated.parallel([
      Animated.timing(mapOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(inputTranslateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleConfirm = () => {
    console.log('Location:', marker);
    console.log('Description:', description);
    navigation.navigate('Gas Selection', { location: marker, description });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Plan your Order</Text>
        <Animated.View style={[styles.mapContainer, { opacity: mapOpacity }]}>
          <MapView
            style={styles.map}
            region={region}
            onRegionChangeComplete={(region) => setRegion(region)}
            onPress={(e) => setMarker(e.nativeEvent.coordinate)}
          >
            <Marker
              coordinate={marker}
              draggable
              onDragEnd={(e) => setMarker(e.nativeEvent.coordinate)}
            />
          </MapView>
        </Animated.View>
        <Animated.View style={[styles.inputContainer, { transform: [{ translateY: inputTranslateY }] }]}>
          <TextInput
            style={styles.input}
            placeholder="Add description"
            value={description}
            onChangeText={setDescription}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <TouchableOpacity style={styles.button} onPress={handleConfirm}>
            <Text style={styles.buttonText}>Confirm Location</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
  },
  mapContainer: {
    height: height / 2,
  },
  map: {
    width: width,
    height: '100%',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#000',
    padding: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LocationInputScreen;
