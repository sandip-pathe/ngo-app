import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { defaultStyles } from '../../constants/Styles';
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useOAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';

enum Strategy {
    Google = 'oauth_google',
    Apple = 'oauth_apple',
    Facebook = 'oauth_facebook',
}


const Login = () => {
    useWarmUpBrowser();
    const router = useRouter()

    const { startOAuthFlow: googleAuth } = useOAuth({ strategy: 'oauth_google' });
    const { startOAuthFlow: appleAuth } = useOAuth({ strategy: 'oauth_apple' });
    const { startOAuthFlow: facebookAuth } = useOAuth({ strategy: 'oauth_facebook' });

    const onSelectAuth = async (strategy: Strategy) => {
        const selectedAuth = {
            [Strategy.Google]: googleAuth,
            [Strategy.Apple]: appleAuth,
            [Strategy.Facebook]: facebookAuth,
        }[strategy];

        try {
            const { createdSessionId, setActive } = await selectedAuth();
            console.log("created session id:", createdSessionId)

            if (createdSessionId) {
                setActive!({ session: createdSessionId })
                router.back();
            }
        } catch (err) {
            console.error('OAuth Error:', err)
        }
    }


    return (
        <View style={styles.container}>
            <View style={{ gap: 20 }}>
                <TextInput autoCapitalize='none' placeholder='E-mail Adress' style={[defaultStyles.inputField]} />
                <TouchableOpacity style={[defaultStyles.btn]}>
                    <Text style={[defaultStyles.btnText]}>Continue</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.seperatorView}>
                <View style={styles.seperatorLine} />
                <Text style={styles.seperator}>or</Text>
                <View style={styles.seperatorLine} />
            </View>

            <View style={{ gap: 20 }}>
                <TouchableOpacity style={[defaultStyles.btnOutline]} >
                    <Ionicons name='call-outline' size={24} style={[defaultStyles.btnIcon]} />
                    <Text style={[defaultStyles.btnOutlineText]}>Continue with Phone</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[defaultStyles.btnOutline]} onPress={() => onSelectAuth(Strategy.Google)}>
                    <Ionicons name='logo-google' size={24} style={[defaultStyles.btnIcon]} />
                    <Text style={[defaultStyles.btnOutlineText]}>Continue with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[defaultStyles.btnOutline]} onPress={() => onSelectAuth(Strategy.Apple)}>
                    <Ionicons name='logo-apple' size={24} style={[defaultStyles.btnIcon]} />
                    <Text style={[defaultStyles.btnOutlineText]}>Continue with Apple</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[defaultStyles.btnOutline]} onPress={() => onSelectAuth(Strategy.Facebook)}>
                    <Ionicons name='md-logo-facebook' size={24} style={[defaultStyles.btnIcon]} />
                    <Text style={[defaultStyles.btnOutlineText]}>Continue with Facebook</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 26,
    },
    seperatorView: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        marginVertical: 30,
    },
    seperator: {
        color: Colors.grey
    },
    seperatorLine: {
        flex: 1,
        borderBottomColor: '#000',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});


export default Login;