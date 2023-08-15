import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, selectCartItems, selectCartItemsById } from '../features/cartSlice';

const DishRow = ({ id, name, description, image, price }) => {
    const [isPressed, setIsPressed] = useState(false);
    const dispatch = useDispatch();
    const item = useSelector((state) => selectCartItemsById(state, id));
    const cart = useSelector((state) => selectCartItems(state));
    const addItemToCart = () => {
        dispatch(addToCart({ id, name, description, price, image }));
    }
    const removeItemFromCart = () => {
        dispatch(removeFromCart({ id, name, description, price, image }));
    }
    return (
        <React.Fragment>
            <TouchableOpacity className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`} onPress={() => setIsPressed(!isPressed)}>
                <View className="flex-row">
                    <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">{name}</Text>
                        <Text className="text-gray-400">{description}</Text>
                        <Text className="text-gray-400 mt-2">
                            ₹ {price}
                        </Text>
                    </View>
                    <View>
                        <Image
                            className="h-20 w-20 bg-gray-300 p-4"
                            source={{
                                uri: image
                            }}
                        />
                    </View>
                </View>
            </TouchableOpacity>
            {isPressed && (
                <View className="flex-row bg-white px-4 items-center pb-4 space-x-2">
                    <TouchableOpacity disabled={!item.length} onPress={() => removeItemFromCart()}>
                        <MinusCircleIcon size={40} color={item.length ? '#00CCBB' : 'gray'} />
                    </TouchableOpacity>
                    <Text>{item.length}</Text>
                    <TouchableOpacity onPress={() => addItemToCart({ id, name, description, image, price })}>
                        <PlusCircleIcon size={40} color={'#00CCBB'} />
                    </TouchableOpacity>
                </View>
            )}
        </React.Fragment>
    )
}

export default DishRow