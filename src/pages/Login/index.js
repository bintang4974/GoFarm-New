import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Box, HStack, Heading, Image, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Logo } from '../../assets';
import { Button, Gap, Input } from '../../components';
import { auth } from '../../config/FIREBASE';
import { colors } from '../../utils';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (!authUser) {
                setLoading(false);
            }
            if (authUser) {
                AsyncStorage.setItem('KeepLoggedIn', JSON.stringify(true));
                navigation.replace("MainApp");
            }
        });

        return unsubscribe;
    }, [])

    const login = () => {
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log("user credential", userCredential);
            const user = userCredential.user;
            console.log("user details", user)
        })
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {loading ? (
                <Box>
                    <Text>Loading</Text>
                    <ActivityIndicator size={"large"} color={"red"} />
                </Box>
            ) : (
                <Box backgroundColor={colors.primary} flex={1} justifyContent={"center"}>
                    <Box backgroundColor={colors.white} p={5} mx={8} borderRadius={20} shadow={5}>
                        <HStack space={2} alignItems={"center"} justifyContent={"center"}>
                            <Image source={Logo} height={50} width={50} alt='logo' />
                            <Heading fontWeight={"bold"} size={"2xl"} color={colors.primary}>Login</Heading>
                        </HStack>
                        <Gap height={20} />
                        <Input label="Email" value={email} onChangeText={(text) => setEmail(text)} />
                        <Input label="Password" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry />
                        <Gap height={20} />
                        <Box mx={10} shadow={5}>
                            <Button title="Login" type="text" padding={10} onPress={login} />
                        </Box>
                        <Gap height={20} />
                        <TouchableOpacity>
                            <Text fontWeight={"semibold"} fontSize={"md"} color={colors.primary} textAlign={"center"} onPress={() => navigation.navigate('Register')}>Register Account?</Text>
                        </TouchableOpacity>
                    </Box>
                </Box>
            )}
        </SafeAreaView>
    )
}

export default Login