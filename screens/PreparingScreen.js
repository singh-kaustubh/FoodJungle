import { SafeAreaView, Text } from 'react-native';
import React, { useEffect } from 'react';
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from '@react-navigation/native';

const PreparingScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery')
        }, 4000)
    }, [])
    return (
        <SafeAreaView className="flex-1 bg-[#00CCBB] items-center justify-center">
            <Animatable.Image
                source={require("../assets/orderLoding.gif")}
                animation="slideInUp"
                iterationCount={1}
                className="h-96 w-96"
            />
            <Animatable.Text
                animation="slideInUp"
                iterationCount={1}
                className="text-lg my-10 text-white font-bold text-center"
            >
                Waititng for Restaurant to accept your order!
            </Animatable.Text>
            <Progress.CircleSnail size={60} indeterminate={true} color='white' />
        </SafeAreaView>
    )
}

export default PreparingScreen;