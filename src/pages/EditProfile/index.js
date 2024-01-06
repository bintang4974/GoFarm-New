import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, Image, Text, Input, Button } from 'native-base';
import { colors } from '../../utils';
import { auth, firestore } from '../../config/FIREBASE';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { updateProfile, updatePassword } from 'firebase/auth';  // Import updatePassword
import { dummyProfile } from '../../data';

const EditProfile = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({
    id: '',
    name: '',
    password: '',  // Change the field name to 'password'
    phone: '',
    alamat: '',
  });
  const [gambar, setGambar] = useState(dummyProfile);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = auth.currentUser;

        if (currentUser) {
          setUser(currentUser);

          const userDocRef = doc(getFirestore(), 'users', currentUser.uid);
          const docSnapshot = await getDoc(userDocRef);

          if (docSnapshot.exists()) {
            setProfile({ id: docSnapshot.id, ...docSnapshot.data() });
          } else {
            console.log('User document does not exist');
          }
        } else {
          console.log('No user is currently logged in');
        }
      } catch (error) {
        console.error('Error fetching user data from Firestore: ', error);
      }
    };

    fetchUserData();
  }, []);

  const handleSaveProfile = async () => {
    if (user) {
      try {
        const userDocRef = doc(getFirestore(), 'users', user.uid);
        // Update the document in Firestore with the new password
        await updateDoc(userDocRef, { ...profile, password: profile.password });

        // Update authentication user data
        await updateProfile(auth.currentUser, {
          displayName: profile.name,
          photoURL: profile.avatar, // Assuming avatar is a URL
        });

        // Update password using updatePassword method
        await updatePassword(auth.currentUser, profile.password);

        console.log('Profile updated:', profile);
        navigation.navigate("Profile");
      } catch (error) {
        console.error('Error updating user profile in Firestore: ', error);
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box backgroundColor={colors.white} flex={1} justifyContent="center" alignItems="center">
        <Box
          position={'absolute'}
          height={550}
          width={'90%'}
          backgroundColor={colors.primary}
          borderTopRadius={20}
          borderBottomRadius={20}
          margin={10}  // Adjust this margin value for spacing
        >
          {/* Display user profile data */}
          <Image
            source={gambar.avatar}
            width={165}
            height={165}
            alt="avatar"
            borderRadius={40}
            alignSelf={'center'}
            marginTop={-75}
          />
          <Box marginTop={4} mx={8}>
            {['Name', 'Password', 'Phone', 'Alamat'].map((field, index) => (
              <Box key={index} mt={1}>
                <Text color={colors.white} ml={2}>
                  {field}
                </Text>
                <Box flexDirection={'row'} alignItems={'center'} mt={1} justifyContent={'space-between'} backgroundColor={colors.white} shadow={2} padding={2} borderRadius={10}>
                  <Input
                    padding={1}
                    borderRadius={10}
                    placeholder={field}
                    value={profile[field.toLowerCase()]}
                    onChangeText={(text) => setProfile({ ...profile, [field.toLowerCase()]: text })}
                  />
                </Box>
              </Box>
            ))}
            <Box mt={6} mx={6}>
              <Button onPress={handleSaveProfile} size="lg" backgroundColor={colors.black} color={colors.primary} borderRadius={10}>
                Save Profile
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default EditProfile;



// import { Box, HStack, Image, Text } from 'native-base';
// import React, { useState } from 'react';
// import { SafeAreaView } from "react-native-safe-area-context";
// import { colors } from '../../utils';
// import { dummyProfile } from '../../data';
// import { Button, Input } from '../../components';

// const EditProfile = () => {
//     const [profile, setProfile] = useState(dummyProfile);

//     return (
//         // <SafeAreaView style={{ flex: 1 }}>
//             <Box backgroundColor={colors.white} flex={1} px={5} paddingTop={5}>
//                 <Input label="Name" value={profile.name} />
//                 <Input label="Email" value={profile.email} />
//                 <Input label="Telp" value={profile.telp} />
//                 <Input label="Address" value={profile.address} />
//                 <Box mt={5}>
//                     <Text fontSize={"md"}>Photo :</Text>
//                     <HStack space={2} alignItems={"center"}>
//                         <Image source={profile.avatar} width={140} height={140} borderRadius={20} alt='avatar' />
//                         <Box flex={1}>
//                             <Button title="Change" type="text" padding={7} />
//                         </Box>
//                     </HStack>
//                 </Box>
//                 <Box my={5}>
//                     <Button title="Submit" type="textIcon" icon="checkout" padding={10} fontColor={colors.white} fontSize={20} backgroundColor={colors.primary} />
//                 </Box>
//             </Box>
//         // </SafeAreaView>
//     )
// }

// export default EditProfile