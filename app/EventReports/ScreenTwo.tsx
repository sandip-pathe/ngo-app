import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../EventReports/NavigationTypes'; // Update the path

import firestore from '@react-native-firebase/firestore';
import Separator from '../../components/Separator';
import ImageInputList from '../../components/ImageInputList';
import { Entypo, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { defaultStyles } from '../../constants/Styles';
import Colors from '../../constants/Colors';

type ScreenTwoRouteProp = RouteProp<RootStackParamList, 'ScreenTwo'>;
type ScreenTwoNavigationProp = StackNavigationProp<RootStackParamList, 'ScreenTwo'>;

type Props = {
    route: ScreenTwoRouteProp;
    navigation: ScreenTwoNavigationProp;
};

const ScreenTwo: React.FC<Props> = ({ route }) => {
    const [objectivesAchieved, setObjectivesAchieved] = useState('');
    const [imageUris, setImageUris] = useState<string[]>([]);

    const eventsRef = firestore().collection('events');

    const handleAdd = (uri: string) => {
        setImageUris([...imageUris, uri]);
    };

    const handleRemove = (uri: string) => {
        setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
    };

    const handleSubmit = async () => {
        try {
            // Combine data from ScreenOne and ScreenTwo
            const eventDataFromScreenOne = route.params?.eventDataFromScreenOne;

            // Add data from ScreenTwo
            const eventData = {
                ...eventDataFromScreenOne,
                objectivesAchieved,
                // Add other fields as needed
            };

            // Push data to Firestore
            await eventsRef.add(eventData);

            console.log('Data from ScreenTwo added to Firestore successfully!');
        } catch (error) {
            console.error('Error writing document to Firestore: ', error);
        }
    };


    return (
        <ScrollView style={styles.container}>
            <View style={{ gap: 25 }}>
                <View style={[styles.itemContainer, { paddingTop: 16 }]}>
                    <Entypo name="emoji-happy" size={30} color={Colors.grey} />
                    <TextInput
                        style={[defaultStyles.inputField]}
                        placeholder="Objectives Achieved"
                        multiline
                        onChangeText={setObjectivesAchieved}
                    />
                </View>
                <Separator />
                <View style={styles.itemContainer}>
                    <Ionicons name="image" size={30} color={Colors.grey} />
                    <ImageInputList imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove} />
                </View>
                <Separator />
                <View style={[styles.itemContainer, { paddingTop: 16 }]}>
                    <Ionicons name="attach" size={30} color={Colors.grey} />
                    <Text>Add Attachments</Text>
                </View>
                <Separator />
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Link href={"/EventReports/ScreenTwo"}>Submit</Link>
                    <FontAwesome name="angle-double-right" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        gap: 10,
        paddingHorizontal: 16,
    },
    dateItem: {
        paddingVertical: 5,
        backgroundColor: 'white',
        borderRadius: 2,
        margin: 5,
    },
    submitButton: {
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        padding: 10,

    }
});


export default ScreenTwo;
