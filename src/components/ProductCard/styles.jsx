import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 6px 6px 0 0;
  width: 256px;
`;

const ImageCard = styled.img`
  width: 256px;
  height: 300px;
  border-radius: 6px 6px 0 0;
  object-fit: cover;
  object-position: center;
`;

const DivInfo = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  padding: 8px 0;
`;

const TitleH3 = styled.h3`
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  color: #41414d;
  margin: 0;
`;

const DivLine = styled.div`
  width: 228px;
  height: 1px;
  margin: 8px 0;
  padding: 0px;
  background: #dce2e5;
`;

const PriceP = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: #09090a;
  margin: 0;
`;

export { Card, ImageCard, DivInfo, TitleH3, DivLine, PriceP };
