import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import MyInputField from '../../components/MyInputField';
import { defaultStyles } from '../../constants/Styles';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import ImagePicker, { ImagePickerResponse } from 'react-native-image-picker';

interface ScreenTwoProps {
    navigation: any; // Adjust the type based on your navigation library
}

const ScreenTwo: React.FC<ScreenTwoProps> = ({ navigation }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedDocument, setSelectedDocument] = useState<string | null>(null);

    // const handleImagePicker = () => {
    //     ImagePicker.showImagePicker({}, (response: ImagePickerResponse) => {
    //         if (response.uri) {
    //             setSelectedImage(response.uri);
    //         }
    //     });
    // };

    // const handleDocumentPicker = async () => {
    //     try {
    //         const result: DocumentPickerResponse = await DocumentPicker.pick({
    //             type: [DocumentPicker.types.allFiles],
    //         });

    //         if (result.uri) {
    //             setSelectedDocument(result.uri);
    //         }
    //     } catch (err) {
    //         if (DocumentPicker.isCancel(err)) {
    //             // User cancelled the document picker
    //         } else {
    //             console.error('Error picking document:', err);
    //         }
    //     }
    // };

    return (
        <View style={styles.container}>
            <MyInputField label="Objectives Achieved" />

            {/* Image Attachment */}
            <TouchableOpacity style={defaultStyles.btn}>
                <Text style={defaultStyles.btnText}>Attach Images</Text>
            </TouchableOpacity>

            {/* Document Attachment */}
            <TouchableOpacity style={defaultStyles.btn}>
                <Text style={defaultStyles.btnText}>Attach Financial Reports</Text>
            </TouchableOpacity>

            {/* Display Selected Image and Document (if any) */}
            {selectedImage && (
                <View>
                    <Text>Selected Image:</Text>
                    <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />
                </View>
            )}

            {selectedDocument && (
                <View>
                    <Text>Selected Document:</Text>
                    <Text>{selectedDocument}</Text>
                </View>
            )}

            <TouchableOpacity style={defaultStyles.btn}>
                <Text style={defaultStyles.btnText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        gap: 24,
    },
});

export default ScreenTwo;
