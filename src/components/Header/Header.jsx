import { CartIcon } from '../../assets/icons/CartIcon';
import { SearchIcon } from '../../assets/icons/SearchIcon';

import {
  ButtonSearch,
  CartCount,
  ContainerCart,
  ContainerFlex,
  InputContainer,
  Logo,
  SearchInput,
  TagHeader,
} from './styles';

const Header = () => {
  return (
    <TagHeader>
      <Logo>Capputeeno</Logo>

      <ContainerFlex>
        <InputContainer>
          <SearchInput placeholder="Procurando por algo específico?" />
          <ButtonSearch>
            <SearchIcon />
          </ButtonSearch>
        </InputContainer>

        <ContainerCart>
          <CartIcon />
          <CartCount>2</CartCount>
        </ContainerCart>
      </ContainerFlex>
    </TagHeader>
  );
};

export default Header;
