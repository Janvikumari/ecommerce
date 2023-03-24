import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../styles/Button";

const Navbar = () => {
  const { loginWithRedirect, logout,    isAuthenticated } = useAuth0();
    const[menuIcon, setMenuIcon]= useState();
  const Nav = styled.nav`
    
     .navbar-list{
        display:flex;gap:4.8rem;
        align-items:center;

        li{
            list-style:none;

            .navbar-link{
                    &:link,
                    &:visited {
                      display: inline-block;
                      text-decoration: none;
                      font-size: 1.5rem;
                      text-transform: uppercase;
                      color: ${({ theme }) => theme.colors.black};
                      transition: color 0.3s linear;
                    }
          
                &:hover,&:active{
                    color:${({ theme }) => theme.colors.helper};
                }

            }
        } 
     }
     .cart-trolley--link{
            position:relative;

            .cart-trolley{
                position:relative;
                font-size:3.2rem;
            }

            .cart-total--item{
                width:2.3rem;
                height:2.3rem;
                position:absolute;background-color:#000;
                color:#000;border-radius:50%;
                display:grid;
                left:70%;
                top:-18%;place-items:center;
                background-color:${({ theme }) => theme.colors.helper};
            }
        }
       .mobile-navbar-btn {
            display: none;
            .close {
              display: none;
            }
        }
        .mobile-navbar-btn[name="close"] {
            display: none;
        }
        @media (max-width: ${({ theme }) => theme.media.mobile}) {
            .mobile-navbar-btn {
              display: inline-block;
              z-index: 999;
              border: ${({ theme }) => theme.colors.black};
              .mobile-nav{
                font-size: 4.2rem;
                color: ${({ theme }) => theme.colors.black};
              
            }
        }
        .navbar-list {
            width: 100vw;
            height: 100vh;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-content: center;
            flex-direction: column;
            text-align: center;
            transform: translateX(100%);
            visibility: hidden;
            opacity: 0;
            li {
              .navbar-link {
                &:link,
                &:visited {
                  font-size: 4.2rem;
                }
                &:hover,
                &:active {
                  color: ${({ theme }) => theme.colors.helper};
                }
              }
            }
        }
        .active .mobile-nav{
            display: none;
            font-size: 4.2rem;
            position: absolute;
            top: 3%;
            right: 10%;
            color: ${({ theme }) => theme.colors.black};
            z-index: 9999;
          }
          .active .close {
            display: inline-block;
          }
          .active .navbar-list {
            visibility: visible;
            opacity: 1;
            transform: translateX(0);
            z-index: 999;
          }
          .cart-total--item{
            font-size:1rem;
          }
        }
    }`;

  return (
    <Nav>
      <div className={menuIcon ? "navbar active": "navbar"}>
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link"    onClick={() => setMenuIcon(false)} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link"   onClick={() => setMenuIcon(false)}to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link"  onClick={() => setMenuIcon(false)} to="/product">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link"   onClick={() => setMenuIcon(false)}to="/contact">
              Contact
            </NavLink>
          </li>
          {isAuthenticated ?(<li>
          <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
           Log Out
           </Button></li>
            ) :  (
          <li><Button onClick={() => loginWithRedirect()}>Log In</Button></li>
            )}
          <li>
            <NavLink className="navbar-link cart-trolley--link" to="/cart">
              <FiShoppingCart className="cart" />
              <span className="cart-total--item">11</span>
            </NavLink>
          </li>
        </ul>
        <div className="mobile-navbar-btn">
          <CgMenu name="menu" className="mobile-nav" onClick={()=>setMenuIcon(true)} />
          <CgClose name="close" className="mobile-nav close" onClick={()=>setMenuIcon(false)}  />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
