

import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

    text-align: center;

    h2.heading{
      color:blue;
      font-size:4rem;
      padding-bottom:1.2rem;
    }
    h3.heading{
      color:navy;
      font-size:3rem;
      padding-bottom:1rem;
    }

    .container {
      margin-top: 6rem;

      .contact{
        max-width: 50rem;
        margin: auto;

        .inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

        

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            background-color:navy;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (<Wrapper>
    <h2 className="heading">We Are Here For You: </h2>
    <h3 className="heading">Get In Touch!</h3>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0228057628387!2d77.21657511478281!3d28.62907858241921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd35732ff587%3A0xb3489e0fc930becf!2sJanpath%20Market!5e0!3m2!1sen!2sin!4v1678436475732!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact">

        <form action="https://formspree.io/f/mleklggr" method="POST" className="inputs">
          <input type="text" placeholder="your name" name="your name" required autoComplete="off"/>
          <input type="email" placeholder="email" name="email" required autoComplete="off"/>
          <textarea placeholder="Enter your text" name="message" cols="30" rows="10" required autoComplete="off"/>
          <input type="submit" value="send"/>
       </form>
      </div>
    </div>
  </Wrapper>);


};

export default Contact;