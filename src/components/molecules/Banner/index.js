import { Box, Image } from 'native-base';
import React from 'react';
import { Slider1 } from '../../../assets';
import { colors } from '../../../utils';

const Banner = () => {
  return (
    <Box shadow={6} backgroundColor={"yellow"} borderRadius={5} width={300} overflow={"hidden"} ml={3} mr={3} my={2}>
        <Image source={Slider1} alt='banner' width={"100%"} />
    </Box>
  )
}

export default Banner