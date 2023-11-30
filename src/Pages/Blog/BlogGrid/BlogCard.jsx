import React from 'react';
import "./BlogGrid.css";

const BlogCard = ({ image, date, name, title, description, link }) => {
  return (
    <div className="col-lg-6 col-md-6 col-12">
        <div className="single-blog-grid">
            <div className="blog-img">
                <a href="#none">
                    <img src={image} alt="Card" />
                </a>
            </div>
            <div className="blog-content">
                <div className="meta-info">
                    <a className="date" href="#none"><i className="lni lni-timer"></i>{date}
                    </a>
                    <a className="author" href="#none"><i className="lni lni-user"></i> {name}
                    </a>
                </div>
                <h4>
                    <a href="#none">{title}</a>
                </h4>
                <p>{description}</p>
                <div className="button">
                    <a href={link} className="btn">Read More</a>
                </div>
            </div>
        </div>
    </div>
  )
}




export default BlogCard;
