import { Box, Text } from 'native-base';
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from '../../utils';
import { Header, ListCategory } from '../../components';
import { useState } from 'react';
import { dummyCategory } from '../../data';

const HomeScreen = () => {
  const [category, setCategory] = useState(dummyCategory)

  return (
    <SafeAreaView>
      <Box backgroundColor={colors.white}>
        <Header />
        <Box marginX={30}>
          <ListCategory category={category} />
        </Box>
      </Box>
    </SafeAreaView>
  )
}

export default HomeScreen