import { Box, HStack, ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Banner, Gap, Header, ListCategory, ListProducts } from '../../components';
import { dummyCategory, dummyProduct } from '../../data';
import { colors } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/ProductReducer';

const HomeScreen = ({ navigation }) => {
  const cart = useSelector((state) => state.cart.cart);
  console.log('cart: ', cart);
  const [category, setCategory] = useState(dummyCategory);
  const [product, setProduct] = useState(dummyProduct);
  const dispatch = useDispatch();

  // initialize product from reducer
  const getProduct = useSelector((state) => state.product.product);
  console.log('product: ', getProduct);

  useEffect(() => {
    if(getProduct.length > 0) return

    const fetchProducts = () => {
      product.map((item) => dispatch(getProducts(item)));
    }
    fetchProducts();
  }, [])
  console.log(getProduct)

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
            <ListProducts product={getProduct} navigation={navigation} />
          </Box>
        </ScrollView>
      </Box>
    </SafeAreaView>
  )
}

export default HomeScreen