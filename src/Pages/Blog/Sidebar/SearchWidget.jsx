import React from 'react';
import "./Sidebar.css";

const SearchWidget = () => {
  return (
    <div>
                <div className="widget search-widget">
                    <h5 className="widget-title">Search This Site</h5>
                    <form action="#">
                        <input type="text" placeholder="Search ..." />
                        <button type="submit"><i className="lni lni-search-alt"></i></button>
                    </form>
                </div>
    </div>
  )
}

export default SearchWidget