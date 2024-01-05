import { Box, Button, Center, Heading, ScrollView, Text } from 'native-base';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Gap, ListCategory, ListProducts } from '../../components';
import { colors } from '../../utils';

const FAQ = ({ navigation }) => {
  const faqData = [
    {
      question: 'Apa itu aplikasi Gofarm?',
      answer: 'GoFarm adalah aplikasi penjualan hasil panen petani. Di Aplikasi ini kita bisa melakukan jual beli hasil panen.Tujuan dari pembuatan aplikasi ini adalah untuk membantu petani memperluas penjulan hasil penennya di Seluruh Indonesia,dan juga untuk menghilangkan Tengkulak yang ada pada Setip Desa.',
    },
    {
      question: 'Apakah aplikasi GoFarm bisa mendukung pengiriman Produk hasil Panen Ke Rumah Pembeli atau Customer?',
      answer: 'Tentu saja bisa, tujuan dari aplikasi ini yaitu untuk memperluas jangkauan penjualan dari Desa Wonoanti, jadi untuk pembeli dari luar kota bisa saja membeli',
    },
    {
      question: 'Bagaimana untuk Proses pembayaran dari Aplikasi GoFarm? Apakah terjamin aman?',
      answer: 'Untuk Pembayaran dari Aplikasi kita bisa menggunakan Transfer dengan banyak cara, tetapi untuk sementara ini kita masih belum bisa menggunakan metode pembayaran COD',
    }
  ];

  return (
    <>
      <SafeAreaView>
          <Center>
            <Box width='80%' p={4} borderWidth={1} borderRadius={8} borderColor={colors.primary} shadow={2}>
              <ScrollView>
              {faqData.map((item, index) => (
                <Box>
                  <Heading size="md" mb={2}>
                    {item.question}
                  </Heading>
                  <Text>{item.answer}</Text>
                </Box>
              ))}
              </ScrollView>
            </Box>
          </Center>
        <Gap height={10} />
        <Box mx={10} shadow={5} >
          <Button borderRadius={8} borderWidth={2} borderColor={colors.primary} shadow={7} backgroundColor={colors.primary} title="Saya Paham!" type="text" padding={7} onPress={() => navigation.navigate('MainApp')} color={colors.primary} />
        </Box>
      </SafeAreaView>
    </>
  );
};



export default FAQ