import React, { useState } from "react";
import img from "../../../assets/images/user.webp";
import img1 from "../../../assets/images/quotation.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Card = ({ id, title, description, image, name, logo }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <p className="text-[#727272] text-base">{description}</p>

      <div className="text-center">
        <img
          src={image}
          alt={title}
          className="w-20 h-20 object-cover rounded-full mb-4 mx-auto"
        />
        <div className="flex justify-between">
          <h4 className="text-xl font-spartan text-black font-medium mb-2">
            {title}
          </h4>
          <p className="text-[#727272] text-sm font-medium font-spartan mb-4">
            {name}
          </p>
        </div>
        <div className="flex justify-center mt-4">
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

  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  const groupedCards = chunkArray(cards, 3);

  return (
    <div className="bg-[#F4F7FA] py-28">
      <div className="max-w-7xl mx-auto w-full">
        <Carousel
          autoPlay
          interval={3000}
          showThumbs={false}
          showStatus={false}
          infiniteLoop
        >
          {groupedCards.map((group, index) => (
            <div key={index} className="flex justify-center gap-6">
              {group.map((card) => (
                <Card key={card.id} {...card} />
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CardGrid;
