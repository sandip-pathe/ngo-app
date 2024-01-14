import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { defaultStyles } from '../../constants/Styles';

interface ReportModalProps {
    visible: boolean;
    onClose: () => void;
    date: string;
}

const ReportModal: React.FC<ReportModalProps> = ({ visible, onClose, date }) => {
    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.container}>
                <View style={styles.modal}>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <AntDesign name="close" size={30} color="black" />
                    </TouchableOpacity>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.content}>
                            <View style={[defaultStyles.container, { backgroundColor: "#A1EEBD" }]}>
                                <Text style={[defaultStyles.headingText]}>{`${date}`}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

export default ReportModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end', // aligns the modal to the bottom
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    modal: {
        backgroundColor: '#A1EEBD',
        borderRadius: 5,
        padding: 20,
        width: "100%", // fixed width
        height: "100%", // fixed height
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        paddingLeft: 16,
    },
    content: {
        marginTop: 20,
    },
});
