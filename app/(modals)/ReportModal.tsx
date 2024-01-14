import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface ReportModalProps {
    visible: boolean;
    onClose: () => void;
    date: string;
}

const ReportModal: React.FC<ReportModalProps> = ({ visible, onClose, date }) => {
    return (
        <Modal transparent visible={visible} animationType="slide">
            <View style={styles.container}>
                <View style={styles.modal}>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <AntDesign name="close" size={24} color="black" />
                    </TouchableOpacity>
                    <View style={styles.content}>
                        <Text>{`Report for ${date}`}</Text>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ReportModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modal: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '80%',
        maxHeight: '80%',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    content: {
        marginTop: 20,
    },
});
