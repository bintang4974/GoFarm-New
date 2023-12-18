import { Box, Heading, Image, Text } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { dummyMenu, dummyProfile } from '../../data';
import { colors } from '../../utils';
import { ListMenu } from '../../components';

const Profile = () => {
  const [profile, setProfile] = useState(dummyProfile);
  const [menu, setMenu] = useState(dummyMenu);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box backgroundColor={colors.white} flex={1}>
        <Box position={"absolute"} bottom={0} height={550} width={"100%"} backgroundColor={colors.primary} borderTopRadius={40}>
          <Image source={profile.avatar} width={150} height={150} alt='avatar' borderRadius={40} alignSelf={"center"} marginTop={-75} />
          <Box marginTop={2} alignItems={"center"}>
            <Heading fontSize={"lg"} color={colors.white}>{profile.name}</Heading>
            <Text color={colors.white}>{profile.telp}</Text>
            <Text color={colors.white}>{profile.address}</Text>
          </Box>
          <ListMenu menu={menu} />
        </Box>
      </Box>
    </SafeAreaView>
  )
}

export default Profile