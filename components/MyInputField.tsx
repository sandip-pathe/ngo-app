import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

interface MyInputFieldProps {
    label: string;
}

const MyInputField: React.FC<MyInputFieldProps> = ({ label }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                style={[
                    styles.inputField,
                    isFocused && styles.inputFieldFocused,
                ]}
                placeholder={label}
                placeholderTextColor={Colors.grey}
                value={text}
                onChangeText={(value) => setText(value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    inputField: {
        borderBottomWidth: 1,
        borderColor: Colors.grey,
        fontSize: 16,
        backgroundColor: 'transparent',
    },
    inputFieldFocused: {
        borderColor: Colors.primary,
        borderBottomWidth: 2,
    },
});

export default MyInputField;