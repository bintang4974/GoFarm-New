import { Box, Button, HStack, Heading, Image } from 'native-base'
import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { Checklist, Payment, centang } from '../../assets'

const SuccesCheckout = ({ navigation }) => {

    return (
        <SafeAreaView>
            <Image
                source={Payment}
                justifyContent={'center'}
                height={300}
                width={400}
                alt='payment' />
            <HStack justifyContent={"center"} p={"8"}>
                <Heading fontSize={'md'}>Pembayaran Anda Berhasil!</Heading>
            </HStack>
            <Box p={2} alignItems={"center"} fontSize={'sm'}>
                <Image source={Checklist}
                    height={100}
                    width={100}
                    alt='centang' />
                <Text></Text>
                <Text fontStyle={'sm'} >Terimakasih telah menggunakan GoFarm App</Text>
                <Text>Silahkan Menunggu Pesanan Anda</Text>
            </Box>

            <HStack justifyContent={'center'} p={'5'}>
                <Button
                    onPress={() => navigation.navigate("MainApp")}
                    fontSize={'md'}
                    borderRadius={10}
                    backgroundColor={'#448456'}>
                    Back to Home
                </Button>
            </HStack>

        </SafeAreaView>
    )
}

export default SuccesCheckout