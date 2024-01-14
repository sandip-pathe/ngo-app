import React, { useState, useEffect } from 'react';
import { Text, ScrollView, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import XLSX from 'xlsx'; // for exporting to Excel
import { Table, Row, Rows } from 'react-native-table-component'; // for rendering tables
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import studentData from '../../constants/ReportD';
import { Stack } from 'expo-router';
import ExploreHeader from '../../components/ExploreHeader';
import Colors from '../../constants/Colors';
import ReportsHeader from '../AdminReports/Reports';

interface ReportData {
  name: string;
  rollNumber: string;
  status: string;
}

const ReportScreen = () => {
  const navigation = useNavigation();
  const [reportData, setReportData] = useState<ReportData[]>([]);
  const [tableHead, setTableHead] = useState<string[]>(['Name', 'Roll Number', 'Status']);
  const [tableData, setTableData] = useState<string[][]>([]);

  // Dummy user and class IDs
  const userId = 'Dr. Sangeeta Joshi';
  const classId = 'ENG101';
  const location = 'Vidyalankar';
  const currentDate = '2022-01-10'; // Replace with the actual date


  useEffect(() => {
    // Set report data with syntheticData
    setReportData(studentData);

    // Convert report data into the format required by react-native-table-component
    const newData: string[][] = studentData.map(({ name, rollNumber, status }) => [name, rollNumber, status]);
    setTableData(newData);
  }, []);


  {/*
useEffect(() => {
        const fetchReportData = async () => {
            try {
                const snapshot = await firestore()
                    .collection('users')
                    .doc(userId)
                    .collection('classes')
                    .doc(classId)
                    .collection('students')
                    .get();

                const data: ReportData[] = snapshot.docs.map((doc) => {
                    const { name, rollNumber } = doc.data();
                    return {
                        name,
                        rollNumber,
                        // Fetch attendance status for the specified date
                        status: 'present', // Replace with the actual logic to fetch status for the specified date
                    };
                });

                setReportData(data);
            } catch (error) {
                console.error('Error fetching report data', error);
            }
        };

        fetchReportData();
    }, [userId, classId, currentDate]);
*/ }




  const exportToExcel = () => {
    // Export data to Excel
    const ws = XLSX.utils.aoa_to_sheet([tableHead, ...tableData]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'AttendanceReport');
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    const fileName = 'AttendanceReport.xlsx';
    const uri = `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${XLSX.write(wb, {
      bookType: 'xlsx',
      type: 'base64',
    })}`;
    // Implement logic to save or share the Excel file
    console.log('Excel file generated:', fileName, uri);
  };

  return (
    <>
      <Stack.Screen options={{
        header: () => <ReportsHeader />,
      }} />
      <ScrollView style={{ paddingHorizontal: 16, paddingTop: 70, backgroundColor: Colors.light }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ alignItems: "flex-start" }}>
            {/* Add your user and class name rendering logic here */}
            <Text style={styles.className}>{userId}</Text>
            <Text style={styles.className}>{classId}</Text>
            <Text style={styles.className}>{location}</Text>
          </View>
          <View>
            {/* Add logic for downloading in Excel, using xlsx lib */}
            <TouchableOpacity onPress={exportToExcel}>
              <MaterialCommunityIcons name="microsoft-excel" size={50} color={'#1D6F42'} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Table */}
        <View style={styles.tableConatainer}>
          <Table borderStyle={{ borderWidth: 3, borderColor: '#FFF6F6' }}>
            <Row data={tableHead} style={styles.head} textStyle={styles.headText} flexArr={[5, 3, 2]} />
            <Rows data={tableData} textStyle={styles.text} flexArr={[5, 3, 2]} style={{ backgroundColor: '#fff' }} />
          </Table>
        </View>
      </ScrollView>
    </>
  );
};

export default ReportScreen;

const styles = StyleSheet.create({
  tableConatainer: {
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  className: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  downloadExcelButton: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  downloadExcelText: {
    color: 'white',
    textAlign: 'center',
  },
  date: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5,
  },
  head: {
    height: 40,
    backgroundColor: '#FFDFDF',
  },
  headText: {
    margin: 6,
    fontWeight: '600'
  },
  text: {
    margin: 6
  },
});
