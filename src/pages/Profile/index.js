import { Box, Heading, Image, Text } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { dummyMenu, dummyProfile } from '../../data';
import { colors } from '../../utils';
import { ListMenu } from '../../components';
import { auth } from '../../config/FIREBASE';

const Profile = ({ navigation }) => {
  const [profile, setProfile] = useState(dummyProfile);
  const [menu, setMenu] = useState(dummyMenu);
  const user = auth.currentUser;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box backgroundColor={colors.white} flex={1}>
        <Box position={"absolute"} bottom={0} height={550} width={"100%"} backgroundColor={colors.primary} borderTopRadius={40}>
          <Image source={profile.avatar} width={150} height={150} alt='avatar' borderRadius={40} alignSelf={"center"} marginTop={-75} />
          <Box marginTop={2} alignItems={"center"}>
            <Heading fontSize={"lg"} color={colors.white}>{user.email}</Heading>
            <Text color={colors.white}>{profile.telp}</Text>
            <Text color={colors.white}>{profile.address}</Text>
          </Box>
          <ListMenu menu={menu} navigation={navigation} />
        </Box>
      </Box>
    </SafeAreaView>
  )
}

export default Profile