import { Box, Heading, ScrollView, Text } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Gap, Header, ListProducts } from '../../components';
import { dummyCategory, dummyProduct } from '../../data';
import { colors } from '../../utils';

const Search = ({ navigation }) => {
  const [category, setCategory] = useState(dummyCategory);
  const [product, setProduct] = useState(dummyProduct);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box backgroundColor={colors.white} flex={1}>
        {/* <Header navigation={navigation} />
        <Gap height={10} />
        <Heading fontSize={"2xl"} p={2}>Whislist</Heading>
        <Gap height={10} />
        <Box backgroundColor={colors.primary} flex={1} borderTopRadius={14} p={4}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <ListProducts product={product} />
          </ScrollView>
          <Gap height={50} />
        </Box> */}
        <Text>kontol</Text>
      </Box>
    </SafeAreaView>
  )
}

export default Search