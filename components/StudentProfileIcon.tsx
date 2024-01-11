import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProfileIconProps {
    fullName: string;
}

const hashCode = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
    }
    return hash;
};

const intToRGB = (i: number) => {
    const c = (i & 0x00ffffff).toString(16).toUpperCase();
    return '#' + '00000'.substring(0, 6 - c.length) + c;
};

const getInitials = (fullName: string) => {
    const words = fullName.split(' ');
    return words.map((word) => word[0].toUpperCase()).join('');
};

const ProfileIcon: React.FC<ProfileIconProps> = ({ fullName }) => {
    const initials = getInitials(fullName);
    const backgroundColor = intToRGB(hashCode(fullName));

    return (
        <View style={[styles.profileIcon, { backgroundColor }]}>
            <Text style={[styles.initials,]}>{initials}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    profileIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    initials: {
        color: 'white',
        fontSize: 20,
        fontWeight: '900',
    },
});

export default ProfileIcon;
