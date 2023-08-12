import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './restaurantCard'

const FeaturedRow = ({ id, title, description, restaurants }) => {
    return (
        <View>
            <View className='flex-row mt-4 items-center justify-between px-4'>
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>
            <Text className="text-xs text-gray-500 px-4">
                {description}
            </Text>
            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                className="pt-4"
            >
                {/* Restaurant Cards */}
                {
                    restaurants?.map((element) => (
                        < RestaurantCard
                            id={element._id}
                            imgUrl='https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg?w=400&h=300&c=crop'
                            title={element.name}
                            rating={element.rating}
                            category={"Japanese"}
                            address={element.address.substr(0, 20) + '...'}
                            description={element.short_description}
                            dishes={element.dishes}
                            long={element.long}
                            lat={element.lat}
                        />
                    ))
                }

            </ScrollView>
        </View>
    )
}

export default FeaturedRow