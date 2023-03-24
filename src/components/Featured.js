import React from 'react'
import styled from "styled-components";
import { prods } from "../Data";
import FeaturedItem from "./FeaturedItem";

const Wrapper = styled.div`
 padding:40px;
 display:flex;flex-wrap:wrap;
 background-color:aliceblue;
`;

const Products = () => {
  return (
    
    <Wrapper>
      {prods.map((item) =>(<FeaturedItem item={item} key={item.id}/> ))}
    </Wrapper>
  )
}

export default Products