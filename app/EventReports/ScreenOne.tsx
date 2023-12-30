import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { defaultStyles } from '../../constants/Styles';
import { Link } from 'expo-router';
// import firebase from 'firebase'; // Import Firebase

const ScreenOne = () => {
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showStartTimePicker, setShowStartTimePicker] = useState(false);
    const [showEndTimePicker, setShowEndTimePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const [eventName, setEventName] = useState('');
    const [description, setDescription] = useState('');
    const [attendees, setAttendees] = useState('');
    const [venue, setVenue] = useState('');

    const showDatepicker = () => {
        setShowDatePicker(true);
    };

    const showStartTimepicker = () => {
        setShowStartTimePicker(true);
    };

    const showEndTimepicker = () => {
        setShowEndTimePicker(true);
    };

    const handleDateChange = (event: any, selectedDate: React.SetStateAction<Date>) => {
        setShowDatePicker(false);
        if (selectedDate) {
            setDate(selectedDate);
            // Set the selected date to a state variable
        }
    };

    const handleTimeChange = (event: any, selectedTime: any) => {
        setShowStartTimePicker(false);
        setShowEndTimePicker(false);
        if (selectedTime) {
            setSelectedTime(selectedTime);
        }
    };

    const handleNextButtonClick = () => {
        // Log the data to console
        console.log('Event Name:', eventName);
        console.log('Date:', date.toLocaleDateString());
        console.log('Start Time:', date.toLocaleTimeString());
        console.log('End Time:', date.toLocaleTimeString());
        console.log('Description:', description);
        console.log('Number of Attendees:', attendees);
        console.log('Venue:', venue);

        // Push data to Firebase
        const eventData = {
            eventName,
            date: date.toLocaleDateString(),
            startTime: date.toLocaleTimeString(),
            endTime: date.toLocaleTimeString(),
            description,
            attendees,
            venue,
        };

        // Replace with your Firebase configuration
        const firebaseConfig = {
            apiKey: 'your-api-key',
            authDomain: 'your-auth-domain',
            projectId: 'your-project-id',
            storageBucket: 'your-storage-bucket',
            messagingSenderId: 'your-messaging-sender-id',
            appId: 'your-app-id',
        };

        // if (!firebase.apps.length) {
        //     firebase.initializeApp(firebaseConfig);
        // }

        // const db = firebase.firestore();
        // db.collection('events').add(eventData)
        //     .then(() => {
        //         console.log('Data successfully added to Firebase');
        //     })
        //     .catch(error => {
        //         console.error('Error adding data to Firebase:', error);
        //     });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.nameText}>Event / Program details</Text>
            <TextInput style={[defaultStyles.inputField, { marginBottom: 10 }]} placeholder="Name" onChangeText={setEventName} />
            <View style={styles.itemContainer}>
                <Text>Date: {date.toLocaleDateString()}</Text>
                <TouchableOpacity onPress={showDatepicker} style={styles.button}>
                    <Text style={styles.buttonText}>Select Date</Text>
                </TouchableOpacity>
                {showDatePicker && (
                    <DateTimePicker
                        value={date}
                        mode="date"
                        is24Hour={true}
                        display="default"
                    // onChange={handleDateChange}
                    />
                )}
            </View>
            <View style={styles.itemContainer}>
                <Text>Start Time: {date.toLocaleTimeString()}</Text>
                <TouchableOpacity onPress={showStartTimepicker} style={styles.button}>
                    <Text style={styles.buttonText}>Select Time</Text>
                </TouchableOpacity>
                {showStartTimePicker && (
                    <DateTimePicker
                        value={date}
                        mode="time"
                        is24Hour={true}
                        display="default"
                        onChange={handleTimeChange}
                    />
                )}
            </View>
            <View style={styles.itemContainer}>
                <Text>End Time: {date.toLocaleTimeString()}</Text>
                <TouchableOpacity onPress={showEndTimepicker} style={styles.button}>
                    <Text style={styles.buttonText}>Select Time</Text>
                </TouchableOpacity>
                {showEndTimePicker && (
                    <DateTimePicker
                        value={date}
                        mode="time"
                        is24Hour={true}
                        display="default"
                        onChange={handleTimeChange}
                    />
                )}
            </View>
            <TextInput style={[defaultStyles.inputField, { marginBottom: 10 }]} placeholder="Description" multiline numberOfLines={4} onChangeText={setDescription} />
            <TextInput style={[defaultStyles.inputField, { marginBottom: 10 }]} placeholder="Number of Attendees" keyboardType="numeric" onChangeText={setAttendees} />
            <TextInput style={[defaultStyles.inputField, { marginBottom: 10 }]} placeholder="Venue" onChangeText={setVenue} />
            <Link style={{ padding: 10 }} href={'/EventReports/ScreenTwo'}>
                Sandip
            </Link>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        flexShrink: 1,
    },
    button: {
        backgroundColor: '#2196F3',
        borderRadius: 8,
        padding: 12,
        marginLeft: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ScreenOne;
