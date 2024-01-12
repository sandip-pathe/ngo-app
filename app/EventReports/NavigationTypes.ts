import { RouteProp } from '@react-navigation/native';

type EventDetails = {
    eventName: string;
    date: string | Date;
    startTime: string;
    endTime: string;
    description: string;
    attendees: number; // Change to the actual type for attendees if needed
    venue: string;
    // Add more fields if needed
};

export type RootStackParamList = {
    ScreenOne: EventDetails;
    ScreenTwo: { eventDataFromScreenOne: EventDetails; objectivesAchieved: string; imageUris: string[] };
    // Replace EventDetails with the actual type of data
};

export type ScreenOneRouteProp = RouteProp<RootStackParamList, 'ScreenOne'>;
export type ScreenTwoRouteProp = RouteProp<RootStackParamList, 'ScreenTwo'>;
