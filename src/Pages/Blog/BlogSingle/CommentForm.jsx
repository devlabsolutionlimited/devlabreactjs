import React from 'react';
import "./BlogSingle.css";

const CommentForm = () => {
  return (
    <div className="comment-form">
        <h3 className="comment-reply-title">Leave a comment</h3>
        <form action="#" method="POST">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-box form-group">
                        <input type="text" name="name" className="form-control form-control-custom"
                            placeholder="Name*" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-box form-group">
                        <input type="email" name="email" className="form-control form-control-custom"
                            placeholder="Email*" />
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-box form-group">
                        <textarea name="#" className="form-control form-control-custom"
                            placeholder="Comments*"></textarea>
                    </div>
                </div>
                <div className="col-12">
                    <div className="button">
                        <button type="submit" className="btn">Post Comment</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default CommentForm