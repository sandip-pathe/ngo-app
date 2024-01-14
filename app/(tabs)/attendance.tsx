import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import ExploreHeader from '../../components/ExploreHeader'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '../../constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { defaultStyles } from '../../constants/Styles'
import CalendarScreen from '../../components/CalendarScreen'


const Attendance = () => {

  return (
    <>
      <Stack.Screen options={{
        header: () => <ExploreHeader />,
      }} />
      <ScrollView style={{ flex: 1 }}>
        <View style={{ paddingTop: 100, backgroundColor: Colors.light }} />
        <View style={[defaultStyles.container, { paddingHorizontal: 16, paddingBottom: 30 }]}>
          <Text style={[defaultStyles.headingText]}>Daily Attendance</Text>
        </View>
        <View style={styles.upperSectionContainer}>
          <View style={styles.reportsContainer}>
            <TouchableOpacity>
              <View style={styles.takeAttendanceContainer}>
                <View style={defaultStyles.iconContainer}>
                  <MaterialCommunityIcons name="sticker-check-outline" size={30} color={Colors.grey} />
                </View>
                <Text style={{ fontSize: 12, fontWeight: '500' }}>Take Attendance</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.reportsContainer}>
            <View style={styles.weeklyContainer}>
              <TouchableOpacity>
                <View style={styles.innerWeeklyContainer}>
                  <View style={defaultStyles.iconContainer}>
                    <Text style={{ fontWeight: '900', fontSize: 26, color: Colors.grey }}>W</Text>
                  </View>
                  <Text style={styles.weeklyText}>Weekly Reports</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.weeklyContainer}>
              <TouchableOpacity>
                <View style={styles.innerWeeklyContainer}>
                  <View style={defaultStyles.iconContainer}>
                    <Text style={{ fontWeight: '900', fontSize: 26, color: Colors.grey }}>M</Text>
                  </View>
                  <Text style={styles.weeklyText}>Monthly Reports</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: Colors.light, paddingHorizontal: 16, paddingTop: 50 }}>
          <CalendarScreen />
        </View>
      </ScrollView >

    </>
  )
}

export default Attendance

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 16,
    backgroundColor: Colors.light,
    borderRadius: 7,
    borderWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
    padding: 10,
    gap: 10,
  },
  upperSectionContainer: {
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    height: 180,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reportsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: "47.5%",
  },
  takeAttendanceContainer: {
    width: "100%",
    backgroundColor: "#AEDEFC",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: "100%",
    gap: 5
  },
  weeklyContainer: {
    height: "45%",
    backgroundColor: "#AEDEFC",
    borderRadius: 10,
  },
  innerWeeklyContainer: {
    flexDirection: 'row',
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
    gap: 5,
  },
  weeklyText: {
    fontSize: 12,
    fontWeight: "bold",
    flexShrink: 1,
  },
});
