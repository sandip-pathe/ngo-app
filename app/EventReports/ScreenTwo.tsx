import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import MyInputField from '../../components/MyInputField';
import { defaultStyles } from '../../constants/Styles';
import ImageInputList from '../../components/ImageInputList';

type UriType = string;

const ScreenTwo: React.FC = () => {
    const [imageUris, setImageUris] = useState<UriType[]>([]);

    const handleAdd = (uri: UriType) => {
        setImageUris([...imageUris, uri]);
    }

    const handleRemove = (uri: UriType) => {
        setImageUris(imageUris.filter(imageUri => imageUri !== uri));
    }


    return (
        <View style={styles.container}>
            <MyInputField label="Objectives Achieved" />
            <ImageInputList
                imageUris={imageUris}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
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
