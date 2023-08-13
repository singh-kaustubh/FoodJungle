import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

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
        <View>
            <Text>RestaurantScreen</Text>
        </View>
    )
}

export default RestaurantScreen