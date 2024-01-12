import React, { Component } from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome5, Foundation } from '@expo/vector-icons';

export class Layout extends Component {
    render() {
        return (
            <Tabs screenOptions={{
                tabBarActiveTintColor: '#0000ff',
            }}>

                <Tabs.Screen
                    name="index"
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => <FontAwesome5 name="home" size={size} color={color} />
                    }} />
                <Tabs.Screen
                    name="inbox"
                    options={{
                        tabBarLabel: 'Chat',
                        tabBarIcon: ({ color, size }) => <FontAwesome5 name='ello' size={size} color={color} />
                    }} />
                <Tabs.Screen
                    name="attendance"
                    options={{
                        tabBarLabel: 'Attendance',
                        tabBarIcon: ({ color, size }) => <Foundation name="graph-pie" size={size} color={color} />
                    }} />
                <Tabs.Screen
                    name="profile"
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => <FontAwesome5 name="user-alt" size={size} color={color} />
                    }} />
            </Tabs>
        )
    }
}

export default Layout