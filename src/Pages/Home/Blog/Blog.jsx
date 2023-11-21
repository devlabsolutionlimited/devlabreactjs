import React from "react";
import Card from "./Card";
import img1 from "../../../assets/images/icon/blog-1.png";
import img2 from "../../../assets/images/icon/blog-2.png";
import img3 from "../../../assets/images/icon/blog-3.png";

const Blog = () => {
  const cards = [
    {
      image: img1,
      date: "2023-11-21",
      name: "John Doe",
      title: "Branding Involves Developing a Strategy to Creating.",
      description:
        "Lorem ipsum dolor sit amet, adipscing elitr, sit gifted sed diam nonumy eirmod tempor ividunt dolore..",
      link: "https://example.com/card1",
    },
    {
      image: img2,
      date: "2023-11-22",
      name: "Jane Smith",
      title: "Branding Involves Developing a Strategy to Creating.",
      description:
        "Lorem ipsum dolor sit amet, adipscing elitr, sit gifted sed diam nonumy eirmod tempor ividunt dolore..",
      link: "https://example.com/card2",
    },
    {
      image: img3,
      date: "2023-11-23",
      name: "Bob Johnson",
      title: "Branding Involves Developing a Strategy to Creating.",
      description:
        "Lorem ipsum dolor sit amet, adipscing elitr, sit gifted sed diam nonumy eirmod tempor ividunt dolore..",
      link: "https://example.com/card3",
    },
  ];

  return (
    <div className="bg-white py-28">
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
      <div className="flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
