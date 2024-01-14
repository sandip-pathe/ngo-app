import { View, Text, StyleSheet, SafeAreaView, Platform, TouchableOpacity, StatusBar, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../constants/Colors'


const RegularHeader = () => {
    return (
        <>
            <SafeAreaView style={styles.safeView} >
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={styles.button} >
                            <Text style={styles.buttonText}>All Present</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <TouchableOpacity style={styles.filterBtn}>
                                <Ionicons name="ios-search" size={34} color={'#2196F3'} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.filterBtn}>
                                <Ionicons name='options-outline' size={34} color={'#2196F3'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light,
        paddingHorizontal: 16,
        paddingVertical: 7,
        height: 50,
    },
    safeView: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: Colors.primary,
    },
    button: {
        backgroundColor: '#2196F3',
        borderRadius: 10,
        marginLeft: 4,
        width: 120,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
    },
    filterBtn: {
        height: 34,
        width: 34,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
})

export default RegularHeader