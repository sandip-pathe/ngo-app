import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { defaultStyles } from '../../constants/Styles';
import TimePicker from '../../components/TimePicker';
import { Entypo, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import Separator from '../../components/Separator';
import ImageInputList from '../../components/ImageInputList';

interface EventData {
    eventName: string;
    date: string;
    startTime: string;
    endTime: string;
    description: string;
    attendees: number;
    venue: string;
    objectivesAchieved: string;
}



const ScreenOne = () => {

    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const [eventName, setEventName] = useState('');
    const [description, setDescription] = useState('');
    const [attendees, setAttendees] = useState('');
    const [venue, setVenue] = useState('');


    // const firestoreInstance: Firestore = getFirestore(FIREBASE_APP as FirebaseApp);
    // const eventsRef = collection(firestoreInstance, 'events');

    const showDatepicker = () => {
        setShowDatePicker(true);
    };

    const handleDateChange = (event: Event, selectedDate: Date | undefined) => {
        setShowDatePicker(false);
        if (selectedDate) {
            setDate(selectedDate);
            setSelectedDate(selectedDate);
        }
    };

    const handleTimeChange = (time: string) => {
        if (time) {
            setSelectedTime(time);
        }
    };

    const [objectivesAchieved, setObjectivesAchieved] = useState('');
    const [imageUris, setImageUris] = useState<string[]>([]);

    // const eventsRef = firestore().collection('events');

    const handleAdd = (uri: string) => {
        setImageUris([...imageUris, uri]);
    };

    const handleRemove = (uri: string) => {
        setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
    };

    const handleSubmit = () => {
        // Combine data from ScreenOne and ScreenTwo
        const eventDataFromScreenTwo = {
            eventName,
            objectivesAchieved,
            // Add other fields as needed
        };

        // Now you can push the combined data to the database or perform any other actions
        console.log('Combined data:', eventDataFromScreenTwo);
    };


    return (
        <ScrollView style={styles.container}>
            <View style={{ gap: 25 }}>
                <View style={[styles.itemContainer, { paddingTop: 16 }]}>
                    <Ionicons name="megaphone" size={30} color={Colors.grey} />
                    <TextInput style={[defaultStyles.inputField]} placeholder="Event Name" onChangeText={setEventName} multiline />
                </View>
                <Separator />
                <View style={styles.itemContainer}>
                    <Ionicons name="calendar" size={30} color={Colors.grey} />
                    <TouchableOpacity style={styles.dateItem} onPress={showDatepicker}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{date.toLocaleDateString()}</Text>
                    </TouchableOpacity>
                    {showDatePicker && (
                        <DateTimePicker
                            value={date}
                            mode="date"
                            is24Hour={true}
                            display="default"
                            onChange={handleDateChange as any} // Adjusting the onChange prop
                        />
                    )}
                </View>
                <View style={styles.itemContainer}>
                    <Ionicons name="time" size={30} color={Colors.grey} />
                    <TimePicker onTimeChange={handleTimeChange} />
                </View>
                <View style={styles.itemContainer}>
                    <Ionicons name="time" size={30} color={Colors.grey} />
                    <TimePicker onTimeChange={handleTimeChange} />
                </View>
                <Separator />
                <View style={styles.itemContainer}>
                    <Ionicons name="people" size={30} color={Colors.grey} />
                    <TextInput style={[defaultStyles.inputField]} placeholder="Number of Attendees" keyboardType="numeric" onChangeText={setAttendees} />
                </View>
                <Separator />
                <View style={styles.itemContainer}>
                    <Ionicons name="location" size={30} color={Colors.grey} />
                    <TextInput style={[defaultStyles.inputField]} placeholder="Venue" multiline onChangeText={setVenue} />
                </View>
                <Separator />
                <View style={styles.itemContainer}>
                    <MaterialCommunityIcons name="card-text" size={30} color={Colors.grey} />
                    <TextInput style={[defaultStyles.inputField]} placeholder="Description" multiline onChangeText={setDescription} />
                </View>
                <Separator />
                <View style={[styles.itemContainer,]}>
                    <Entypo name="emoji-happy" size={30} color={Colors.grey} />
                    <TextInput style={[defaultStyles.inputField]} placeholder="Objectives Achieved" multiline onChangeText={setObjectivesAchieved} />
                </View>
                <Separator />
                <TouchableOpacity style={[styles.itemContainer,]}>
                    <Ionicons name="attach" size={30} color={Colors.grey} />
                    <Text>Add Attachments</Text>
                </TouchableOpacity>
                <Separator />
                <View style={styles.itemContainer}>
                    <Ionicons name="image" size={30} color={Colors.grey} />
                    <ImageInputList imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove} />
                </View>
                <Separator />
                <View style={{
                    alignItems: 'flex-end',
                    padding: 16,
                }}>
                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                        <Text>Submit</Text>
                        <FontAwesome name="angle-double-right" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        gap: 10,
        paddingHorizontal: 16,
    },
    dateItem: {
        paddingVertical: 5,
        backgroundColor: 'white',
        borderRadius: 2,
        margin: 5,
    },
    submitButton: {
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        padding: 10,
    }
});

export default ScreenOne;
