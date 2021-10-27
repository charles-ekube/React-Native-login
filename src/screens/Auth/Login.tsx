import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import CustomButton from '../../components/buttons/Button';
import { loginUser, useAuthDispatch, useAuthState } from '../../context';
import validation from '../../utils/validation';

import styles from './AuthStyles';

const Login = ({ navigation }: any) => {

    const [state, setState] = useState({

        email: '',
        password: '',
    })
    const [msgBox, setMsgBox] = useState(false);
    const [msgText, setMsgText] = useState('');

    const { email, password } = state
    const updateState = (data: any) => setState(() => ({ ...state, ...data }))
    const dispatch = useAuthDispatch();
    const { loading } = useAuthState();


    const isValidData = () => {
        const error = validation({
            email,
            password,
        })
        if (error) {
            setMsgBox(true);
            setMsgText(error);
            setTimeout(function () {
                setMsgBox(false)
            }, 2000)
            return false
        }

        return true
    }



    const handleLogin = async () => {


        const checkValid = isValidData()
        let payload = { email, password }
        if (checkValid) {

            try {
                let response = await loginUser(dispatch, payload);
                if (response) {
                    navigation.navigate('Dashboard');
                }

                else {

                    return;
                }

            } catch (error) {
                console.log(error);
            }
        }

    };


    return (
        <>
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.headerText}>OBIEX</Text>
                </View>
                {
                    msgBox ? (
                        <View style={styles.messageBox}>
                            <Text style={styles.messageBoxText}>{msgText}</Text>
                        </View>
                    ) :
                        null
                }

                <View style={styles.card}>
                    <View>
                        <Text style={styles.headerSubText}>Log in to OBIEX </Text>
                    </View>

                    <View>

                        <View style={styles.inputContainer}>

                            <TextInput
                                placeholder={'Email'}
                                keyboardType='email-address'
                                textContentType={'emailAddress'}
                                value={email}
                                style={{ paddingVertical: 10, width: '90%' }}
                                onChangeText={(email) => updateState({ email })}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder={'Password'}
                                secureTextEntry={true}
                                style={{ paddingVertical: 10, width: '90%' }}
                                textContentType={'password'}
                                value={password}
                                onChangeText={(password) => updateState({ password })}
                            />
                        </View>
                        <View style={styles.rememberMe}>
                            <TouchableOpacity style={styles.checkBox}></TouchableOpacity>
                            <Text>Keep me logged in on this computer</Text>
                        </View>
                        <View>
                            <CustomButton
                                customStyle={styles.createAccountBtn}
                                btnText='Log In'
                                btnTextStyle={styles.createAccountBtnText}
                                onPress={handleLogin}
                            // loading={loading}
                            />
                        </View>
                        <View style={styles.footer}>
                            <Text>Forgot password? .</Text>
                            <Text>Don't have an account? .</Text>
                            <Text>Privacy policy .</Text>
                            <Text>User agreement .</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

export default Login;