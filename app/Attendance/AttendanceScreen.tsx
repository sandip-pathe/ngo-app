import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Platform, StatusBar } from 'react-native';
import syntheticData from '../../constants/Data';
import Colors from '../../constants/Colors';
import ProfileIcon from '../../components/StudentProfileIcon';
import { Stack } from 'expo-router';
import RegularHeader from './RegularHeader'

interface DataItem {
    id: string;
    name: string;
    presentee: number;
    rollNumber: string;
}

const RenderItem = ({ item, isPresent, toggleAttendance }: { item: DataItem; isPresent: boolean; toggleAttendance: () => void }) => (
    <View style={styles.itemContainer}>
        <ProfileIcon fullName={item.name} />
        <View style={styles.detailsContainer}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.nameText}>{item.name}</Text>
            <View style={styles.infoContainer}>
                <View>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.badgeText}>{item.rollNumber}</Text>
                </View>
                <View style={styles.presentDaysContainer}>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.presentDaysText}>💙 {item.presentee}</Text>
                </View>
            </View>
        </View>
        {isPresent ? (
            <TouchableOpacity style={styles.button} onPress={toggleAttendance}>
                <Text style={styles.buttonText}>Present</Text>
            </TouchableOpacity>
        ) : (
            <TouchableOpacity style={styles.buttonOutline} onPress={toggleAttendance}>
                <Text style={styles.buttonOutlineText}>Absent</Text>
            </TouchableOpacity>
        )}
    </View>
);


const AttendanceScreen = () => {
    const [students, setStudents] = useState<DataItem[]>(syntheticData);
    const toggleAttendance = (index: number) => {
        setStudents((prevStudents) => {
            const updatedStudents = [...prevStudents];
            updatedStudents[index].isPresent = !updatedStudents[index].isPresent;
            return updatedStudents;
        });
    };

    return (
        <>
            <Stack.Screen options={{
                header: () => <RegularHeader />,
            }} />
            <View style={{ height: Platform.OS === 'android' ? StatusBar.currentHeight : 0, backgroundColor: Colors.primary }} />
            <ScrollView style={styles.container}>

                <View style={{ padding: 35, backgroundColor: '#fff' }}>

                </View>
                {students.map((item, index) => (
                    <RenderItem
                        key={item.id}
                        item={item}
                        isPresent={item.isPresent || false}
                        toggleAttendance={() => toggleAttendance(index)}
                    />
                ))}
            </ScrollView>
        </>
    );
};

export default AttendanceScreen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        backgroundColor: '#fff',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 16,
        marginRight: 12,
    },
    nameText: {
        fontSize: 16,
        marginBottom: 2,
        flexShrink: 1,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    badgeText: {
        fontSize: 12,
        color: Colors.grey,
        flexShrink: 1,
    },
    presentDaysContainer: {
        marginLeft: 8,
    },
    presentDaysText: {
        fontSize: 12,
        color: Colors.grey,
        flexShrink: 1,
    },
    button: {
        backgroundColor: '#2196F3',
        borderRadius: 10,
        marginLeft: 4,
        width: 120,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
    },
    buttonOutline: {
        borderWidth: 1,
        borderColor: '#2196F3',
        borderRadius: 10,
        marginLeft: 4,
        width: 120,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonOutlineText: {
        color: '#2196F3',
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#CED0CE',
        marginVertical: 8,
    },
});
