import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Box, HStack, Heading, Image, Text } from 'native-base';
import React, { useState } from 'react';
import { Alert, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Logo } from "../../assets";
import { Button, Gap, Input } from "../../components";
import { auth, db } from "../../config/FIREBASE";
import { colors } from "../../utils";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [alamat, setAlamat] = useState("");

  const HandleRegister = () => {
    console.log("Register function called");

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const myUserUid = user.uid;

        // Save data to Firestore
        setDoc(doc(db, "users", myUserUid), {
          name: name,
          email: user.email,
          phone: phone,
          alamat: alamat,
        })
          .then(() => {
            console.log("Data pengguna berhasil disimpan di Firestore");
            navigation.replace("Login"); // Replace with the name of your Login screen
          })
          .catch((error) => {
            console.error(
              "Kesalahan menyimpan data pengguna ke Firestore: ",
              error
            );
          });
      })
      .catch((error) => {
        Alert.alert("Pendaftaran Gagal", error.message);
        console.error("Kesalahan mendaftarkan pengguna: ", error);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box backgroundColor={colors.primary} flex={1} justifyContent={"center"}>
        <Box
          backgroundColor={colors.white}
          p={5}
          mx={8}
          borderRadius={20}
          shadow={5}
        >
          <HStack space={2} alignItems={"center"} justifyContent={"center"}>
            <Image source={Logo} height={50} width={50} alt="logo" />
            <Heading fontWeight={"bold"} size={"2xl"} color={colors.primary}>
              Register
            </Heading>
          </HStack>
          <Gap height={20} />
          <Input
            label="Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Input
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
          <Input
            label="Phone"
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />
          <Input
            label="Alamat"
            value={alamat}
            onChangeText={(text) => setAlamat(text)}
          />
          <Gap height={20} />
          <Box mx={10} shadow={5}>
            <Button
              title="Register"
              type="text"
              padding={10}
              onPress={HandleRegister}
            />
          </Box>
          <Gap height={20} />
          <TouchableOpacity>
            <Text
              fontWeight={"semibold"}
              fontSize={"md"}
              color={colors.primary}
              textAlign={"center"}
              onPress={() => navigation.navigate("Login")}
            >
              Already have an account?
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default Register;
