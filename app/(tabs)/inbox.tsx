// ScreenOne.js
import React from 'react';
import { View, Text } from 'react-native';
import MyInputField from '../../components/MyInputField';
import { defaultStyles } from '../../constants/Styles';
import { Link } from 'expo-router';

const ScreenOne = () => {
  return (
    <View style={{ alignContent: 'center', flex: 1 }}>
      <MyInputField label="Name" />
      <Link href={"/EventReports/ScreenTwo"}>Sandip</Link>
    </View>

  );
};

export default ScreenOne;
