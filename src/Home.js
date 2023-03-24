import React from 'react'
import Hero from "./components/Hero";
import Services from './components/Services';
import Faith from './components/Faith';
import Category from './components/Category';
import Featured from "./components/Featured";
 
const Home = () => {
  const data={
    name:"GO TRENDY",
    images:"./images/cover.jpg",
  };
  return (
  <>
  <Hero myData={data}/>
  <Category/>
  <Featured/>
  <Services/>
  <Faith/>
  </>
  );
};
export default Home;