import React from 'react'
import styled  from "styled-components"

const Faith = () => {
  return (
    <Wrapper className="brand">
        <div className="container">
            <h3>
                Trusted by 200+ Top Companies
            </h3>
            <div className='brand-slider'>
                <div className='slide'>
                    <img src="./images/ajio.jpg"/>
                </div>
                <div className='slide'>
                    <img src="./images/shein.png"/>
                </div>
                <div className='slide'>
                    <img src="./images/zaraimg.png"/>
                </div>
                <div className='slide'>
                    <img src="./images/hm-symbol-logo.png"/>
                </div>
                <div className='slide'>
                    <img src="./images/myntra_.avif"/>
                </div>
            </div>
        </div>

    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding:8rem 0;
  background-color:${({theme}) => theme.colors.bg};

  .brand{
    padding:10rem 0 0 0;
  }
  h3{
    text-align:center;
    text-transform:capitalize;
    color:${({ theme })=> theme.colors.text};
    font-size:2rem;
    font-weight:bold;
  }
  img{
    min-width:10rem;
    height:10rem;
  }
  .brand-slider{
    margin-top:3rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:row;
  }
  @media (max-width: ${({theme}) => theme.media.mobile})
  {
    .brand-slider{
        margin-top:3rem;
        text-align:center;
        display:grid;
        grid-template-columns:1fr 1fr;
    }
  }
`;
export default Faith