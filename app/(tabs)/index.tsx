import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import { Header } from '@react-navigation/stack'
import ExploreHeader from '../../components/ExploreHeader'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '../../constants/Colors'
import Separator from '../../components/Separator'
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'


interface DataItem {
    id: string;
    date: string;
    day: string;
    present: number;
    total: number;
}

export const Data = [
    {
        id: '1',
        date: '01-01-24',
        day: 'Wednesday',
        present: 90,
        total: 100,
    },
    {
        id: '2',
        date: '02-01-24',
        day: 'Thursday',
        present: 85,
        total: 100,
    },
    // Add more data as needed
];

const renderItem = ({ item }: { item: DataItem }) => (
    <View style={styles.itemContainer}>
        <Text style={styles.textContainer}>{item.date}, {item.day}</Text>
        <Text style={styles.textContainer}>{item.present} / {item.total}</Text>
        <View style={styles.buttonContainer}>
            <Text style={{ marginVertical: 10 }}>View Report</Text>
            <FontAwesome name="angle-right" size={24} color="black" />
        </View>
    </View>
);

const keyExtractor = (item: DataItem) => item.id;
const ItemSeparator = () => {
    return (
        <Separator />
    )
}
const Attendance = () => {

    return (
        <>
            <Stack.Screen options={{
                header: () => <ExploreHeader />,
            }} />
            <View style={{ paddingTop: 70 }} />
            <View style={styles.takeAttendanceContainer}>
                <View style={[styles.reportsContainer, { alignContent: 'center', alignItems: 'center', justifyContent: 'center' }]}>
                    <MaterialCommunityIcons name="calendar-month" size={50} color="black" />
                </View>
                <View style={styles.reportsContainer}>
                    <View style={styles.weeklyContainer}>
                        <Text>Weekly Reports</Text>
                    </View>
                    <View style={styles.weeklyContainer}>
                        <Text>Monthly Reports</Text>
                    </View>
                </View>
            </View>

            <View style={{ flex: 1 }}>
                <FlatList
                    data={Data}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    contentContainerStyle={styles.flatListContainer}
                    ItemSeparatorComponent={ItemSeparator}
                />
            </View>

        </>
    )
}

export default Attendance

const styles = StyleSheet.create({
    flatListContainer: {
        backgroundColor: '#fff',
    },
    btnOutline: {
        flex: 1,
        backgroundColor: '#e2e2e2',
        borderColor: Colors.grey,
        height: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    btnOutlineText: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'mon-sb',
    },
    itemContainer: {
        marginHorizontal: 16,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        marginVertical: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        gap: 10,
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    textContainer: {
        margin: 10,
        fontSize: 16,
    },
    takeAttendanceContainer: {
        marginHorizontal: 16,
        backgroundColor: '#fff',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    reportsContainer: {
        flexDirection: 'column',
        width: "50%",
        justifyContent: 'space-between',
        paddingHorizontal: 5,
    },
    weeklyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: "50%",
        borderColor: Colors.grey,
        borderWidth: StyleSheet.hairlineWidth,
    },
});
