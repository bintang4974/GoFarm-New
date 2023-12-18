import { HStack } from 'native-base';
import React from 'react';
import { CardProduct } from '../../atoms';

const ListProducts = ({ product, navigation }) => {
    return (
        <HStack flexWrap={"wrap"} justifyContent={"space-between"}>
            {product.map((item) => {
                return (
                    <CardProduct product={item} key={item.id} navigation={navigation} />
                )
            })}
        </HStack>
    )
}

export default ListProducts