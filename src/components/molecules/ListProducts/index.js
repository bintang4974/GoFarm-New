import { HStack } from 'native-base';
import React from 'react';
import { CardProduct } from '../../atoms';

const ListProducts = ({ product }) => {
    return (
        <HStack flexWrap={"wrap"} justifyContent={"space-between"}>
            {product.map((item) => {
                return (
                    <CardProduct product={item} key={item.id} />
                )
            })}
        </HStack>
    )
}

export default ListProducts