import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { DivMain, FilterItem, FilterList, ListContainer } from './styles';
import { useParams } from 'react-router-dom';

const Store = () => {
  const [productSummary, setProductSummary] = useState();
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch(`http://localhost:1337/api/produtos?populate=*`)
      .then((Response) => Response.json())
      .then((data) => {
        console.log('data', data);
        setProduct(data.data);
      });
  }, []);

  return (
    <DivMain>
      <FilterList>
        <FilterItem>Todos os produtos</FilterItem>
        <FilterItem>Camisetas</FilterItem>
        <FilterItem>Canecas</FilterItem>
      </FilterList>

      <ListContainer>
        {product &&
          product.map((bolinha) => (
            <ProductCard
              image={
                'http://localhost:1337' +
                bolinha?.attributes?.image?.data[0]?.attributes?.url
              }
              title={bolinha?.attributes?.title}
              price={bolinha?.attributes?.price.toFixed(2)}
            />
          ))}
      </ListContainer>
    </DivMain>
  );
};

export default Store;
