import { Box, Text } from 'native-base';
import React, { useEffect } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 2000)
  }, []);

  return (
    <SafeAreaView>
      <Box>
        <Text>Splash Screen</Text>
      </Box>
    </SafeAreaView>
  )
}

export default SplashScreen