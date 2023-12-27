// StudentCard.tsx

import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';

interface StudentCardProps {
    initials: string;
    fullName: string;
    rollNumber: string;
    admissionDate: string;
    dateOfBirth: string;
    gender: string;
    hobbies: string;
    onClose: () => void;
}

const StudentCard: React.FC<StudentCardProps> = ({
    initials,
    fullName,
    rollNumber,
    admissionDate,
    dateOfBirth,
    gender,
    hobbies,
    onClose,
}) => {
    return (
        <Modal transparent={true} animationType="slide" visible={true}>
            <View style={styles.modalContainer}>
                <View style={styles.cardContainer}>
                    <Text>Profile Pic: {initials}</Text>
                    <Text>Full Name: {fullName}</Text>
                    <Text>Roll Number/ID Number: {rollNumber}</Text>
                    <Text>Admission Date: {admissionDate}</Text>
                    <Text>Date of Birth: {dateOfBirth}</Text>
                    <Text>Gender: {gender}</Text>
                    <Text>Hobbies: {hobbies}</Text>
                    <TouchableOpacity onPress={onClose}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    cardContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
});

export default StudentCard;
