import React, { useState } from "react";
import img1 from "../../../assets/images/ux.png";

const cardsData = [
  {
    icon: img1,
    text: "UI/UX",
    description: "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
  },
  {
    icon: img1,
    text: "Digital Marketing",
    description: "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
  },
  {
    icon: img1,
    text: "Web Application",
    description: "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
  },
  {
    icon: img1,
    text: "IT Consulting Service",
    description: "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
  },
  {
    icon: img1,
    text: "Mobile Application",
    description: "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
  },
  {
    icon: img1,
    text: "Graphics Design",
    description: "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
  },
  {
    icon: img1,
    text: "SQA",
    description: "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
  },
  {
    icon: img1,
    text: "Employee Augmentation",
    description: "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
  },
  {
    icon: img1,
    text: "Oppshore Office Expansion",
    description: "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
  },
  {
    icon: img1,
    text: "Desktop App Development",
    description: "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
  },
  {
    icon: img1,
    text: "Games Development",
    description: "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
  },
  {
    icon: img1,
    text: "Software Testing",
    description: "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
  },
];

const Card = ({ icon, text, description }) => {
  return (
    <div className="bg-white p-11 w-full m-2 rounded-2xl shadow-3xl gap-20 shadow-[#F4F7FA]">
      <div className="flex items-center justify-center mb-6">
        <img src={icon} alt={text} className="text-6xl py-3 px-4 bg-primary text-white rounded-lg" />
      </div>
      <p className="text-xl text-center font-spartan font-semibold text-black mb-4">{text}</p>
      <p className="text-[16px] text-[#727272] font-sans text-center">{description}</p>
    </div>
  );
};

const Cards = () => {
  const [showAllCards, setShowAllCards] = useState(false);

  const visibleCards = showAllCards ? cardsData : cardsData.slice(0, 6);

  return (
    <div className="bg-[#F4F7FA] py-24 px-6">
      <div className="text-center">
        <h3 className="text-lg font-spartan text-primary font-semibold mb-3">What We Offer</h3>
        <h1 className="text-4xl text-black font-spartan font-bold mb-7">Our Services</h1>
        <p className="text-base text-[#727272] mb-20">There are many variations of passages of Lorem Ipsum available, but the majority have <br /> suffered alteration in some form.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {visibleCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          className="text-white py-3 px-5 bg-primary font-semibold text-lg cursor-pointer"
          onClick={() => setShowAllCards(!showAllCards)}
        >
          {showAllCards ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default Cards;
