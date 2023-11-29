import React from 'react';
import "./BlogGrid";

const Pagination = () => {
  return (
    <div className="pagination left">
        <ul className="pagination-list">
            <li><a href="javascript:void(0)">Prev</a></li>
            <li className="active"><a href="javascript:void(0)">2</a></li>
            <li><a href="javascript:void(0)">3</a></li>
            <li><a href="javascript:void(0)">4</a></li>
            <li><a href="javascript:void(0)">Next</a></li>
        </ul>
    </div>
  )
}

export default Pagination;