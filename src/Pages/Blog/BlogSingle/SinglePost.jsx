import React from 'react';
import "../Blog/Blog.css";
import blogSingleImage from "../../../assets/images/blog/blog-single.jpg";
import blogInner1 from "../../../assets/images/blog/blog-inner1.jpg";
import blogInner2 from "../../../assets/images/blog/blog-inner2.jpg";


const SinglePost = () => {
  return (
    <div className="single-inner">
        <div className="post-details">
            <div className="main-content-head">
                <div className="post-thumbnils">
                    <img src={blogSingleImage} alt="#" />
                </div>
                <div className="meta-information">
                    <h2 className="post-title">Branding Involves Developing Strategy to Create a Point of
                        Differentiation.
                    </h2>
                    <ul className="meta-info">
                        <li>
                            <a href="#none">By Martin King</a>
                        </li>
                        <li>
                            <a href="#none">20 Jun 2023</a>
                        </li>
                        <li>
                            <a href="#none">Marketing</a>
                        </li>
                    </ul>
                </div>
                <div className="detail-inner">
                    <p>With over 25,000 customers worldwide, Appex is the world leading analytics and
                        marketing suite for Instagram and a partner of the world's most-loved brands
                        such as National Geographic, Gucci, Marc Jacobs, Samsung, Emirates and more.</p>
                    <p>As a Customer Support Specialist, we expect you to be up-to-date with the latest
                        digital technologies and social media trends. You should have excellent
                        communication skills and be able to assist our customers in a fast, efficient
                        and professional manner. If you enjoy fixing issues and helping improve the
                        overall customer experience, this job is for you!</p>
                    <h3>How We Do A Concert In Pandemic
                    </h3>
                    <div className="image-block">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12">
                                <img src={blogInner1} alt="#" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <img src={blogInner2} alt="#" />
                            </div>
                        </div>
                    </div>
                    <p>Bring to the table win-win survival strategies to ensure proactive domination. At
                        the end of the day, going forward, a new normal that has evolved from generation
                        X is on the runway

                    </p>
                    <p>Heading towards a streamlined cloud solution. User generated content in real-time
                        will have multiple touchpoints for offshoring Capitalize on low hanging fruit to
                        identify a ballpark value added activity to beta test. Override the digital
                        divide with additional

                    </p>
                    <h3>Security and Reliability
                    </h3>
                    <p>Capitalize on low hanging fruit to identify a ballpark value added activity to
                        beta test. Override the digital divide with additional clickthroughs from
                        DevOps. Nanotechnology immersion along the information highway will close the
                        loop on focusing solely on the bottom line.

                    </p>
                    <blockquote>
                        <div className="icon">
                            <i className="lni lni-quotation"></i>
                        </div>
                        <h4>"Don't demand that things happen as you wish, but wish that they happen as
                            they
                            do
                            happen, and you will go on well."</h4>
                        <span>- Epictetus, The Enchiridion</span>
                    </blockquote>
                    <h3>Setting the mood with incense</h3>
                    <p>Bring to the table win-win survival strategies to ensure proactive domination. At
                        the end of the day, going forward, a new normal that has evolved from generation
                        X is on the runway heading towards a streamlined cloud solution. User generated
                        content in real-time</p>
                    <p>Completely synergize resource taxing relationships via premier niche markets.
                        Professionally cultivate one-to-one customer service with robust ideas.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SinglePost