import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Tabs } from 'expo-router'
import { Octicons } from '@expo/vector-icons';

export class Layout extends Component {
    render() {
        return (
            <Tabs screenOptions={{
                tabBarActiveTintColor: '#0000ff',
            }}>

                <Tabs.Screen
                    name="index"
                    options={{
                        tabBarLabel: 'Feed',
                        tabBarIcon: ({ color, size }) => <Octicons name="feed-heart" size={size} color={color} />
                    }} />
                <Tabs.Screen
                    name="inbox"
                    options={{
                        tabBarLabel: 'Chat',
                        tabBarIcon: ({ color, size }) => <Octicons name="alert" size={size} color={color} />
                    }} />
                <Tabs.Screen
                    name="explore"
                    options={{
                        tabBarLabel: 'Attendance',
                        tabBarIcon: ({ color, size }) => <Octicons name="arrow-right" size={size} color={color} />
                    }} />
                <Tabs.Screen
                    name="profile"
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => <Octicons name="person" size={size} color={color} />
                    }} />




            </Tabs>
        )
    }
}

export default Layout