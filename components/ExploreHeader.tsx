import { View, Text, StyleSheet, SafeAreaView, Platform, TouchableOpacity, StatusBar, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'

const categories = [
    {
        name: 'Tiny homes',
        icon: 'home',
    },
    {
        name: 'Cabins',
        icon: 'house-siding',
    },
    {
        name: 'Trending',
        icon: 'local-fire-department',
    },
    {
        name: 'Play',
        icon: 'videogame-asset',
    },
    {
        name: 'City',
        icon: 'apartment',
    },
    {
        name: 'Beachfront',
        icon: 'beach-access',
    },
    {
        name: 'Countryside',
        icon: 'nature-people',
    },
];

const ExploreHeader = () => {
    return (
        <>
            <SafeAreaView style={styles.safeView} >
                <View style={styles.container}>
                    <View style={styles.actionRow}>
                        <Link href={'/(tabs)/inbox'} asChild>
                            <TouchableOpacity style={styles.searchBtn}>
                                <Ionicons name='search' size={24} />
                                <View>
                                    <Text style={{ fontSize: 20, color: Colors.grey }}>Search</Text>
                                </View>
                            </TouchableOpacity>
                        </Link>
                        <TouchableOpacity style={styles.filterBtn}>
                            <Ionicons name='options-outline' size={24} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.actionRow, { gap: 50 }]}>
                        <TouchableOpacity style={[styles.btnOutline, { backgroundColor: Colors.primary }]}>
                            <Text style={[styles.btnOutlineText]}>All Present</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnOutline}>
                            <Text style={styles.btnOutlineText}>All Absent</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 110,
        backgroundColor: Colors.light,
        paddingTop: 16,
    },
    safeView: {
        flex: 1,
        backgroundColor: Colors.dark,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    actionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingBottom: 16,
        gap: 10,
    },
    filterBtn: {
        padding: 5,
        borderWidth: 1,
        borderColor: Colors.grey,
        borderRadius: 24,
    },
    searchBtn: {
        height: 40,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        borderColor: '#c2c2c2',
        borderWidth: StyleSheet.hairlineWidth,
        flex: 1,
        paddingLeft: 10,
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOpacity: 0.12,
        shadowOffset: {
            width: 1,
            height: 1,
        },
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

export default ExploreHeader