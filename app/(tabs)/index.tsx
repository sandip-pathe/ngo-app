import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import ExploreHeader from '../../components/ExploreHeader'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '../../constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'


const Attendance = () => {
    const router = useRouter();

    return (
        <>
            <Stack.Screen options={{
                header: () => <ExploreHeader />,
            }} />
            <View style={{ paddingTop: 90, backgroundColor: Colors.light }} />
            <View style={styles.takeAttendanceContainer}>
                <View style={[styles.reportsContainer]}>
                    <TouchableOpacity style={styles.touchableBtn}>
                        <MaterialCommunityIcons name="plus" size={50} color="white" />
                        <Text style={{ color: 'white', fontSize: 16 }}>Take Attendance</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.reportsContainer]}>
                    <TouchableOpacity style={styles.touchableBtn} onPress={() => { }}>
                        <MaterialCommunityIcons name="plus" size={50} color="white" />
                        <Text style={{ color: 'white', fontSize: 16 }}>Report Event</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </>
    )
}

export default Attendance

const styles = StyleSheet.create({
    flatListContainer: {
        backgroundColor: '#fff',
        paddingTop: 10,
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
        backgroundColor: Colors.light,
        borderRadius: 7,
        borderWidth: StyleSheet.hairlineWidth,
        marginVertical: 10,
        padding: 10,
        gap: 10,
    },
    takeAttendanceContainer: {
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        height: 110,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        paddingBottom: 10,
    },
    reportsContainer: {
        flexDirection: 'column',
        width: "50%",
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    weeklyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: "45%",
        borderColor: Colors.grey,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
        marginRight: 10,
    },
    weeklyText: {
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: "bold",
    },
    touchableBtn: {
        backgroundColor: Colors.primary,
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
