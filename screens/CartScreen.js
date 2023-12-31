import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, selectCartItems, selectCartTotal } from '../features/cartSlice';
import { selectRestaurant } from '../features/restaurantSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';

const CartScreen = () => {
    const navigation = useNavigation();
    const items = useSelector((state) => selectCartItems(state));
    const restaurant = useSelector((state) => selectRestaurant(state));
    const [groupedItemsInCart, setGroupedItemsInCart] = useState({});
    const cartTotal = useSelector((state) => selectCartTotal(state));
    const dispatch = useDispatch();
    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {})
        setGroupedItemsInCart(groupedItems);
    }, [items])
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 bg-gray-100">
                <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
                    <View>
                        <Text className="text-lg font-bold text-center">Cart</Text>
                        <Text className="text-center text-gray-400">{restaurant.title}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className="rounded-full bg-gray-100 absolute top-3 right-5"
                    >
                        <XCircleIcon color="#00CCBB" height={50} width={50} />
                    </TouchableOpacity>
                </View>
                <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
                    <Image
                        source={{
                            uri: "https://links.papareact.com/wru"
                        }}
                        className="h-10 w-10 bg-gray-300 p-4 rounded-full"
                    />
                    <Text className="flex-1">Delivery in 30-35 minutes</Text>
                    <TouchableOpacity>
                        <Text className="text-[#00CCBB]">Change</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView className="divide-y divide-gray-200">
                    {Object.entries(groupedItemsInCart).map(([key, value]) => (
                        <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                            <Text className="text-[#00CCBB]">{value.length} x</Text>
                            <Image
                                className="h-12 w-12 rounded-full"
                                source={{
                                    uri: value[0]?.image
                                }}
                            />
                            <Text className="flex-1">{value[0]?.name}</Text>
                            <Text className="text-gray-400"> ₹ {value[0].price * value.length}</Text>
                            <TouchableOpacity>
                                <Text className="text-[#00CCBB] text-xs" onPress={() => dispatch(removeFromCart({ id: key }))}>
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
                <View className="p-5 bg-white mt-5 space-y-4">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Subtotal</Text>
                        <Text className="text-gray-400">
                            ₹ {cartTotal}
                        </Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Delivery Charge</Text>
                        <Text className="text-gray-400">
                            ₹ {cartTotal ? 50 : 0}
                        </Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-black font-extrabold">Order Total</Text>
                        <Text className="text-black font-extrabold">
                            ₹ {cartTotal ? (cartTotal + 50) : 0}
                        </Text>
                    </View>
                    <TouchableOpacity className="rounded-lg bg-[#00CCBB] p-4" onPress={() => navigation.navigate('Preparing')}>
                        <Text className="text-center text-lg text-white text-bold">
                            Place Order
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default CartScreen