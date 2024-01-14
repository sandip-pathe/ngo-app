import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface AttendanceToggleButtonProps {
    handlePress: () => void;
    buttonText: string;
}
const AttendanceToggleButton: React.FC<AttendanceToggleButtonProps> = ({ handlePress, buttonText }) => {
    const [isPresent, setIsPresent] = useState(true);

    const toggleAttendance = () => {
        setIsPresent((prevState) => !prevState);
    };

    const buttonStyle = {
        backgroundColor: isPresent ? 'blue' : 'white',
    };

    return (
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={toggleAttendance} onLongPress={handlePress}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
    buttonText: {
        color: 'black',
    },
});

export default AttendanceToggleButton;
