import React from 'react';
import Pagination from './Pagination';
import BlogCard from './BlogCard';
import img1 from "../../../assets/images/icon/blog-1.png";
import img2 from "../../../assets/images/icon/blog-2.png";
import img3 from "../../../assets/images/icon/blog-3.png";


const BlogGrid = () => {
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
    <div className="col-lg-8 col-md-12 col-12">
        <div className="row">
            {cards.map((card, index) => (
                <BlogCard key={index} {...card} />
            ))}
        </div>
        <Pagination />
    </div>
  )
}

export default BlogGrid