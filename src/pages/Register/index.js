import { Box, HStack, Heading, Image, Text } from "native-base";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../utils";
import { Button, Gap, Input } from "../../components";
import { Logo } from "../../assets";
import { TouchableOpacity, Alert } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, realtimeDB } from "../../config/FIREBASE";
import { doc, setDoc } from "firebase/firestore";
import { ref, set } from "firebase/database";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [alamat, setAlamat] = useState("");

  const register = () => {
    // ...
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

            // Save data to Realtime Database
            const dbRealtime = getDatabase();
            const userRef = ref(dbRealtime, `users/${myUserUid}`);

            get(userRef)
              .then((snapshot) => {
                if (snapshot.exists()) {
                  console.log("User data already exists in Realtime Database");
                } else {
                  set(userRef, {
                    name: name,
                    email: user.email,
                    phone: phone,
                    alamat: alamat,
                  })
                    .then(() => {
                      console.log(
                        "Data pengguna berhasil disimpan di Realtime Database"
                      );
                    })
                    .catch((error) => {
                      console.error(
                        "Kesalahan menyimpan data pengguna di Realtime Database: ",
                        error
                      );
                    });
                }
              })
              .catch((error) => {
                console.error(
                  "Kesalahan mendapatkan data pengguna dari Realtime Database: ",
                  error
                );
              });
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
            label="Alatmat"
            value={alamat}
            onChangeText={(text) => setAlamat(text)}
          />
          <Gap height={20} />
          <Box mx={10} shadow={5}>
            <Button
              title="Register"
              type="text"
              padding={10}
              onPress={register}
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
              Already have account?
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default Register;


// import { Alert, Box, HStack, Heading, Image, Text } from 'native-base';
// import React, { useState } from 'react';
// import { SafeAreaView } from "react-native-safe-area-context";
// import { colors } from '../../utils';
// import { Button, Gap, Input } from '../../components';
// import { Logo } from '../../assets';
// import { TouchableOpacity } from 'react-native';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth, db } from '../../config/FIREBASE';
// import { doc, setDoc } from 'firebase/firestore';

// const Register = ({ navigation }) => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [phone, setPhone] = useState("");

//     const register = () => {
//         if (email === "" || password === "" || phone === "") {
//             Alert.alert(
//                 "Invalid Details",
//                 "Please fill all the details",
//                 [
//                     {
//                         text: "Cancel",
//                         onPress: () => console.log("Cancel Pressed"),
//                         style: "cancel"
//                     },
//                     { text: "OK", onPress: () => console.log("OK Pressed") }
//                 ],
//                 { cancelable: false }
//             );
//         }
//         createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
//             console.log("user credential", userCredential);
//             const user = userCredential._tokenResponse.email;
//             const myUserUid = auth.currentUser.uid;

//             setDoc(doc(db, "users", `${myUserUid}`), {
//                 name: name,
//                 email: user,
//                 phone: phone
//             })
//         })
//     }

//     return (
//         <SafeAreaView style={{ flex: 1 }}>
//             <Box backgroundColor={colors.primary} flex={1} justifyContent={"center"}>
//                 <Box backgroundColor={colors.white} p={5} mx={8} borderRadius={20} shadow={5}>
//                     <HStack space={2} alignItems={"center"} justifyContent={"center"}>
//                         <Image source={Logo} height={50} width={50} alt='logo' />
//                         <Heading fontWeight={"bold"} size={"2xl"} color={colors.primary}>Register</Heading>
//                     </HStack>
//                     <Gap height={20} />
//                     <Input label="Name" value={name} onChangeText={(text) => setName(text)} />
//                     <Input label="Email" value={email} onChangeText={(text) => setEmail(text)} />
//                     <Input label="Password" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry />
//                     <Input label="Phone" value={phone} onChangeText={(text) => setPhone(text)} />
//                     <Gap height={20} />
//                     <Box mx={10} shadow={5}>
//                         <Button title="Register" type="text" padding={10} onPress={register} />
//                     </Box>
//                     <Gap height={20} />
//                     <TouchableOpacity>
//                         <Text fontWeight={"semibold"} fontSize={"md"} color={colors.primary} textAlign={"center"} onPress={() => navigation.navigate('Login')}>Already have account?</Text>
//                     </TouchableOpacity>
//                 </Box>
//             </Box>
//         </SafeAreaView>
//     )
// }

// export default Register