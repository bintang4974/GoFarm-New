import { Box, HStack, Heading, Image, Text } from 'native-base';
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from '../../utils';
import { Button, Gap, Input } from '../../components';
import { Logo } from '../../assets';
import { TouchableOpacity } from 'react-native';

const Login = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Box backgroundColor={colors.primary} flex={1} justifyContent={"center"}>
                <Box backgroundColor={colors.white} p={5} mx={8} borderRadius={20} shadow={5}>
                    <HStack space={2} alignItems={"center"} justifyContent={"center"}>
                        <Image source={Logo} height={50} width={50} alt='logo' />
                        <Heading fontWeight={"bold"} size={"2xl"} color={colors.primary}>Register</Heading>
                    </HStack>
                    <Gap height={20} />
                    <Input label="Name" />
                    <Input label="Deskription" secureTextEntry />
                    <Input label="Email" />
                    <Input label="Password" secureTextEntry />
                    <Input label="Phone" />
                    <Input label="Address" secureTextEntry />
                    <Gap height={20} />
                    <Box mx={10} shadow={5}>
                        <Button title="Simpan" type="text" padding={10} onPress={() => navigation.navigate('MainApp')} />
                    </Box>
                    <Gap height={20} />
                    <TouchableOpacity>
                    <Text fontWeight={"semibold"} fontSize={"md"} color={colors.primary} textAlign={"center"} onPress={() => navigation.navigate('Login')}>Kembali?</Text>
                    </TouchableOpacity>
                </Box>
            </Box>
        </SafeAreaView>
    )
}

export default Login