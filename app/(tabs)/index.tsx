import { Button, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import ImageInput from '../../components/ImageInput';
import ImageInputList from '../../components/ImageInputList';

interface AppProps { }

const App: React.FC<AppProps> = () => {
    const [imageUris, setImageUris] = useState<string[]>([]);

    const handleAdd = (uri: string) => {
        setImageUris([...imageUris, uri]);
    };

    const handleRemove = (uri: string) => {
        setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
    };

    return (
        <View style={styles.container}>
            <ImageInputList
                imageUris={imageUris}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center', // Changed from alignContent to alignItems
        justifyContent: 'center',
    },
});
