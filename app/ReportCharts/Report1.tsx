import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory-native';

interface BarData {
    month: string;
    attendance: number;
}

const AttendanceChart: React.FC = () => {
    const [data, setData] = useState<BarData[]>([
        { month: 'Jan', attendance: 80 },
        { month: 'Feb', attendance: 85 },
        { month: 'Mar', attendance: 90 },
        { month: 'Apr', attendance: 75 },
        { month: 'May', attendance: 95 },
        { month: 'Jun', attendance: 88 },
    ]);

    const [selectedBar, setSelectedBar] = useState<BarData | null>(null);

    const handleBarPress = (bar: BarData) => {
        setSelectedBar(bar);
    };

    const handleUpdate = () => {
        // Create a copy of the data array and sort it based on attendance in ascending order
        const sortedData = [...data].sort((a, b) => a.attendance - b.attendance);
        setData(sortedData);
        setSelectedBar(null); // Reset selectedBar after updating data
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Monthly Attendance Chart</Text>
            <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
                <Text>Update and Sort</Text>
            </TouchableOpacity>
            <VictoryChart domainPadding={{ x: 20 }} padding={{ top: 20, bottom: 40, left: 50, right: 20 }}>
                <VictoryBar
                    data={data}
                    x="month"
                    y="attendance"
                    style={{ data: { fill: '#007aff' } }}
                    events={[
                        {
                            target: 'data',
                            eventHandlers: {
                                onPressIn: () => {
                                    return [
                                        {
                                            target: 'data',
                                            mutation: (props: any) => {
                                                handleBarPress(props.datum as BarData);
                                            },
                                        },
                                    ];
                                },
                            },
                        },
                    ]}
                />
                <VictoryAxis dependentAxis />
                <VictoryAxis tickFormat={(t: any) => t} />
            </VictoryChart>
            {selectedBar && (
                <TouchableOpacity style={styles.card} onPress={() => setSelectedBar(null)}>
                    <Text style={styles.cardText}>
                        {`Month: ${selectedBar.month}\nAttendance: ${selectedBar.attendance}`}
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    updateButton: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#007aff',
        borderRadius: 5,
    },
    card: {
        position: 'absolute',
        top: 20,
        left: 20,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 10,
        zIndex: 1,
    },
    cardText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AttendanceChart;
