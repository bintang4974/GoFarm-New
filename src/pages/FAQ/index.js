import { Box, Center, Heading, Text } from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Gap } from '../../components';
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

  const handleBackPress = () => {
    navigation.navigate('Profile');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Center mt={5}>
        <Box width='80%' p={4} borderWidth={1} borderRadius={8} borderColor={colors.primary} shadow={2}>
          {faqData.map((item, index) => (
            <Box key={index} >
              <Heading size="md" mb={2}>
                {item.question}
              </Heading>
              <Text>{item.answer}</Text>
            </Box>
          ))}
        </Box>
      </Center>
      <Gap height={10} />
      <Box mx={10} shadow={5}>
        <Button
          type="textIcon"
          title="Back"
          icon="back"
          padding={15}
          fontSize={18}
          backgroundColor={colors.primary}
          fontColor={colors.white}
          onPress={handleBackPress}
        />
        {/* Additional buttons or components */}
      </Box>
      <Gap height={30} />
    </ScrollView>
  );
};

export default FAQ;
