import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import ExploreHeader from '../../components/ExploreHeader'


const Page = () => {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Screen options={{
                header: () => <ExploreHeader />,
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Page