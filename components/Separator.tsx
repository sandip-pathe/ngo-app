import React from 'react';
import { View, StyleSheet } from 'react-native';

const Separator = () => {
    return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: '#eeeeee',
    },
});

export default Separator;
