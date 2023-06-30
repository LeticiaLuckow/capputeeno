import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { DivMain } from '../../components/Store/styles';
import {
  BtnAddCart,
  Category,
  DivConatiner,
  Price,
  ProductImage,
  TitleProduct,
} from './styles';
import BackButton from '../../components/BackButton/BackButton';

const Product = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <DivMain>
        <BackButton onClick={() => navigate(-1)} />

        <DivConatiner>
          <ProductImage src="https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/a/caneca-bento-cafe-glassral-300ml_758369.jpg" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Category>Caneca</Category>
            <TitleProduct>Caneca de ceramica rustica</TitleProduct>
            <Price>R$ 40,00</Price>
            <p>Descrição</p>
            <span>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s.
            </span>

            <div>
              <BtnAddCart>adicionar ao carrinho</BtnAddCart>
            </div>
          </div>
        </DivConatiner>
      </DivMain>
    </>
  );
};

export default Product;
