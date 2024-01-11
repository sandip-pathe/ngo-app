import { View, Text, TouchableOpacity, Button, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { defaultStyles } from '../../constants/Styles';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error: any) {
            console.log(error);
            alert('registration failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('check your email for verification');
        } catch (error: any) {
            console.log(error);
            alert('registration failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    }



    return (
        <View style={styles.container}>
            <View style={{ gap: 20 }}>
                <TextInput
                    autoCapitalize='none'
                    value={email}
                    placeholder='E-mail Adress'
                    onChangeText={(text) => setEmail(text)}
                    style={[defaultStyles.inputField]} />

                <TextInput
                    autoCapitalize='none'
                    value={password}
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    style={[defaultStyles.inputField]} />

                {loading ? <ActivityIndicator size='large' color={Colors.primary} /> :
                    <>
                        <TouchableOpacity style={[defaultStyles.btn]} onPress={signIn}>
                            <Text style={[defaultStyles.btnText, { fontSize: 24 }]}>Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[defaultStyles.btn, { backgroundColor: "#fff" }]} onPress={signUp}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Sign Up</Text>
                        </TouchableOpacity>
                    </>
                }
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
                <TouchableOpacity style={[defaultStyles.btnOutline]} >
                    <Ionicons name='logo-google' size={24} style={[defaultStyles.btnIcon]} />
                    <Text style={[defaultStyles.btnOutlineText]}>Continue with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[defaultStyles.btnOutline]} >
                    <Ionicons name='logo-apple' size={24} style={[defaultStyles.btnIcon]} />
                    <Text style={[defaultStyles.btnOutlineText]}>Continue with Apple</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[defaultStyles.btnOutline]}>
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