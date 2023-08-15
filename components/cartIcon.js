import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { selectCartItems, selectCartTotal } from '../features/cartSlice'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const CartIcon = () => {
    const item = useSelector((state) => selectCartItems(state));
    const navigation = useNavigation();
    const cartTotal = useSelector((state) => selectCartTotal(state));
    return (
        <View className={`absolute bottom-10 w-full z-50 ${!item.length && 'hidden'}`}>
            <TouchableOpacity
                className="bg-[#00ccbb] p-4 rounded-lg flex-row items-center space-x-1"
                onPress={() => navigation.navigate('Cart')}
            >
                <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">{item.length}</Text>
                <Text className="flex-1 text-white font-extrabold text-lg text-center">View Basket</Text>
                <Text className="text-lg text-white font-extrabold"> ₹ {cartTotal}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CartIcon;