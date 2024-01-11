// ScreenOne.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const ScreenOne = () => {
  return (
    <View style={styles.container}>
      <Link href={"/EventReports/ScreenOne"}>ScreenOne</Link>
      <Link href={"/EventReports/ScreenTwo"}>ScreenTwo</Link>
      <Link href={"/EventReports/DummyForm"}>Form</Link>
    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: 40,
    justifyContent: 'center',
  }
})

export default ScreenOne;
