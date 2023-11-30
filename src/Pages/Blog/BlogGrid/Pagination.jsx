import React from 'react';
import "./BlogGrid.css";

const Pagination = () => {
  return (
    <div className="pagination left">
        <ul className="pagination-list">
            <li><a href="#none">Prev</a></li>
            <li className="active"><a href="#none">2</a></li>
            <li><a href="#none">3</a></li>
            <li><a href="#none">4</a></li>
            <li><a href="#none">Next</a></li>
        </ul>
    </div>
  )
}

export default Pagination;