import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenOne from './ScreenOne';


const Stack = createStackNavigator();

export default function Layout() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#00ADB5',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerLeft: () => (
                    <Ionicons
                        style={{ paddingHorizontal: 5, }}
                        name="arrow-back"
                        size={24}
                        color="white"
                        onPress={() => console.log('open menu')}
                    />
                ),
                headerRight: () => (
                    <Ionicons
                        style={{ paddingRight: 10 }}
                        name="notifications"
                        size={24}
                        color="white"
                        onPress={() => console.log('open notifications')}
                    />
                ),
            }}>
            <Stack.Screen name="ScreenOne" component={ScreenOne} />
        </Stack.Navigator >
    );
}



