import { Box } from 'native-base';
import React from 'react';
import { CardMenu } from '../../atoms';

const ListMenu = ({ menu, navigation }) => {
    return (
        <Box>
            {menu.map((item) => {
                return <CardMenu menu={item} key={item.id} navigation={navigation} />
            })}
        </Box>
    )
}

export default ListMenu