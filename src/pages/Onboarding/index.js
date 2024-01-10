import { Box, Button, Heading, Image, Text } from 'native-base'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Onboardings } from '../../assets'
import { Gap } from '../../components'
import { colors } from '../../utils'

const Onboarding = ({ navigation }) => {
    return (
        <SafeAreaView flex={1}>
            <Box backgroundColor={colors.white} flex={1} justifyContent={"center"} mx={2}>
                <Box backgroundColor={colors.white} borderRadius={180 / 2} justifyContent={"center"} alignItems={"center"}>
                    <Image source={Onboardings} alt='logo' width={300} height={300} />
                </Box>
                <Gap height={20} />
                <Box >
                    <Heading textAlign={"center"} fontSize={"2xl"} color={colors.primary}>Ayo Bergabung Bersama Kami di GoFarm</Heading>
                    <Text mx={2} my={2} alignSelf={"center"} color={colors.primary}>Segera Daftarkan diri Kalian menjadi bagian dari kami, Semua kebutuhan anda ada di sini!!</Text>
                </Box>
                <Box margin={5} shadow={10}>
                    <Button
                        padding={15}
                        fontSize={18}
                        backgroundColor={colors.primary}
                        fontColor={colors.white}
                        shadow={5}
                        onPress={() => navigation.navigate('Register')}
                    >
                        <Text bold color={"white"}>Get Started!</Text>
                    </Button>
                    <Gap height={20} />
                    <Button
                        padding={15}
                        fontSize={18}
                        backgroundColor={colors.white}
                        fontColor={colors.primary}
                        shadow={5}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text bold color={colors.primary}>Sign In</Text>
                    </Button>
                </Box>
            </Box>
        </SafeAreaView>
    )
}

export default Onboarding