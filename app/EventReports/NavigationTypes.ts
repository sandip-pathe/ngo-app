import { RouteProp } from '@react-navigation/native';



type YourEventType = {
    eventName: string;
    date: string; // Change to the actual type for date if needed
    startTime: string;
    endTime: string;
    description: string;
    attendees: string; // Change to the actual type for attendees if needed
    venue: string;
    // Add more fields if needed
};


export type RootStackParamList = {
    ScreenOne: undefined;
    ScreenTwo: { eventDataFromScreenOne: YourEventType }; // Replace YourEventType with the actual type of data
};

export type ScreenOneRouteProp = RouteProp<RootStackParamList, 'ScreenOne'>;
export type ScreenTwoRouteProp = RouteProp<RootStackParamList, 'ScreenTwo'>;
