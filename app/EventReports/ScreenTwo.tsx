import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

interface ScreenTwoProps {
    navigation: any; // Adjust the type based on your navigation library
}

const ScreenTwo: React.FC<ScreenTwoProps> = ({ navigation }) => {
    return (
        <View>
            <Text>Screen Two</Text>
            <TextInput placeholder="Attach Images" multiline />
            <TextInput placeholder="Other Attachments" multiline />
            <TextInput placeholder="Financial Report" multiline />
            <TextInput placeholder="Objectives Achieved" multiline />
            <Button title="Submit" />
        </View>
    );
};

export default ScreenTwo;
