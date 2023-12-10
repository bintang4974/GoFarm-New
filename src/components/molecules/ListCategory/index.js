import { Box, Text, HStack } from 'native-base';
import React from 'react';
import { CardCategory } from '../../atoms';

const ListCategory = ({ category }) => {
    return (
        <HStack justifyContent={"space-between"}>
            {category.map((item) => {
                return (
                    <CardCategory category={item} key={item.id} />
                )
            })}
        </HStack>
    )
}

export default ListCategory