import styled from 'styled-components';

const ProductImage = styled.img`
  width: 540px;
  height: 480px;
`;

const DivConatiner = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 12px;
`;

const Category = styled.p`
  margin: 0;
`;
const TitleProduct = styled.p`
  font-size: 32px;
  font-weight: 300;
  line-height: 48px;
  margin: 0;
`;
const Price = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
`;

const BtnAddCart = styled.button`
  background: #115d8c;
  color: #f5f5fa;
  text-transform: uppercase;
  font-family: Saira;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 6px;
`;
export {
  ProductImage,
  DivConatiner,
  Category,
  TitleProduct,
  Price,
  BtnAddCart,
};
