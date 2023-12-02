import React from 'react';
import Sidebar from "../Sidebar/Sidebar";
import SinglePost from './SinglePost';
import Comments from './Comments';
import CommentForm from './CommentForm';
import "../Blog/Blog.css";
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';


const BlogSingle = () => {
  return (
    <>
    <BreadCrumbs />
    <section class="section blog-single mx-[200px] px-[110px]">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12 col-12">
                    <SinglePost />
                    <Comments />
                    <CommentForm />
                </div>
                <Sidebar />
            </div>
        </div>
    </section>
    </>
  )
}

export default BlogSingle;