import React from 'react';
import { Link } from 'react-router-dom';
import "../Blog/Blog.css";
import "./BreadCrumbs.css";

const BreadCrumbs = () => {
  return (
    <div className="breadcrumbs">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                    <div className="breadcrumbs-content">
                        <h1 className="page-title">Blog Grid Sidebar</h1>
                        <ul className="breadcrumb-nav">
                            <li><Link to="/">Home</Link></li>
                            <li>Blog Grid Sidebar</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BreadCrumbs;