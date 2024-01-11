import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, Center, Heading } from 'native-base';
import { Gap } from '../../components';
import { colors } from '../../utils';

const Notifications = () => {
  const notificationsData = [
    {
      question: '"Diskon spesial menanti Anda! Jangan lewatkan kesempatan ini."',
    },
    {
      question: '"Promo eksklusif! Dapatkan penawaran istimewa hanya untuk Anda."',
    },
    {
      question: '"Anda mendapatkan poin reward! Gunakan sekarang atau kumpulkan lebih banyak lagi."',
    },
    {
      question: '"Pemberitahuan: Event khusus sebentar lagi! Segera daftar dan ikut berpartisipasi."',
    },
    {
      question: '"Tingkatkan pengalaman belanja Anda dengan tips dan trik terbaru kami."',
    },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Center p={5}>
        {notificationsData.map((item, index) => (
          <Box key={index} width='80%' p={4} my={2} borderWidth={1} borderRadius={8} borderColor={colors.primary} shadow={2}>
            <Heading size="md">
              {item.question}
            </Heading>
          </Box>
        ))}
      </Center>
      <Gap height={10} />
    </ScrollView>
  );
};

export default Notifications;
