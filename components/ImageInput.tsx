import { Alert, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import * as ImagePicker from 'expo-image-picker'

interface ImageInputProps {
    imageUri: string,
    onChangeImage: any,
}

const ImageInput: React.FC<ImageInputProps> = ({ imageUri, onChangeImage }) => {
    useEffect(() => {
        requestPermission();
    }, [])
    const requestPermission = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync(); // Corrected function name
        if (status !== 'granted') {
            alert('Permission to access the library was denied');
        }
    }

    const handlePress = () => {
        if (!imageUri) selectImage();
        else Alert.alert('Delete', 'Are you sure want to delete this image?', [
            { text: 'Yes', onPress: () => onChangeImage(null) },
            { text: 'No' },
        ])
    }

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1
            });

            if (!result.canceled)
                onChangeImage(result.assets[0].uri)
        } catch (error) {
            console.log("Error")
        }
    }


    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && (<MaterialCommunityIcons name='camera' size={40} color={Colors.dark} />)}
                {imageUri && (<Image source={{ uri: imageUri }} style={styles.image} />)}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
        height: 100,
        justifyContent: "center",
        overflow: 'hidden',
        width: 100,
    },
    image: {
        height: '100%',
        width: '100%',
    }
})

export default ImageInput



// const App = () => {
//     const [imageUri, setImageUri] = useState(String);
//     return (
//         <View style={styles.container}>
//             <ImageInput imageUri={imageUri} onChangeImage={setImageUri} />
//         </View>
// )



