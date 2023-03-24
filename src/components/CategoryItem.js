import React from 'react'
import styled from "styled-components"
import {NavLink} from "react-router-dom";
const CategoryItem = ({item}) => {
  return (
    <Wrapper>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
         <Button>
          <NavLink to ="/product">Shop Now</NavLink>
         </Button>
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
 flex:1;
 margin:5px;
 height:50vh;
 position:relative
`;
const Image = styled.img`
 width:90%;
 height:90%
`;
const Info = styled.div` 
 position:absolute;
 top:200px;
 left:0;
 width:90%;
 height:90%;
 display:flex;
 flex-direction:column;
 align-items:center;
 jusrify-content:center;
`;
 const Title = styled.h1` 
 color:navy;
 background-color:white;
 margin-bottom:20px;
 border-radius:5px;
 padding:3px;
 font-size:2rem;
`;
 const Button = styled.button` 
 border:none;
 padding:10px;
 background-color:aliceblue;
 cursor:pointer
 font-weight:bold;
`;
 export default CategoryItem