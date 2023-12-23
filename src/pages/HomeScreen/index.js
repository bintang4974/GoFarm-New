import { Box, HStack, ScrollView } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Banner, Gap, Header, ListCategory, ListProducts } from '../../components';
import { dummyCategory, dummyProduct } from '../../data';
import { colors } from '../../utils';

const HomeScreen = ({ navigation }) => {
  const [category, setCategory] = useState(dummyCategory);
  const [product, setProduct] = useState(dummyProduct);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box backgroundColor={colors.white} flex={1}>
        <Header navigation={navigation} />
        <Gap height={20} />
        <ScrollView showsVerticalScrollIndicator={false}>
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
          <Box backgroundColor={colors.primary} flex={1} borderTopRadius={14} p={4}>
            <ListProducts product={product} navigation={navigation} />
          </Box>
        </ScrollView>
      </Box>
    </SafeAreaView>
  )
}

export default HomeScreen