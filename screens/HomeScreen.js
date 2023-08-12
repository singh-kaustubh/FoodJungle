import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsHorizontalIcon
} from "react-native-heroicons/outline";
import Categories from '../components/categories';
import FeaturedRow from '../components/featuredRow';

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
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
                {/* Categories */}
                <Categories />
                {/* Featured Rows */}
                <FeaturedRow title={'Featured'} description={'Today\'s featured items'} />
                <FeaturedRow title={'Tasty Discounts'} description={'Tasty treats for you on the app'} />
                <FeaturedRow title={'Offers near you'} description={'Local restaurants invite you'} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen