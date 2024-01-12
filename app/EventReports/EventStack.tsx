// app/Event/EventStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import One from './ScreenOne';
import ScreenOne from './ScreenOne';


const Stack = createStackNavigator();

const EventStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ScreenOne" component={ScreenOne} />
        </Stack.Navigator>
    );
};

export default EventStack;
