import { Box } from 'native-base';
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from '../../components';
import { colors } from '../../utils';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Box backgroundColor={colors.white}>
        <Header />
      </Box>
    </SafeAreaView>
  )
}

export default HomeScreen