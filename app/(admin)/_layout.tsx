import React, { Component } from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome5, Foundation, MaterialIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

export class Layout extends Component {
    render() {
        return (
            <Tabs screenOptions={{
                tabBarActiveTintColor: Colors.primary,
            }}>

                <Tabs.Screen
                    name="index"
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => <FontAwesome5 name="home" size={size} color={color} />
                    }} />
                <Tabs.Screen
                    name="eventReports"
                    options={{
                        tabBarLabel: 'Events',
                        tabBarIcon: ({ color, size }) => <FontAwesome5 name="calendar-check" size={size} color={color} />
                    }} />
                <Tabs.Screen
                    name="attendanceReports"
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