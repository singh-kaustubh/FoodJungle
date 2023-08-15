import { Image, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { View } from 'react-native';
import { XMarkIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import * as Progress from "react-native-progress";
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';

const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    return (
        <View className="bg-[#00CCBB] flex-1">
            <SafeAreaView className="z-50">
                <View className="flex-row justify-between items-center p-5">
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <XMarkIcon color="white" size={30} />
                    </TouchableOpacity>
                    <Text className="font-light text-white text-lg">Order Help</Text>
                </View>
                <View className="p-6 z-50 shadow-md bg-white mx-5 my-2 rounded-md">
                    <View className="flex-row justify-between">
                        <View>
                            <Text className="text-lg text-gray-400">
                                Estimated Arrival
                            </Text>
                            <Text className="text-4xl font-bold">
                                40-45 minutes
                            </Text>
                        </View>
                        <Image
                            className="h-20 w-20"
                            source={{
                                uri: "https://links.papareact.com/wru"
                            }}
                        />
                    </View>
                    <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
                    <Text className="mt-3 text-gray-500">
                        Your order at {restaurant.title} is being prepared!
                    </Text>
                </View>
            </SafeAreaView>
            <MapView
                initialRegion={{
                    latitude: 28.6336,
                    longitude: 77.2177,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                mapType='mutedStandard'
                className="flex-1 -mt-10 z-0"
            >
                <Marker
                    coordinate={{
                        latitude: 28.6336,
                        longitude: 77.2177,
                    }}
                    title={restaurant.title}
                    description={restaurant.short_description}
                    identifier='origin'
                    pinColor='#00CCBB'
                />
            </MapView>
            <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
                <Image
                    source={{
                        uri: "https://links.papareact.com/wru"
                    }}
                    className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
                />
                <View className="flex-1">
                    <Text className="text-lg">
                        Kaustubh Singh
                    </Text>
                    <Text className="text-gray-400">Your Rider</Text>
                </View>
                <View className="p-2 ">
                    <Text className="font-bold text-[#00CCBB] text-lg">Call</Text>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default DeliveryScreen