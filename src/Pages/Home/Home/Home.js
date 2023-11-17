import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Cards from "../Services/Cards";
import Work from "../Work/Work";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Cards></Cards>
      <Work></Work>
      <Testimonial></Testimonial>
      <About></About>
    </div>
  );
};

export default Home;
