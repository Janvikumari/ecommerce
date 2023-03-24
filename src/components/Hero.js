
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const Hero = ({ myData }) => {
    const { name , images }= myData;
  return (<Wrapper>
    <div className="container">
        <div className="grid grid-two-column">
            <div class="hero-data">
                <p className="data">WE WELCOME YOU TO,</p>
                <h1>{ name }</h1>
                <p>
                 Ecommerce stores are a dime a dozen, and if your clothing brand is the same as every other, you’re likely to get lost in the crowd.So explore the one and only TTT.
                </p>
                <NavLink>
                    <Button>
                      SHOP HERE
                    </Button>
                </NavLink>
            </div>
            <div className="hero-img">
                <figure>
                    <img src={images} className="img-style"></img>
                </figure>
            </div>
        </div>
    </div>
  </Wrapper>)
}
const Wrapper = styled.section`
padding: 9rem 0;
img{
    min-width:10rem;
    height:10rem;
}
  .hero-data {
    p{
      margin:2rem 0;
    }
    h1{
        text-transform:capitalize;
        font-weight:bold;
    }
    .hero-data{
        margin-bottom:0;
    }
  }
    .hero-img{
        width:100%;
        height:auto;
        display:flex;
        justify-content:center;
        align-items:center;
    }

  figure{
    position:relative;

    &::after{
        content:"";
        width:60%;
        height:80%;
        left:50%;
        top:-5rem;
        position:absolute;
        z-index:-1;
        background-color:rgba(81, 56, 238, 0.4);

    }
  }
  .img-style{
    width:100%;
    height:45rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 9rem;
    }
    figure::after{
        content:"";
        width:52%;
        height:100%;
        left:0;
        top:10%;
        background-color:rgba(81, 56, 238, 0.4);
    }
  }
`;
export default Hero