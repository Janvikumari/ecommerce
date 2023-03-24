import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from "../styles/Button";
import {  FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {FaMapMarkerAlt} from "react-icons/fa";
import {BsFillTelephoneFill} from "react-icons/bs";
import {MdEmail} from "react-icons/md";

const Footer = () => {
    return (<Wrapper>
        <section className="cts">
            <div className="grid grid-two-column">
                <div>
                    <h3>
                        Drop us a message
                    </h3>
                    <h3>Talk to us:</h3>
                </div>
                <div className="ctn">
                    <Button>
                       <NavLink to="/contact">START</NavLink>
                    </Button>
                </div>
            </div>
        </section>

        <footer>
            <div className="container grid grid-four-column">
                <div className="about">
                    <h3>GO TRENDY</h3>
                    <p>The ultimate clothing website to see the world in.</p>

                </div>

                <div className="subscribe">
                  <h2>NEWSLETTER</h2>
                    <h3>Get updated about your favourite products.</h3>
                    <form action="https://formspree.io/f/mleklggr" method="POST">
                        <input
                            type="email"
                            required
                            autoComplete="off"
                            placeholder="Email"
                            name="email"
                        />
                        <input type="submit" value="Subscribe" />
                        
                    </form>
                </div>

                <div className="social">
                    <h3>Follows Us</h3>
                    <div className="footer-icons">
                        <div>
                            <a 
                              href="https://github.com/Janvikumari?tab=repositories" target="_blank">
                            <FaGithub className="icons" /></a>
                        </div>
                        <div>
                            <a href="https://twitter.com/Janvikumari765" target="_blank">
                            <FaTwitter className="icons" /></a>
                        </div>
                        <div>
                            <a
                                href="https://www.linkedin.com/in/janvi-kumari-69ba2a217/"
                                target="_blank">
                                <FaLinkedin className="icons" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-contact">
                  <BsFillTelephoneFill className="icons"/>+91 9836354636
                  <FaMapMarkerAlt className='icons'/>Janpath Market, New Delhi
                  <MdEmail/>gettrendy@outlook.com
                </div>
            </div>

            <div className="footer-bottom">
                <hr />
                <div className="container grid grid-two-column">
                    <p>
                        &#169;{new Date().getFullYear()} GOtrendy. All Rights Reserved
                    </p>
                    <div>
                        <p>PRIVACY POLICY</p>
                        <p>TERMS & CONDITIONS</p>
                    </div>
                </div>
            </div>
        </footer>
    </Wrapper>);
};

const Wrapper = styled.section`
 .cts{
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .ctn {
    justify-self: end;
    align-self: center;
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h2{
      color:white;
      font-size:23px;
      font-weight:700;
      text-align:center;
      padding-bottom:20px;
    }
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .footer-contact{
      display: flex;
      gap: 1.4rem;
      flex-direction:column;
      color:white;
      font-size:20px;
    }
    .footer-bottom {
      padding-top: 9rem;
      hr {
        margin-bottom: 0.5rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .cts {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }
    footer .footer-bottom {
      padding-top: 3.2rem;
    }
  }
  
`;


export default Footer