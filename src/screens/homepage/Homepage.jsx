import React, { useState, useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Navbar from '../../components/Navbar';
import { useNavigation } from '@react-navigation/native';
import { fetchUserAttributes, signOut } from '@aws-amplify/auth';
import { generateClient } from '@aws-amplify/api';
import * as queries from '../../graphql/queries';
import { searchCustomerAccounts } from '../../graphql/queries';
const { width, height } = Dimensions.get('window');

const HomePage = ({ route }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [greeting, setGreeting] = useState('');
    const [userName, setUserName] = useState('');
    const carouselRef = useRef(null);
    const intervalRef = useRef(null);
    const navigation = useNavigation();
    const userId = route.params.userId;

    useEffect(() => {
        // async function fetchUserName(userId) {
        //     try {
        //         const client = generateClient();
        //         console.log('UserId:', userId);
        
        //         const result = await client.graphql({
        //             query: searchCustomerAccounts,
        //             variables: {
        //                 filter: { uniqueCustomerId: { eq: userId } }
        //             }
        //         });
        
        //         const user = result.data.searchCustomerAccounts.items[0];
        //         console.log(user);
        
        //         if (user) {
        //             setUserName(user.name);
        //         } else {
        //             console.error('User not found');
        //         }
        //     } catch (error) {
        //         console.error('Error fetching user data:', error);
        //     }
        // }

        function getGreeting() {
            const now = new Date();
            const hour = now.getHours();
            if (hour < 12) {
                setGreeting('Good Morning');
            } else if (hour < 18) {
                setGreeting('Good Afternoon');
            } else {
                setGreeting('Greetings');
            }
        }

        // fetchUserName();
        getGreeting();

        intervalRef.current = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(intervalRef.current);
    }, [userId]);

    const handleSignOut = async () => {
        try {
            await signOut();
            navigation.navigate('Login');
        } catch (error) {
            console.log('Error signing out:', error);
            Alert.alert('Error', 'Failed to sign out');
        }
    };

    const carouselData = [
        {
            title: 'Hass Gas',
            info: 'Gas to your location quick and easy.',
            image: require('../../assets/download.jpg'),
            button: 'Get Hass Gas',
            navigateTo: 'Gas Selection',
        },
        {
            title: 'Find Stations',
            info: 'Get nearby stations.',
            image: require('../../assets/download.jpg'),
            button: 'Find Stations',
            navigateTo: 'stationfinder',
        },
        {
            title: 'Fuel Cards',
            info: 'Apply for Fuel card.',
            image: require('../../assets/download.jpg'),
            button: 'Fuel Card',
            navigateTo: 'Fuel Card Landing',
        },
    ];

    const quickActions = [
        {
            title: 'Station Finder',
            info: 'Locate us anywhere',
            image: require('../../assets/download.jpg'),
            navigateTo: 'stationfinder',
        },
        {
            title: 'Hass FCS Card',
            info: 'Apply & Manage',
            image: require('../../assets/download.jpg'),
            navigateTo: 'Fuel Card Landing',
        },
        {
            title: 'Hass Gas',
            info: 'Get Hass Gas',
            image: require('../../assets/download.jpg'),
            navigateTo: 'Gas Selection',
        },
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
            <MaterialIcons name="arrow-forward-ios" size={20} color="#000"/>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <StatusBar hidden={false} translucent={true} />
            <View style={styles.headerSection}>
                <Text style={styles.greetingText}>{`${greeting}, ${userName}`}</Text>
                <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
                    <Text style={styles.signOutButtonText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.topSection}>
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
            <Navbar userId={userId} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    topSection: {
        height: height * 0.35,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 5,
        paddingTop: 1,
    },
    headerSection: {
        paddingHorizontal: 10,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    greetingText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    signOutButton: {
        backgroundColor: '#06045e',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
    },
    signOutButtonText: {
        color: '#fff',
        fontSize: 16,
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
});

export default HomePage;

