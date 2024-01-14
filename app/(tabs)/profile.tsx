import { View, Text, StyleSheet, TouchableOpacity, Platform, StatusBar } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import Colors from '../../constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Profile = () => {
  return (
    <>
      <Stack.Screen options={{
        header: () => <View style={{ height: Platform.OS === 'android' ? StatusBar.currentHeight : 0, backgroundColor: Colors.primary }} />,
      }} />
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <MaterialCommunityIcons name="account-circle" size={70} color="black" />
          <View style={styles.detailsContainer}>
            <Text style={styles.nameText}>Sandip Pathe</Text>
            <View style={styles.infoContainer}>
              <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>sandip.pathe@vit.edu.in</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.btnOutline}>
            <Text style={styles.btnOutlineText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  btnOutline: {
    borderColor: Colors.grey,
    borderWidth: 1,
    height: 30,
    borderRadius: 13,
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
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    flexShrink: 1,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badgeContainer: {
    paddingVertical: 2,
  },
  badgeText: {
    fontSize: 10,
    color: 'black',
    flexShrink: 1,
  },
});

export default Profile