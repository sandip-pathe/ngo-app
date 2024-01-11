import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import Separator from '../../components/Separator';
import ImageInputList from '../../components/ImageInputList';
import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router'; // Use useRouter instead of useRoute
import { defaultStyles } from '../../constants/Styles';
import Colors from '../../constants/Colors';
import { RootStackParamList } from './NavigationTypes';

interface ScreenTwoProps {
    route: {
        params: {
            name: string;
        };
    };
}

const ScreenTwo: React.FC<ScreenTwoProps> = ({ route }) => {
    const router = useRouter();
    const { eventDataFromScreenOne } = (router as any).route.params as RootStackParamList['ScreenTwo'];

    const [objectivesAchieved, setObjectivesAchieved] = useState('');
    const [imageUris, setImageUris] = useState<string[]>([]);

    // const eventsRef = firestore().collection('events');

    const handleAdd = (uri: string) => {
        setImageUris([...imageUris, uri]);
    };

    const handleRemove = (uri: string) => {
        setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
    };

    const handleSubmit = () => {
        // Combine data from ScreenOne and ScreenTwo
        const eventDataFromScreenTwo = {
            ...eventDataFromScreenOne,
            objectivesAchieved,
            // Add other fields as needed
        };

        // Now you can push the combined data to the database or perform any other actions
        console.log('Combined data:', eventDataFromScreenTwo);
    };


    return (
        <ScrollView style={styles.container}>
            <View style={{ gap: 25 }}>
                <Text>{route.params.name}</Text>
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
                    <Link href={"/EventReports/ScreenOne"}>Submit</Link>
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
