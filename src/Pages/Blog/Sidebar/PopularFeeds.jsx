import React from 'react';
import "./Sidebar.css";

const PopularFeeds = () => {
  return (
    <div className="widget popular-feeds">
            <h5 className="widget-title">Trending News</h5>
            <div className="popular-feed-loop">
                <div className="single-popular-feed">
                    <div className="feed-desc">
                        <h6 className="post-title"><a href="blog-single.html">Bringing Great Design
                                    Ideas To Completion</a></h6>
                            <span className="time"><i className="lni lni-calendar"></i> 05th Nov 2023</span>
                    </div>
                </div>
                <div className="single-popular-feed">
                        <div className="feed-desc">
                            <h6 className="post-title"><a href="blog-single.html">Live Life Smart And
                                    Focus On The Positive</a></h6>
                            <span className="time"><i className="lni lni-calendar"></i> 24th March 2023</span>
                        </div>
                </div>
                <div className="single-popular-feed">
                    <div className="feed-desc">
                        <h6 className="post-title"><a href="blog-single.html">How did we get 1M+                                visitors in 30 days without anything!</a></h6>
                        <span className="time"><i className="lni lni-calendar"></i> 30th Jan 2023</span>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default PopularFeeds