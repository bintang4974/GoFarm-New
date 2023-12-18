import { Box } from 'native-base';
import React from 'react';
import { CardMenu } from '../../atoms';

const ListMenu = ({ menu }) => {
    return (
        <Box>
            {menu.map((item) => {
                return <CardMenu menu={item} key={item.id} />
            })}
        </Box>
    )
}

export default ListMenu