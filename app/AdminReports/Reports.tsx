import { View, Text, StyleSheet, SafeAreaView, Platform, TouchableOpacity, StatusBar, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../constants/Colors'
import { defaultStyles } from '../../constants/Styles'


const ReportHeader = () => {
    return (
        <>
            <SafeAreaView style={styles.safeView} >
                <View style={styles.container}>
                    <View style={styles.searchBtn}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', gap: 16, alignContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity>
                                    <Ionicons name='arrow-back-circle' size={30} color={Colors.primary} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 18, fontWeight: '500', }}>2022-01-10</Text>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 16 }}>
                                <TouchableOpacity>
                                    <Ionicons name='search' size={30} color={Colors.primary} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Ionicons name='filter' size={30} color={Colors.primary} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    container: {
        height: 50,
        backgroundColor: Colors.light,
    },
    actionRow: {
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
    },
    filterBtn: {
        padding: 5,
    },
    searchBtn: {
        height: 40,
        backgroundColor: Colors.light,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        paddingHorizontal: 16,
        borderColor: '#c2c2c2',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flex: 1,
        elevation: 2,
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOpacity: 0.12,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
})

export default ReportHeader