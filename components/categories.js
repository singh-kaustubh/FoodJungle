import React from 'react'
import { ScrollView } from 'react-native';
import CategoryCard from './categoryCard';

const Categories = ({}) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndex={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
                padding: 10,
            }}
        >
            <CategoryCard title="Testing" />
            <CategoryCard title="Testing" />
            <CategoryCard title="Testing" />
        </ScrollView>
    )
}

export default Categories