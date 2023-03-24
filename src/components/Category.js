import React from 'react'
import styled from 'styled-components';
import {products} from "../Data";
import CategoryItem from "./CategoryItem";

const Category = () => {
  return (
    <Wrapper>
      {products.map(item=>(
        <CategoryItem item={item} key={item.id}/>
      ))}
    </Wrapper>
  )
}
const Wrapper = styled.section`
display:flex;padding:20px;justify-content:space-between;`;


export default Category