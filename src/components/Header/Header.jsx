import { SearchIcon } from '../../assets/icons/SearchIcon';
import { InputContainer, Logo, SearchInput, TagHeader } from './styles';

const Header = () => {
  return (
    <TagHeader>
      <Logo>Capputeeno</Logo>
      <InputContainer>
        <input placeholder="Procurando por algo específico?" />

        <SearchIcon />
      </InputContainer>
    </TagHeader>
  );
};

export default Header;
