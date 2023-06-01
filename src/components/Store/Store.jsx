import ProductCard from '../ProductCard/ProductCard';
import { DivMain, FilterItem, FilterList, ListContainer } from './styles';

const Store = () => {
  return (
    <DivMain>
      <FilterList>
        <FilterItem>Todos os produtos</FilterItem>
        <FilterItem>Camisetas</FilterItem>
        <FilterItem>Canecas</FilterItem>
      </FilterList>

      <ListContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ListContainer>
    </DivMain>
  );
};

export default Store;
