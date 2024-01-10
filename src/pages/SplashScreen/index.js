import { Box, Center, Heading, Image, Text } from 'native-base';
import React, { useEffect } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Logo } from '../../assets';
import { Gap } from '../../components';
import { colors } from '../../utils';
import LottieView from 'lottie-react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Onboarding');
    }, 3000)
  }, []);

  return (
    <SafeAreaView>
      <LottieView
        source={require("../../../assets/thumbs.json")}
        style={{
          height: 360,
          width: 300,
          alignSelf: "center",
          marginTop: 40,
          justifyContent: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />

      <Text
        style={{
          marginTop: 40,
          fontSize: 19,
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        SELAMAT DATANG DI GOFARM
      </Text>

      <LottieView
        source={require("../../../assets/thumbs.json")}
        style={{
          height: 300,
          position: "absolute",
          top: 100,
          width: 300,
          alignSelf: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />
    </SafeAreaView>
    // <SafeAreaView flex={1}>
    //   <Center flex={1} backgroundColor={colors.primary}>
    //     <Box backgroundColor={colors.white} borderRadius={180 / 2} overflow={"hidden"} shadow={5} p={5}>
    //       <Image source={Logo} alt='logo' width={200} height={200} />
    //     </Box>
    //     <Gap height={20} />
    //     <Heading fontSize={"2xl"} color={colors.white}>Go Farm</Heading>
    //   </Center>
    // </SafeAreaView>
  )
}

export default SplashScreen