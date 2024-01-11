// app/Event/EventStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';

const Stack = createStackNavigator();

const EventStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ScreenOne" component={ScreenOne} />
            <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
        </Stack.Navigator>
    );
};

export default EventStack;
