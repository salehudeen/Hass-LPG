import React, { useRef, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const HomePage = ({ navigation }) => {
    const carouselRef = useRef(null);
    
    useEffect(() => {
        const interval = setInterval(() => {
            if (carouselRef.current) {
                carouselRef.current.snapToNext();
            }
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, []);

    const carouselData = [
        {
            title: 'Section 1',
            icon: 'home',
            image: require('../../assets/download.jpg'), 
            navigateTo: 'Section1'
        },
        {
            title: 'Section 2',
            icon: 'place',
            image: require('../../assets/download.jpg'),
            navigateTo: 'Section2'
        },
        {
            title: 'Section 3',
            icon: 'local-gas-station',
            image: require('../../assets/download.jpg'),
            navigateTo: 'Section3'
        },
    ];

    const renderCarouselItem = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(item.navigateTo)}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <MaterialIcons name={item.icon} size={50} color="#06045E" />
            <Image source={item.image} style={styles.cardImage} />
        </TouchableOpacity>
    );

    const flatListData = [
        { key: 'Buy Gas', navigateTo: 'BuyGas' },
        { key: 'Get Stations Locations', navigateTo: 'StationLocations' },
        { key: 'Apply for Fuel Cards', navigateTo: 'FuelCards' },
        { key: '', navigateTo: '' }, // Blank item
    ];

    const renderFlatListItem = ({ item }) => (
        <TouchableOpacity 
            style={[styles.flatListItem, item.key === '' && styles.blankFlatListItem]} 
            onPress={() => item.navigateTo && navigation.navigate(item.navigateTo)}
        >
            <Text style={styles.flatListText}>{item.key}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.carouselContainer}>
                <Carousel
                    ref={carouselRef}
                    data={carouselData}
                    renderItem={renderCarouselItem}
                    sliderWidth={width}
                    itemWidth={width * 0.8}
                    loop
                />
            </View>
            <FlatList
                data={flatListData}
                renderItem={renderFlatListItem}
                keyExtractor={(item) => item.key}
                style={styles.flatList}
            />
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
                    <MaterialIcons name="home" size={30} color="white" />
                    <Text style={styles.navButtonText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('MyOrders')}>
                    <MaterialIcons name="receipt" size={30} color="white" />
                    <Text style={styles.navButtonText}>My Orders</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    carouselContainer: {
        height: 250,
        marginTop: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#06045E',
    },
    cardImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    flatList: {
        marginVertical: 20,
    },
    flatListItem: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    flatListText: {
        fontSize: 18,
        color: '#06045E',
    },
    blankFlatListItem: {
        backgroundColor: '#f0f0f0',
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#06045E',
    },
    navButton: {
        alignItems: 'center',
    },
    navButtonText: {
        color: 'white',
        fontSize: 12,
        marginTop: 5,
    },
});

export default HomePage;
