import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import ProfileIcon from '../../components/StudentProfileIcon';
import Data from '../../constants/Data';
import { Stack } from 'expo-router';
import ExploreHeader from '../../components/ExploreHeader';
import Separator from '../../components/Separator';

interface DataItem {
    id: string;
    name: string;
    presentee: number;
    rollNumber: string;
}

const renderItem = ({ item }: { item: DataItem }) => {
    return (
        <View style={styles.itemContainer}>
            <ProfileIcon fullName={item.name} />
            <View style={styles.detailsContainer}>
                <Text style={styles.nameText}>{item.name}</Text>
                <View style={styles.infoContainer}>
                    <View style={styles.badgeContainer}>
                        <Text style={styles.badgeText}>{item.rollNumber}</Text>
                    </View>
                    <View style={styles.presentDaysContainer}>
                        <Text style={styles.presentDaysText}>{item.presentee}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Mark Present</Text>
            </TouchableOpacity>
        </View>
    );
};

const keyExtractor = (item: DataItem) => item.id;
const ItemSeparator = () => {
    return (
        <Separator />
    )
}
const App = () => {
    return (
        <>
            <Stack.Screen options={{
                header: () => <ExploreHeader />,
            }}
            />
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
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
        paddingTop: 120,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 16,
        marginRight: 16,
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        flexShrink: 1,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    badgeContainer: {
        backgroundColor: '#e2e2e2',
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 8,
    },
    badgeText: {
        fontSize: 10,
        color: 'black',
        flexShrink: 1,
    },
    presentDaysContainer: {
        backgroundColor: '#4CAF50',
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 40,
        marginLeft: 8,
    },
    presentDaysText: {
        fontSize: 10,
        color: 'white',
        flexShrink: 1,
    },
    button: {
        backgroundColor: '#2196F3',
        borderRadius: 50,
        padding: 12,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#CED0CE',
        marginVertical: 8,
    },
});

export default App;