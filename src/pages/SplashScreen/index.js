import { Box, Center, Heading, Image, Text } from 'native-base';
import React, { useEffect } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from '../../utils';
import { Logo } from '../../assets';
import { Gap } from '../../components';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 2000)
  }, []);

  return (
    <SafeAreaView flex={1}>
      <Center flex={1} backgroundColor={colors.primary}>
        <Box backgroundColor={colors.white} borderRadius={180 / 2} overflow={"hidden"} shadow={5} p={5}>
          <Image source={Logo} alt='logo' width={200} height={200} />
        </Box>
        <Gap height={20} />
        <Heading fontSize={"2xl"} color={colors.white}>Go Farm</Heading>
      </Center>
    </SafeAreaView>
  )
}

export default SplashScreen