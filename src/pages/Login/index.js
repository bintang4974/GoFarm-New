import { Box, HStack, Heading, Image, Text } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from '../../utils';
import { Button, Gap, Input } from '../../components';
import { Logo } from '../../assets';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView style={{ flex: 1 }}>
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
                        <Button title="Login" type="text" padding={10} onPress={() => navigation.navigate('MainApp')} />
                    </Box>
                    <Gap height={20} />
                    <Text fontWeight={"semibold"} fontSize={"md"} color={colors.primary} textAlign={"center"}>Register Account?</Text>
                </Box>
            </Box>
        </SafeAreaView>
    )
}

export default Login