import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StarIcon, MapPinIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'


const RestaurantCard = ({
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
}) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity className="bg-white mr-3 shadow rounded-xl"
            onPress={() => {
                navigation.navigate('Restaurant', {
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
                })
            }}
        >
            <Image
                source={{
                    uri: urlFor(imgUrl).url(),
                }}
                className="h-36 w-64 rounded-sm"
            />
            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-2">
                    {title}
                </Text>
                <View className="flex-row items-center space-x-1">
                    <StarIcon size={22} opacity={0.5} color={'green'} />
                    <Text className="text-xs text-gray-500">
                        <Text className="text-green-500">
                            {rating}
                        </Text> . {category}
                    </Text>
                </View>
                <View className="flex-row space-x-1 items-center">
                    <MapPinIcon size={22} />
                    <Text className="text-xs text-gray-500">Nearby . {address}</Text>
                </View>
            </View>
        </TouchableOpacity >
    )
}
export default RestaurantCard