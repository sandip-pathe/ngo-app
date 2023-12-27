import React, { useEffect, useState } from 'react';
import { View, Platform, StatusBar, StyleProp, ViewStyle } from 'react-native';
import DeviceInfo from 'react-native-device-info';

interface AndroidNotchSafeAreaViewProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

const AndroidNotchSafeAreaView: React.FC<AndroidNotchSafeAreaViewProps> = ({
    children,
    style,
}) => {
    const [notchHeight, setNotchHeight] = useState<number>(0);

    const updateNotchHeight = async () => {
        if (Platform.OS === 'android' && (await DeviceInfo.hasNotch())) {
            const statusbarHeight = StatusBar.currentHeight || 24; // Default Android status bar height
            const isLandscape = await DeviceInfo.isLandscape();
            const notchHeightValue = isLandscape ? 0 : 22; // Adjust these values based on your design

            setNotchHeight(notchHeightValue - statusbarHeight);
        }
    };

    useEffect(() => {
        updateNotchHeight();
    }, []);

    return (
        <View style={[{ paddingTop: notchHeight }, style]}>
            {children}
        </View>
    );
};

export default AndroidNotchSafeAreaView;
