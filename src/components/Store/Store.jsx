import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { DivMain, FilterItem, FilterList, ListContainer } from './styles';

const Store = () => {
  const [productSummary, setProductSummary] = useState();
  const [product, setProduct] = useState();
  const [category, setCategory] = useState('');

  useEffect(() => {
    
    fetch(
      `http://localhost:1337/api/produtos?${category}&populate=*`,
    )
      .then((Response) => Response.json())
      .then((data) => {
        console.log('data', data);
        setProduct(data.data);
      });
  }, [category]);


  return (
    <DivMain>
      <FilterList>
        <FilterItem onClick={() => setCategory('')}>
          Todos os produtos
        </FilterItem>
        <FilterItem onClick={() => setCategory('filters[category][$eq]=camiseta') }>
          
          Camisetas
        </FilterItem>
        <FilterItem onClick={() => setCategory('filters[category][$eq]=caneca')}>Canecas</FilterItem>
      </FilterList>

      <ListContainer>
        {product &&
          product.map((card) => (
            <ProductCard
              image={
                'http://localhost:1337' +
                card?.attributes?.image?.data[0]?.attributes?.url
              }
              title={card?.attributes?.title}
              price={card?.attributes?.price.toFixed(2)}
            />
          ))}
      </ListContainer>
    </DivMain>
  );
};

export default Store;
