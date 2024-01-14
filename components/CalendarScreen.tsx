import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import ReportModal from '../app/(modals)/ReportModal';

const CalendarScreen: React.FC = () => {
    const navigation = useNavigation();
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const handleDayPress = (day: { dateString: string }) => {
        setSelectedDate(day.dateString);
        setModalVisible(true);
    };

    const closeReportModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Calendar onDayPress={handleDayPress} markedDates={{ [selectedDate]: { selected: true } }} />
            <ReportModal visible={modalVisible} onClose={closeReportModal} date={selectedDate} />
        </View>
    );
};

export default CalendarScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});
