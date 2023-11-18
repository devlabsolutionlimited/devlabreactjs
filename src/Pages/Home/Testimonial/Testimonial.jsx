import React, { useState } from "react";
import img from "../../../assets/images/user.webp";
import img1 from "../../../assets/images/quotation.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Card = ({ id, title, description, image, name, logo }) => {
  return (
    <div className="bg-white p-10 rounded-lg shadow-md relative overflow-hidden">
      <div className="top-right-corner bg-primary p-7 rounded-full -mt-7 -mr-7 absolute top-0 right-0"></div>

      <p className="text-[#727272] text-start text-base mb-8">{description}</p>

      <div className="text-start flex items-center">
        <div>
          <img
            src={image}
            alt={title}
            className="w-14 h-14 object-cover rounded-full mb-4 mx-auto"
          />
        </div>
        <div className="flex flex-col ml-3">
          <h4 className="text-sm font-spartan text-black font-medium">
            {title}
          </h4>
          <p className="text-[#727272] text-xs font-medium font-spartan mb-4">
            {name}
          </p>
        </div>
        <div className=" ml-20 mb-4">
          <img src={logo} alt="" className="w-12 h-12" />
        </div>
      </div>
    </div>
  );
};

const CardGrid = () => {
  const [cards] = useState([
    {
      id: 1,
      title: "Jems Gilario",
      description:
        "A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.",
      image: img,
      name: "Graphics Designer",
      logo: img1,
    },
    {
      id: 2,
      title: "David Warner",
      description:
        "A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.",
      image: img,
      name: "Web Developer",
      logo: img1,
    },
    {
      id: 3,
      title: "Somalia D Silva",
      description:
        "A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.",
      image: img,
      name: "Business Manager",
      logo: img1,
    },
    {
      id: 4,
      title: "Jems Gilario ",
      description:
        "A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.",
      image: img,
      name: "Graphics Designer",
      logo: img1,
    },
    {
      id: 5,
      title: "Jems Gilario ",
      description:
        "A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.",
      image: img,
      name: "Graphics Designer",
      logo: img1,
    },
    {
      id: 6,
      title: "Jems Gilario ",
      description:
        "A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.",
      image: img,
      name: "Graphics Designer",
      logo: img1,
    },
    {
      id: 7,
      title: "Jems Gilario ",
      description:
        "A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.",
      image: img,
      name: "Graphics Designer",
      logo: img1,
    },
    {
      id: 8,
      title: "Jems Gilario ",
      description:
        "A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.",
      image: img,
      name: "Graphics Designer",
      logo: img1,
    },
    {
      id: 9,
      title: "Jems Gilario ",
      description:
        "A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.",
      image: img,
      name: "Graphics Designer",
      logo: img1,
    },
  ]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bg-[#F4F7FA] pt-[200px] pb-28">
      <div className="text-center">
        <h3 className="text-base font-spartan text-primary font-semibold mb-3">
          What We Offer
        </h3>
        <h1 className="text-4xl text-black font-spartan font-bold mb-7">
          Our Services
        </h1>
        <p className="text-base text-[#727272] mb-20">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have <br /> suffered alteration in some form.
        </p>
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {cards.map((_, index) => (
            <div
              key={index}
              className="h-2 w-2 bg-primary rounded-full cursor-pointer"
            />
          ))}
        </div>
        <Carousel
          responsive={responsive}
          swipeable={true}
          itemClass="px-3"
          customLeftArrow={<></>}
          customRightArrow={<></>}
        >
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CardGrid;
