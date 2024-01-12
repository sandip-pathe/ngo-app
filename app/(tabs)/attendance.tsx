import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import { Header } from '@react-navigation/stack'
import ExploreHeader from '../../components/ExploreHeader'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '../../constants/Colors'
import Separator from '../../components/Separator'


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
  <View style={{
    padding: 16, backgroundColor: '#fff', borderRadius: 10, marginVertical: 10
  }}>
    <Text>Date: {item.date}, {item.day}</Text>
    <Text>Attendance: {item.present} / {item.total}</Text>
    <Button title="Download Report" onPress={() => {/* Download report logic */ }} />
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
      <View style={{ flex: 1 }}>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.container}
          ItemSeparatorComponent={ItemSeparator}
        />
      </View>

    </>
  )
}

export default Attendance

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    paddingTop: 120,
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
})