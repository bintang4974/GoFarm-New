import { Box, HStack, ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Banner, Gap, Header, ListCategory, ListProducts } from '../../components';
import { dummyCategory, dummyProduct } from '../../data';
import { colors } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/ProductReducer';
import { collection, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../config/FIREBASE';

const HomeScreen = ({ navigation }) => {
  const cart = useSelector((state) => state.cart.cart);
  const [items, setItems] = useState([]);
  console.log('cart: ', cart);
  const [category, setCategory] = useState(dummyCategory);
  const [product, setProduct] = useState(dummyProduct);
  const dispatch = useDispatch();

  // initialize product from reducer
  const getProduct = useSelector((state) => state.product.product);
  // console.log('product: ', getProduct);

  useEffect(() => {
    if (getProduct.length > 0) return

    const fetchProducts = async () => {
      // product.map((item) => dispatch(getProducts(item)));
      const colRef = collection(db, "products");
      const docsSnap = await getDocs(colRef);
      docsSnap.forEach((doc) => {
        items.push(doc.data());
      });
      items?.map((item) => dispatch(getProducts(item)));
    }
    fetchProducts();
  }, [])
  console.log(getProduct);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box backgroundColor={colors.white} flex={1}>
        <Header navigation={navigation} />
        <HStack space={3}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Banner />
            <Banner />
            <Banner />
          </ScrollView>
        </HStack>
        <Gap height={10} />
        <Box marginX={30}>
          <ListCategory category={category} />
        </Box>
        <Gap height={20} />
        <Box backgroundColor={colors.primary} flex={1} borderTopRadius={14} p={4}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <ListProducts product={getProduct} navigation={navigation} />
            <Gap height={100} />
          </ScrollView>
        </Box>
      </Box>
    </SafeAreaView>
  )
}

export default HomeScreen