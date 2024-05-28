import React, { useState, useRef, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const HomePage = ({ navigation }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(intervalRef.current);
    }, []);

    const carouselData = [
        {
            title: 'Hass Gas',
            info: 'Gas to your location quick and easy.',
            image: require('../../assets/download.jpg'),
            button:'Get Hass Gas',
            navigateTo: ''
        },
        {
            title: 'Find Stations',
            info: 'Get nearby stations.',
            image: require('../../assets/download.jpg'),
            button:'Find Stations',
            navigateTo: ''
        },
        {
            title: 'Fuel Cards',
            info: 'Apply for Fuel card.',
            image: require('../../assets/download.jpg'),
            button:'Fuel Card',
            navigateTo: ''
        },
    ];

    const quickActions = [
        { title: 'Station Finder', info: 'Locate us anywhere', image: require('../../assets/download.jpg'), navigateTo: '' },
        { title: 'Hass FCS Card', info: 'Apply | Top Up | Manage', image: require('../../assets/download.jpg'), navigateTo: '' },
        { title: 'Hass Gas', info: 'Get Hass Gas', image: require('../../assets/download.jpg'), navigateTo: '' },
    ];

    const renderCarouselItem = ({ item }) => (
        <TouchableOpacity style={styles.carouselCard} onPress={() => navigation.navigate(item.navigateTo)}>
            <Image source={item.image} style={styles.carouselImage} />
            <View style={styles.carouselTextContainer}>
                <Text style={styles.carouselTitle}>{item.title}</Text>
                <Text style={styles.carouselInfo}>{item.info}</Text>
                <TouchableOpacity style={styles.findStationButton} onPress={() => navigation.navigate(item.navigateTo)}>
                    <Text style={styles.findStationButtonText}>{item.button}</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    const renderQuickActionItem = ({ item }) => (
        <TouchableOpacity style={styles.quickActionCard} onPress={() => navigation.navigate(item.navigateTo)}>
            <Image source={item.image} style={styles.quickActionImage} />
            <View style={styles.quickActionTextContainer}>
                <Text style={styles.quickActionTitle}>{item.title}</Text>
                <Text style={styles.quickActionInfo}>{item.info}</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={20} color="#000" />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.greetingText}>Good Afternoon</Text>
                <ScrollView
                    horizontal
                    pagingEnabled
                    ref={carouselRef}
                    onScroll={(event) => {
                        const index = Math.floor(event.nativeEvent.contentOffset.x / width);
                        setActiveIndex(index);
                    }}
                    scrollEventThrottle={16}
                    showsHorizontalScrollIndicator={false}
                >
                    {carouselData.map((item, index) => (
                        <View key={index} style={styles.carouselItem}>
                            {renderCarouselItem({ item })}
                        </View>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.quickActionsSection}>
                <Text style={styles.quickActionsTitle}>Quick Actions</Text>
                <FlatList
                    data={quickActions}
                    renderItem={renderQuickActionItem}
                    keyExtractor={(item) => item.title}
                    style={styles.quickActionsList}
                />
            </View>
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
                    <MaterialIcons name="home" size={30} color="white" />
                    <Text style={styles.navButtonText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('MyOrders')}>
                    <MaterialIcons name="receipt" size={30} color="white" />
                    <Text style={styles.navButtonText}>My Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Anticounterfeit')}>
                    <MaterialIcons name="verified" size={30} color="white" />
                    <Text style={styles.navButtonText}>Anticounterfeit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('MyCard')}>
                    <MaterialIcons name="credit-card" size={30} color="white" />
                    <Text style={styles.navButtonText}>My Card</Text>
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
    topSection: {
        height: height * 0.4,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    greetingText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    carouselItem: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    carouselCard: {
        width: width * 0.9,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
    },
    carouselImage: {
        width: '100%',
        height: 150,
    },
    carouselTextContainer: {
        padding: 10,
    },
    carouselTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    carouselInfo: {
        fontSize: 14,
        color: '#000',
        marginVertical: 5,
    },
    findStationButton: {
        backgroundColor: '#06045E',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    findStationButtonText: {
        color: '#fff',
        fontSize: 14,
    },
    quickActionsSection: {
        flex: 1,
        paddingHorizontal: 10,
    },
    quickActionsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    quickActionsList: {
        marginVertical: 10,
    },
    quickActionCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
        marginBottom: 10,
    },
    quickActionImage: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    quickActionTextContainer: {
        flex: 1,
        marginLeft: 10,
    },
    quickActionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    quickActionInfo: {
        fontSize: 14,
        color: '#000',
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
