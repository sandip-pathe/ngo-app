import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';

const getCurrentHour = () => {
    const currentHour = new Date().getHours();
    return currentHour;
};

const TimePicker = ({ onTimeChange }: { onTimeChange: (time: string) => void }) => {
    const [selectedTime, setSelectedTime] = useState(getCurrentHour().toString());
    const [currentHourIndex, setCurrentHourIndex] = useState(0);

    useEffect(() => {
        onTimeChange(selectedTime);
    }, [selectedTime, onTimeChange]);

    const generateTimeOptions = () => {
        const startTime = 0; // Start from 9:00 AM
        const endTime = 23; // Up to 5:00 PM
        const timeOptions: string[] = [];

        for (let i = startTime; i <= endTime; i++) {
            const formattedTime = i < 12 ? `${i}:00 AM` : i === 12 ? `${i}:00 PM` : `${i - 12}:00 PM`;
            timeOptions.push(formattedTime);
        }

        return timeOptions;
    };

    const timeOptions = generateTimeOptions();

    const scrollViewRef = useRef<ScrollView>(null);

    useEffect(() => {
        // Find the index of the current hour
        const currentHour = getCurrentHour().toString();
        const currentHourIndex = timeOptions.findIndex(time => time === currentHour);

        // Set the default color for the current hour
        setCurrentHourIndex(currentHourIndex);

        // Scroll to the current hour once the component mounts
        if (scrollViewRef.current && currentHourIndex !== -1) {
            scrollViewRef.current.scrollTo({ x: currentHourIndex * 110, animated: true });
        }
    }, [timeOptions]);

    return (
        <ScrollView
            ref={scrollViewRef}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            {timeOptions.map((hour, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.timeOption,
                        {
                            backgroundColor:
                                selectedTime === hour ? 'lightblue' : index === currentHourIndex ? 'lightblue' : 'white',
                        },
                    ]}
                    onPress={() => setSelectedTime(hour)}
                >
                    <Text style={styles.timeText}>{hour}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    timeOption: {
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 2,
        borderWidth: StyleSheet.hairlineWidth,
        margin: 5,
    },
    timeText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
});

export default TimePicker;
