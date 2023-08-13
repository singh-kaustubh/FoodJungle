import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';

const RestaurantScreen = () => {
    const navigation = useNavigation();
    const {
        params: {
            id,
            imgUrl,
            title,
            rating,
            category,
            address,
            description,
            dishes,
            long,
            lat
        }
    } = useRoute();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View className="relative">
                <Image
                    source={{
                        uri: urlFor(imgUrl).url()
                    }}
                    className="w-full h-56 p-4 bg-gray-50"
                ></Image>
                <TouchableOpacity onPress={navigation.goBack} className="absolute top-11 left-4 p-2 bg-gray-200 rounded-full">
                    <ArrowLeftIcon size={20} color={"#00CCBB"} />
                </TouchableOpacity>
            </View>
            <View className="bg-white">
                <View className="px-4 pt-4">
                    <Text className="text-3xl font-bold">{title}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default RestaurantScreen