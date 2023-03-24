import {BsCartPlusFill } from "react-icons/bs"
import {GrSearch } from "react-icons/gr"
import {AiTwotoneHeart} from "react-icons/ai"
import styled from "styled-components"


const Info =styled.div`
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
z-index:3;
opacity:0;
display:flex;
align-items:center;
justify-content:center;
transition:all 0.4s ease-in;
`;
const Wrapper = styled.div`
flex:1;
margin:8px;
min-width:300px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
position:relative;

 &:hover ${Info}{
 opacity:1;
 }
`;
const Image =styled.img`
height:90%;
z-index:2;
min-width:250px;
`;
const Icon =styled.div`
width:10%;
font-size:12px;
background-color:white;
height:10%;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
margin:10px;
transition:all 0.4s ease-in;

&:hover {
 background-color:#e9f5f5;
 transform:scale(1.2);
}

`;
const Cost = styled.div` 
 background:navy;
 border-radius:6px 0 0 6px;
 color:white;
 cursor:pointer;
 display:inline-block;
 font-size:1.3rem;
 height:31px;
 line-height:31px;
 margin-right:2rem;
 padding:0 0.667rem;
 position:relative;
 text-align:center;
`;
const FilterWrap = styled.div`
display:flex;
justify-content:space-between;
`;
const Title = styled.h1`
margin:20px
`;

const Filter = styled.div``;
const FeaturedItem = ({item}) =>{
 return(
   <Wrapper>

      <Image src={item.img}/>
      <Cost>{item.cost}</Cost>
      <Info>
        <Icon>
          <BsCartPlusFill/>
        </Icon>
        <Icon>
          <GrSearch/>
        </Icon>
        <Icon>
          < AiTwotoneHeart/>
        </Icon>
      </Info>
   </Wrapper>
 );
};
export default FeaturedItem