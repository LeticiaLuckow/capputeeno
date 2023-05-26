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

const InputContainer = styled.div`
  width: 352px;
  background: #f3f5f6;
  border-radius: 8px;
  padding: 10px 16px;
  font-family: Saira;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #737380;
  border: none;
`;
// const SearchInput = styled.input`
//   width: 352px;
//   background: #f3f5f6;
//   border-radius: 8px;
//   padding: 10px 16px;
//   font-family: Saira;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 22px;
//   color: #737380;
//   border: none;
// `;

// const InputContainer = styled.div`
//   position: relative;
//   width: 352px;

//   svg {
//     position: absolute;
//     right: 20px;
//     top: 50%;
//     transform: translateY(-50%);
//   }
// `;

export { TagHeader, Logo, SearchInput, InputContainer };
