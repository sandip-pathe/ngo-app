import { StyleSheet, View } from 'react-native';
import React from 'react';
import ImageInput from './ImageInput';

interface ImageInputListProps {
    imageUris?: string[];
    onRemoveImage: (uri: string) => void;
    onAddImage: (uri: string) => void;
}

const ImageInputList: React.FC<ImageInputListProps> = ({ imageUris = [], onRemoveImage, onAddImage }) => {
    return (
        <View style={styles.container}>
            {imageUris.map(uri => (
                <View key={uri} style={styles.image}>
                    <ImageInput
                        imageUri={uri}
                        onChangeImage={() => onRemoveImage(uri)} />
                </View>
            ))}
        </View>
    );
};

export default ImageInputList;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    image: {
        marginRight: 10,
    },
});
