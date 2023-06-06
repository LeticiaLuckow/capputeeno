import styled from 'styled-components';

const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 34px 160px;
  min-height: calc(100vh - 168px);
  background-color: #dedede;
`;

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style: none;
  padding: 0;
  height: 40px;
`;

const FilterItem = styled.li`
  font-family: Saira;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  color: #737380;

  &:hover {
    font-weight: 600;
    border-bottom: 4px solid #ffa585;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 32px;
  max-width: 100%;
  margin-top: 32px;
`;
export { DivMain, FilterList, FilterItem, ListContainer };
