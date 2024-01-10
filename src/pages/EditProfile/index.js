import { updatePassword, updateProfile } from 'firebase/auth';
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import { Box, Button, Image, Input, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from '../../config/FIREBASE';
import { dummyProfile } from '../../data';
import { colors } from '../../utils';

const EditProfile = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({
    id: '',
    name: '',
    password: '',
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

        // Ensure the password field is not undefined
        const updatedProfile = { ...profile };
        if (!updatedProfile.password) {
          delete updatedProfile.password; // Remove the password field if it is undefined
        }

        // Update the document in Firestore with the new password
        await updateDoc(userDocRef, updatedProfile);

        // Update authentication user data
        await updateProfile(auth.currentUser, {
          displayName: updatedProfile.name,
          photoURL: updatedProfile.avatar, // Assuming avatar is a URL
        });

        // Update password using updatePassword method
        if (updatedProfile.password) {
          await updatePassword(auth.currentUser, updatedProfile.password);
        }

        console.log('Profile updated:', updatedProfile);
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
          margin={10}
        >
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
