import styled from 'styled-components';

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;
`;

const Logo = styled.a`
  color: #737380;
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
  font-family: Saira Stencil One;
`;

const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const InputContainer = styled.div`
  width: 352px;
  background: #f3f5f6;
  border-radius: 8px;
  font-size: 14px;
  display: flex;

  svg {
    position: relative;
    top: 30%;
    transform: translateY(-50%);
  }
`;
const SearchInput = styled.input`
  width: 352px;
  background: #f3f5f6;
  border-radius: 8px;
  padding: 10px 16px;
  font-family: Saira;
  font-weight: 400;
  font-size: 14px;
  border: none;

  &:focus-visible {
    border: none;
    outline: none;
  }
`;

const ButtonSearch = styled.button`
  border: none;
  border-radius: 8px;
  background: #f3f5f6;
  cursor: pointer;
`;

const ContainerCart = styled.div`
  position: relative;
`;

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 100%;
  padding: 0 5px;
  font-size: 10px;
  background-color: #de3838;
  color: white;

  margin-left: -10px;
`;

export {
  TagHeader,
  Logo,
  ContainerFlex,
  SearchInput,
  InputContainer,
  ButtonSearch,
  ContainerCart,
  CartCount,
};
