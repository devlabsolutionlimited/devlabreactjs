import React from "react";
import Banner from "../Banner/Banner";
import Cards from "../Services/Cards";
import Work from "../Work/Work";
import Testimonial from "../../../Component/Testimonial/Testimonial";
import VideoCover from "../Video/VideoCover";
import Team from "../../../Component/Team/Team";
import Blog from "../Blog/Blog";
import Faq from "../Faq/Faq";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Cards></Cards>
      <Work></Work>
      <VideoCover/>
      <Team/>
      <Testimonial></Testimonial>
      {/* <About></About> */}
      <Blog/>
      <Faq/>
      {/* <ImageSection/> */}
    </div>
  );
};

export default Home;
