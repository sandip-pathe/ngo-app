import { Platform, SafeAreaView, StatusBar, View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';


interface ScreenProps {
    children: React.ReactNode;
    style?: any; // Adjust the type as needed
}

const SafeAreaViewAnd: React.FC<ScreenProps> = ({ children, style }) => {
    const isAndroid = Platform.OS === 'android';
    const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;
    const insets = useSafeAreaInsets(); // get the insets object
    const BottomHeight = insets.bottom; // get the bottom inset
    return (
        <SafeAreaView style={[styles.screen, { paddingTop: statusBarHeight, paddingBottom: isAndroid ? BottomHeight : 0 }, style]}>
            <View style={[styles.view, style]}>{children}</View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    view: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
});

export default SafeAreaViewAnd;