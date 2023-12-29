import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const inbox = () => {
  return (
    <View>
      <Link href={'/EventReports/ScreenOne'}>
        <Text>Sandip</Text>
      </Link>
    </View>
  )
}

export default inbox

const styles = StyleSheet.create({})