import Ionicons from "@expo/vector-icons/Ionicons";
import { signOut } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Box, Heading, Image, Pressable, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, ListMenu } from "../../components";
import { auth } from "../../config/FIREBASE";
import { dummyMenu, dummyProfile } from "../../data";
import { colors } from "../../utils";

const Profile = ({ navigation }) => {
  const [profile, setProfile] = useState(dummyProfile);
  const [menu, setMenu] = useState([dummyMenu]);
  const [gambar, setGambar] = useState(dummyProfile);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;

        if (user) {
          const userDocRef = doc(getFirestore(), "users", user.uid);
          const docSnapshot = await getDoc(userDocRef);

          if (docSnapshot.exists()) {
            setProfile({ id: docSnapshot.id, ...docSnapshot.data() });
          } else {
            console.log("User document does not exist");
          }
        } else {
          console.log("No user is currently logged in");
        }
      } catch (error) {
        console.error("Error fetching user data from Firestore: ", error);
      }
    };

    fetchUserData();
  }, []);

  const signOutUser = () => {
    signOut(auth).then(() => {
      navigation.replace("Login");
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box backgroundColor={colors.white} flex={1}>
        <Header navigation={navigation} />
        <Box
          position={"absolute"}
          bottom={0}
          height={580}
          width={"100%"}
          backgroundColor={colors.primary}
          borderTopRadius={40}
        >
          <Image
            source={gambar.avatar}
            width={165}
            height={165}
            alt="avatar"
            borderRadius={40}
            alignSelf={"center"}
            marginTop={-75}
          />
          <Box marginTop={2} alignItems={"center"}>
            <Heading fontSize={"lg"} color={colors.white}>
              {profile.name}
            </Heading>
            <Text fontSize={"md"} color={colors.white} marginTop={1}>
              {profile.email}
            </Text>
            <Text fontSize={"md"} color={colors.white} marginTop={1}>
              {profile.phone},{profile.alamat}
            </Text>
          </Box>
          {menu.map((menuItem, index) => (
            <ListMenu
              key={index}
              menu={menuItem}
              navigation={navigation}
            />
          ))}
          <Box alignItems={'center'} mt={5}>
            <Pressable onPress={signOutUser} backgroundColor={colors.white} shadow={4} alignItems={'center'} p={2} borderRadius={20} >
              <Ionicons name="power-outline" size={28} color={'red'} />
              {/* <Text color={'red.600'} fontSize={"xs"}>Sign Out</Text> */}
            </Pressable>
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default Profile;
