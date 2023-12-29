import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { defaultStyles } from '../../constants/Styles';
import { Link } from 'expo-router';

const ScreenOne = () => {
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showStartTimePicker, setShowStartTimePicker] = useState(false);
    const [showEndTimePicker, setShowEndTimePicker] = useState(false);

    const showDatepicker = () => {
        setShowDatePicker(true);
    };

    const showStartTimepicker = () => {
        setShowStartTimePicker(true);
    };

    const showEndTimepicker = () => {
        setShowEndTimePicker(true);
    };

    const handleDateChange = (event: Event, selectedDate?: Date) => {
        setShowDatePicker(false);
        if (selectedDate) {
            setDate(selectedDate);
        }
    };

    const handleTimeChange = (event: Event, selectedTime?: Date) => {
        setShowStartTimePicker(false);
        setShowEndTimePicker(false);
        if (selectedTime) {
            // Handle the selected time as needed
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.nameText}>Event / Program details</Text>
            <TextInput style={[defaultStyles.inputField, { marginBottom: 10 }]} placeholder="Name" />
            <View style={styles.itemContainer}>
                <Text>Date: {date.toLocaleDateString()}</Text>
                <TouchableOpacity onPress={showDatepicker} style={styles.button}>
                    <Text style={styles.buttonText}>Select Date</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.itemContainer}>
                <Text>Start Time: {date.toLocaleTimeString()}</Text>
                <TouchableOpacity onPress={showStartTimepicker} style={styles.button}>
                    <Text style={styles.buttonText}>Select Time</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.itemContainer}>
                <Text>End Time: {date.toLocaleTimeString()}</Text>
                <TouchableOpacity onPress={showEndTimepicker} style={styles.button}>
                    <Text style={styles.buttonText}>Select Time</Text>
                </TouchableOpacity>
            </View>
            <TextInput style={[defaultStyles.inputField, { marginBottom: 10 }]} placeholder="Description" multiline numberOfLines={4} />
            <TextInput style={[defaultStyles.inputField, { marginBottom: 10 }]} placeholder="Number of Attendees" keyboardType="numeric" />
            <TextInput style={[defaultStyles.inputField, { marginBottom: 10 }]} placeholder="Venue" />
            <Link href={'/EventReports/ScreenTwo'}>

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
