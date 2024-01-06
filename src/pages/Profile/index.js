import { Box, Heading, Image, Text } from "native-base";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../utils";
import { ListMenu } from "../../components";
import { dummyMenu, dummyProfile } from "../../data";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { auth } from "../../config/FIREBASE";

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box backgroundColor={colors.white} flex={1}>
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
          {menu.map((menuItem) => (
            <ListMenu
              key={menuItem.id}
              menu={menuItem}
              navigation={navigation}
            />
          ))}
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default Profile;

// import { Box, Heading, Image, Text } from 'native-base';
// import React, { useState } from 'react';
// import { SafeAreaView } from "react-native-safe-area-context";
// import { dummyMenu, dummyProfile } from '../../data';
// import { colors } from '../../utils';
// import { ListMenu } from '../../components';
// import { auth } from '../../config/FIREBASE';

// const Profile = ({ navigation }) => {
//   const [profile, setProfile] = useState(dummyProfile);
//   const [menu, setMenu] = useState(dummyMenu);
//   const user = auth.currentUser;
//   console.log("user: ", user)

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <Box backgroundColor={colors.white} flex={1}>
//         <Box position={"absolute"} bottom={0} height={550} width={"100%"} backgroundColor={colors.primary} borderTopRadius={40}>
//           <Image source={profile.avatar} width={150} height={150} alt='avatar' borderRadius={40} alignSelf={"center"} marginTop={-75} />
//           <Box marginTop={2} alignItems={"center"}>
//             <Heading fontSize={"lg"} color={colors.white}>{user.email}</Heading>
//             <Text color={colors.white}>{user.displayName}</Text>
//             <Text color={colors.white}>{user.alamat}</Text>
//           </Box>
//           <ListMenu menu={menu} navigation={navigation} />
//         </Box>
//       </Box>
//     </SafeAreaView>
//   )
// }

// export default Profile
