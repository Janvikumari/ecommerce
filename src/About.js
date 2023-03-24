
import  Hero from './components/Hero';

const About = () => {
    const data={
        name:" THE TRENDS ",
        images:"./images/cover2.jpg",
    };
  return (
  <>
   <Hero myData={data}/>;
  </>
  );
};

export default About;