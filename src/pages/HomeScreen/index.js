import { Box, HStack, ScrollView, Text } from 'native-base';
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from '../../utils';
import { Banner, Gap, Header, ListCategory, ListProduct } from '../../components';
import { useState } from 'react';
import { dummyCategory, dummyProduct } from '../../data';

const HomeScreen = () => {
  const [category, setCategory] = useState(dummyCategory);
  const [product, setProduct] = useState(dummyProduct);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box backgroundColor={colors.white} flex={1}>
        <Header />
        <Gap height={20} />
        <HStack space={3}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Banner />
            <Banner />
            <Banner />
          </ScrollView>
        </HStack>
        <Gap height={20} />
        <Box marginX={30}>
          <ListCategory category={category} />
        </Box>
        <Gap height={20} />
        <Box backgroundColor={colors.primary} flex={1} borderTopRadius={14} p={5}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <ListProduct product={product} />
          </ScrollView>
        </Box>
      </Box>
    </SafeAreaView>
  )
}

export default HomeScreen