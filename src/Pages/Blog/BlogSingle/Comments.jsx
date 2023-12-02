import React from 'react';
import "./BlogSingle.css";
import comment1 from "../../../assets/images/blog/comment1.jpg";
import comment2 from "../../../assets/images/blog/comment2.jpg";

const Comments = () => {
  return (
    <div className="post-comments">
        <h3 className="comment-title"><span>02 Comments on this post</span></h3>
        <ul className="comments-list">
            <li>
                <div className="comment-img">
                    <img src={comment1} alt="img" />
                </div>
                <div className="comment-desc">
                    <div className="desc-top">
                        <h6>Wiliym Smith</h6>
                        <span className="date">28 Dec 2023</span>
                        <a href="javascript:void(0)" className="reply-link"><i
                                className="lni lni-reply"></i>Reply</a>
                    </div>
                    <p>
                        Donec aliquam ex ut odio dictum, ut consequat leo interdum. Aenean nunc
                        ipsum, blandit eu enim sed, facilisis convallis orci. Etiam commodo
                        lectus
                        quis vulputate tincidunt. Mauris tristique velit eu magna maximus
                        condimentum.
                    </p>
                </div>
            </li>
            <li>
                <div className="comment-img">
                    <img src={comment2} alt="img" />
                </div>
                <div className="comment-desc">
                    <div className="desc-top">
                        <h6>Jenifer Lofez</h6>
                        <span className="date">25 Mar 2023</span>
                        <a href="javascript:void(0)" className="reply-link"><i
                                className="lni lni-reply"></i>Reply</a>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam.
                    </p>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Comments