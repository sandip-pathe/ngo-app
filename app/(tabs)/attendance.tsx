import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import ExploreHeader from '../../components/ExploreHeader'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '../../constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'


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
  {
    id: '3',
    date: '03-01-24',
    day: 'Friday',
    present: 95,
    total: 100,
  },
  {
    id: '4',
    date: '04-01-24',
    day: 'Saturday',
    present: 92,
    total: 100,
  },
  {
    id: '5',
    date: '05-01-24',
    day: 'Sunday',
    present: 88,
    total: 100,
  },
  {
    id: '6',
    date: '06-01-24',
    day: 'Monday',
    present: 91,
    total: 100,
  },
  {
    id: '7',
    date: '07-01-24',
    day: 'Tuesday',
    present: 93,
    total: 100,
  },
  {
    id: '8',
    date: '08-01-24',
    day: 'Wednesday',
    present: 94,
    total: 100,
  },
  {
    id: '9',
    date: '09-01-24',
    day: 'Thursday',
    present: 96,
    total: 100,
  },
  {
    id: '10',
    date: '10-01-24',
    day: 'Friday',
    present: 97,
    total: 100,
  },
];


const renderItem = ({ item }: { item: DataItem }) => (
  <View style={styles.itemContainer}>
    <Text style={{ fontSize: 16 }}>{item.date}, {item.day}</Text>
    <Text style={{ fontSize: 16 }}>{item.present} / {item.total}</Text>
  </View>
);

const keyExtractor = (item: DataItem) => item.id;
const Attendance = ({ navigation }: { navigation: any }) => {

  return (
    <>
      <Stack.Screen options={{
        header: () => <ExploreHeader />,
      }} />
      <View style={{ paddingTop: 90, backgroundColor: Colors.light }} />
      <View style={styles.takeAttendanceContainer}>
        <View style={[styles.reportsContainer, {
          backgroundColor: Colors.primary,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
        }]}>
          <TouchableOpacity style={{ backgroundColor: Colors.primary, width: '100%' }} onPress={() => { }}>
            <MaterialCommunityIcons name="plus" size={50} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.reportsContainer}>
          <View style={styles.weeklyContainer}>
            <Text style={styles.weeklyText}>Weekly Reports</Text>
          </View>
          <View style={styles.weeklyContainer}>
            <Text style={styles.weeklyText}>Monthly Reports</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.flatListContainer}
        />
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
    justifyContent: 'space-between',
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
});
