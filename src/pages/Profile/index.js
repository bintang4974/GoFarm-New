import { Box, Heading, Image, Text } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { dummyProfile } from '../../data';
import { colors } from '../../utils';

const Profile = () => {
  const [profile, setProfile] = useState(dummyProfile);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box backgroundColor={colors.primary} flex={1}>
        <Box position={"absolute"} bottom={0} height={550} width={"100%"} backgroundColor={colors.white} borderTopRadius={40}>
          <Image source={profile.avatar} width={150} height={150} alt='avatar' borderRadius={40} alignSelf={"center"} marginTop={-75} />
          <Box marginTop={2} alignItems={"center"}>
            <Heading fontSize={"lg"}>{profile.name}</Heading>
            <Text>{profile.telp}</Text>
            <Text>{profile.address}</Text>
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  )
}

export default Profile