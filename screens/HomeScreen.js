import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsHorizontalIcon
} from "react-native-heroicons/outline";
import Categories from '../components/categories';
import FeaturedRow from '../components/featuredRow';
import sanityClient from '../sanity';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategory, setFeaturedCategories] = useState([]);
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);
    useEffect(() => {
        sanityClient.fetch(
            `
                *[_type=="featured"] {
                    ...,
                    restaurants[]->{
                        ...,
                        dishes[]->
                    }
                }
            `
        ).then((data) => {
            setFeaturedCategories(data);
        }).catch((err) => {
            //trigger error
            console.log('err', err);
        })
    }, []);
    return (
        <SafeAreaView className="bg-white pt-5">
            <View className="flex-row text-black">
                <View className="flex-row pb-3 items-center mx-4 space-x-2">
                    <Image
                        source={require('../assets/favicon.png')}
                        className="h-10 w-10 bg-gray-300 p-4 rounded-full"
                    />
                </View>
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">
                        Deliver At!
                    </Text>
                    <Text className="font-bold text-xl">
                        Current Location
                        <ChevronDownIcon size={20} color={'#00CCBB'} />
                    </Text>
                </View>
                <UserIcon size={35} color={'#00CCBB'} />
            </View>
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
                    <MagnifyingGlassIcon color={'gray'} size={20} />
                    <TextInput placeholder='Restaurants and Cusines' keyboardType='default' />
                </View>
                <AdjustmentsHorizontalIcon />
            </View>
            <ScrollView className="bg-gray-100 ">
                <Categories />
                {featuredCategory?.forEach((category) => {
                    <FeaturedRow
                        id={category._id}
                        title={category._id}
                        description={category.short_description}
                        restaurants={category.restaurants}
                    />
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen