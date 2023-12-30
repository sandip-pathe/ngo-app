import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import ImageInput from '../../components/ImageInput';
import ImageInputList from '../../components/ImageInputList';

const App = () => {
    const [imageUris, setImageUris] = useState([]);

    const handleAdd = uri => {
        setImageUris([...imageUris, uri])
    }
    const handleRemove = uri => {
        setImageUris(imageUris.filter(imageUri => imageUri !== uri));
    }

    return (
        <View style={styles.container}>
            <ImageInputList
                imageUris={imageUris}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignContent: 'center',
        justifyContent: 'center'
    }
})
