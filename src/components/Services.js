
import styled from "styled-components"
import { HiTruck} from "react-icons/hi"
import { MdSecurity} from "react-icons/md"
import { GiReceiveMoney} from "react-icons/gi"
import { RiSecurePaymentLine} from "react-icons/ri"

const Services = () => {
  return (<Wrapper>
    <div className="container">
        <div className="grid grid-three-column">
            <div className='services-1'>
                <div>
                    <HiTruck className="icon"/>
                    <h3>Free, Fast and Secure Delivery</h3>
                </div>
            </div>
            <div className="services-2">
                <div className="services-col2">
                    <div >
                      <MdSecurity className='icon'/>
                     <h3>Non-Contact Shipping</h3>
                    </div>
                </div>
                <div className="services-col2">
                    <GiReceiveMoney className="icon"/>
                    <h3>Moneyback Guaranteed</h3>
                </div>
            </div>
            <div className='services-3'>
                <div>
                    <RiSecurePaymentLine className="icon"/>
                    <h3>Highly Secured Payments</h3>
                </div>
            </div>
        </div>
    </div>
  </Wrapper>
  );
};
const Wrapper = styled.section`
  PADDING:9REM 0;

 .grid{
    gap:4.5rem;
 }
 .services-1,
 .services-2,
 .services-3{
     width:auto;
     height:28rem;
     align-content:center;
     display:flex;
     flex-direction:column;
     justify-content:center;
     background: ${({ theme })=> theme.colors.bg};
     text-align:center;
     border-radius:2rem;
     box-shadow:rgba(0, 0, 0, 0.05)0px 2px 1px 0px;
   }
  .icon{
    color:navy;
    font-size: 4.2rem;
  }

   .services-2{
    gap:4rem;
    background-color:transparent;
    box-shadow:none;
      
      .services-col2{
        background: ${({theme}) => theme.colors.bg};
        display:flex;
        flex-direction:row;
        flex:1;
        justify-content:center;
        align-items:center;
        border-radius:2rem;
        box-shadow:rgba(0, 0, 0, 0.05)0px 2px 1 px 0px;

          div{
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
            gap:1rem;
         }
      }
   }

}`;

export default Services