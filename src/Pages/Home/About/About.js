import React from "react";
import about from '../../../assets/images/about/about-image.jpg'

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={about} alt=""
            className="w-2/4 rounded-lg shadow-2xl"
          />
          <div>
            <p>DECENTRALISED ECONOMY</p>
            <h1 className="text-5xl font-bold">We’ve built a platform to buy and sell shares.</h1>
            <p className="py-6">
            Spend real fights effective anything extra by leading. Mouthwatering leading how real formula also locked-in have can mountain thought. Jumbo plus shine sale.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
