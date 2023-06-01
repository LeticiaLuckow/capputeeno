import { Card, DivInfo, DivLine, ImageCard, PriceP, TitleH3 } from './styles';

const ProductCard = () => {
  return (
    <Card>
      <ImageCard src="https://cdn.awsli.com.br/866/866032/produto/37341546/3209c78f98.jpg" />

      <DivInfo>
        <TitleH3>caneca</TitleH3>
        <DivLine></DivLine>
        <PriceP> R$ 39,00</PriceP>
      </DivInfo>
    </Card>
  );
};

export default ProductCard;
