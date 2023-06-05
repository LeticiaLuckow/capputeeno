import { useEffect, useState } from 'react';
import { Card, DivInfo, DivLine, ImageCard, PriceP, TitleH3 } from './styles';

const ProductCard = ({image, title, price}) => {
 

  return (
    <Card>
      <ImageCard src={image} />

      <DivInfo>
        <TitleH3>{title}</TitleH3>
        <DivLine></DivLine>
        <PriceP>R$ {price}</PriceP>
      </DivInfo>
    </Card>
  );
};

export default ProductCard;
