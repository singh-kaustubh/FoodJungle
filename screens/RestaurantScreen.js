import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/dishRow';
import CartIcon from '../components/cartIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';
import { clearCart } from '../features/cartSlice';

const RestaurantScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
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
    useEffect(() => {
        dispatch(clearCart())
        dispatch(setRestaurant({
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
        }))
    }, [dispatch])
    return (
        <React.Fragment>
            <CartIcon />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="relative">
                    <Image
                        source={{
                            uri: urlFor(imgUrl).url()
                        }}
                        className="w-full h-72 p-4 bg-gray-50"
                    ></Image>
                    <TouchableOpacity onPress={navigation.goBack} className="absolute top-11 left-4 p-2 bg-gray-200 rounded-full">
                        <ArrowLeftIcon size={20} color={"#00CCBB"} />
                    </TouchableOpacity>
                </View>
                <View className="bg-white">
                    <View className="px-4 pt-4">
                        <Text className="text-3xl font-bold">{title}</Text>
                        <View className="flex-row space-x-2 my-1">
                            <View className="flex-row items-center space-x-1">
                                <StarIcon color={"green"} opacity={0.5} size={22} />
                                <Text className="text-xs text-gray-500">
                                    <Text className="text-green-500">{rating}</Text> . {category}
                                </Text>
                            </View>
                            <View className="flex-row items-center space-x-1">
                                <MapPinIcon color={"gray"} opacity={0.5} size={22} />
                                <Text className="text-gray-500 text-xs">Nearby . {address}</Text>
                            </View>
                        </View>
                        <Text className="text-gray-500 mt-2 pb-4">{description}</Text>
                    </View>
                    <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                        <QuestionMarkCircleIcon color={"gray"} />
                        <Text className="pl-2 flex-1 text-md font-bold">Have a food alergy?</Text>
                        <ChevronRightIcon color={"#00CCBB"} />
                    </TouchableOpacity>
                </View>
                <View className="pb-36">
                    <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
                    {dishes?.map((dish) => (
                        <DishRow
                            key={dish._id}
                            id={dish._id}
                            name={dish.name}
                            description={dish.short_description}
                            image={urlFor(dish.image).url()}
                            price={dish.price}
                        />
                    ))}
                </View>
            </ScrollView>
        </React.Fragment>
    )
}

export default RestaurantScreen