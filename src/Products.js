import React from 'react'
import styled from "styled-components";
import Featured from "./components/Featured";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  text-align:center;
  color:navy;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  
`;
const Option = styled.option``;

const Products = () => {
  return (
    <Container>
      <Title>POPULAR PRODUCTS</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Yellow</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XL</Option>
            <Option>L</Option>
            <Option>M</Option>
            <Option>S</Option>
            <Option>XS</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option selected>Oldest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>

          </Select>
        </Filter>
      </FilterContainer>
      <Featured />
    </Container>
  );
};


export default Products