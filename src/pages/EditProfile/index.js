import { Box, HStack, Image, Text } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from '../../utils';
import { dummyProfile } from '../../data';
import { Button, Input } from '../../components';

const EditProfile = () => {
    const [profile, setProfile] = useState(dummyProfile);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Box backgroundColor={colors.white} flex={1} px={5} paddingTop={5}>
                <Input label="Name" value={profile.name} />
                <Input label="Email" value={profile.email} />
                <Input label="Telp" value={profile.telp} />
                <Input label="Address" value={profile.address} />
                <Box mt={5}>
                    <Text fontSize={"md"}>Photo :</Text>
                    <HStack space={2} alignItems={"center"}>
                        <Image source={profile.avatar} width={140} height={140} borderRadius={20} alt='avatar' />
                        <Box flex={1}>
                            <Button title="Change" type="text" padding={7} />
                        </Box>
                    </HStack>
                </Box>
                <Box my={5}>
                    <Button title="Submit" type="textIcon" icon="checkout" padding={10} fontColor={colors.white} fontSize={20} backgroundColor={colors.primary} />
                </Box>
            </Box>
        </SafeAreaView>
    )
}

export default EditProfile