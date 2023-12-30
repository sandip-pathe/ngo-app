import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useRef, useState } from 'react';
import ImageInput from './ImageInput';

interface ImageInputListProps {
    imageUris?: string[];
    onRemoveImage: (uri: string) => void;
    onAddImage: (uri: string) => void;
}

const ImageInputList: React.FC<ImageInputListProps> = ({ imageUris = [], onRemoveImage, onAddImage }) => {
    const [imageUri, setImageUri] = useState('');

    const scrollView = useRef<ScrollView>(null);

    return (
        <View>
            <ScrollView ref={scrollView} horizontal onContentSizeChange={() => scrollView.current?.scrollToEnd({ animated: true })}>
                <View style={styles.container}>
                    {imageUris.map(uri => (
                        <View key={uri} style={styles.image}>
                            <ImageInput
                                imageUri={uri}
                                onChangeImage={() => onRemoveImage(uri)} />
                        </View>
                    ))}
                    <ImageInput imageUri={imageUri} onChangeImage={onAddImage} />
                </View>
            </ScrollView>
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
