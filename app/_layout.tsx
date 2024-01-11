import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { TouchableOpacity, useColorScheme } from 'react-native';
import { initializeApp } from 'firebase/app';

// Import other Firebase modules you need (e.g., Firestore)
import 'firebase/firestore';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBHJ9gzmcex3-VH6_9QYaaJfCdeqCSlCrE",
  authDomain: "sevafoundatiom.firebaseapp.com",
  projectId: "sevafoundatiom",
  storageBucket: "sevafoundatiom.appspot.com",
  messagingSenderId: "316154321668",
  appId: "1:316154321668:web:02a84ac8e0d70c1be1ce51",
  measurementId: "G-5HD9T655TW"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <RootLayoutNav />
  );
}

function RootLayoutNav() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name='(modals)/login'
        options={{
          title: "Authentication",
          presentation: 'modal',
          headerBackTitleStyle: {
            fontFamily: ''
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => router.back()}>
              <Ionicons name='close-outline' size={28} />
            </TouchableOpacity>
          )
        }}
      />

      <Stack.Screen name='listing/[id]' options={{ headerTitle: '' }} />
      <Stack.Screen name='(modals)/attendance'
        options={{
          presentation: 'transparentModal',
          animation: 'fade',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}>
              <Ionicons name='close-outline' size={28} />
            </TouchableOpacity>
          )
        }} />

    </Stack>
  );
}
