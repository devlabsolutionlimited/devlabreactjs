import React from "react";
import { AiOutlineAntDesign } from "react-icons/ai";
import { SiCoinmarketcap } from "react-icons/si";
import {
  MdOutlineDeveloperMode,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { AiOutlineCloudServer } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";

const cardsData = [
  {
    icon: <AiOutlineAntDesign />,
    text: "UI/UX",
    description: "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
  },
  {
    icon: <SiCoinmarketcap />,
    text: "Digital Marketing",
    description: "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
  },
  {
    icon: <MdOutlineDeveloperMode />,
    text: "Web Application",
    description: "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
  },
  {
    icon: <MdOutlineMiscellaneousServices />,
    text: "IT Consulting Service",
    description: "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
  },
  {
    icon: <AiOutlineCloudServer />,
    text: "Mobile Application",
    description: "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
  },
  {
    icon: <RiComputerLine />,
    text: "Graphics Design",
    description: "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
  },
  {
    icon: <AiOutlineAntDesign />,
    text: "SQA",
    description: "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
  },
  {
    icon: <SiCoinmarketcap />,
    text: "Employee Augmentation",
    description: "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
  },
  {
    icon: <MdOutlineDeveloperMode />,
    text: "Oppshore Office Expansion",
    description: "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
  },
  {
    icon: <MdOutlineMiscellaneousServices />,
    text: "Desktop App Development",
    description: "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
  },
  {
    icon: <AiOutlineCloudServer />,
    text: "Games Development",
    description: "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
  },
  {
    icon: <RiComputerLine />,
    text: "Software Testing",
    description: "Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.",
  },
];

const Card = ({ icon, text, description}) => {
  return (
    <div className="bg-white p-11 w-full m-2 rounded-2xl shadow-3xl gap-20 shadow-[#F4F7FA]">
      <div className="flex items-center justify-center mb-6">
        <div className="text-4xl py-3 px-4 bg-primary text-white rounded-lg ">
          {icon}
        </div>
      </div>
      <p className="text-xl text-center font-spartan font-semibold text-black mb-4">{text}</p>
      <p className="text-[16px] text-[#727272] font-sans text-center">{description}</p>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="bg-[#F4F7FA] py-24 px-6">
      <div className="text-center">
        <h3 className="text-lg font-spartan text-primary font-semibold mb-3">What We Offer</h3>
        <h1 className="text-4xl text-black font-spartan font-bold mb-7">Our Services</h1>
        <p className="text-base text-[#727272] mb-20">There are many variations of passages of Lorem Ipsum available, but the majority have <br /> suffered alteration in some form.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
