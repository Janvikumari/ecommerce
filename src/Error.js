import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import {Button} from "./styles/Button";

const Error = () => {
  return (
    <Wrapper>
        <div className="container">
          <div>
            <h2>Oops,</h2>
            <h3>Time to get going!</h3>
            <p>Unfortunately, looks like the page you are looking </p><br></br>
            <p>for has vanished to infinity.</p>
            <NavLink to="/">
            <Button>Go to Home</Button>
            </NavLink>
          
          </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .container{
    padding:4rem 0;
    text-align:center;

    h2{
      font-size:10rem;
    }

    p{
      margin:2rem 0;
    }
    h3{
      font-size:4rem;
    }

  }
`;
export default Error