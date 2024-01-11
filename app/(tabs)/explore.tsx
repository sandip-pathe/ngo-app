import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const explore = () => {
  return (
    <View style={{ alignItems: 'center', alignContent: 'center' }}>
      <Link href={'/Attendance/Attendance'}>Attendance</Link>
    </View>
  )
}

export default explore

const styles = StyleSheet.create({})