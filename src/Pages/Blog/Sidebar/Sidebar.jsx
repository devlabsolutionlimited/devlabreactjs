import React from 'react'
import "./Sidebar.css";
import SearchWidget from './SearchWidget';
import PopularFeeds from './PopularFeeds';
import CatagoriesWidget from './CatagoriesWidget';
import PopularTags from './PopularTags';

const Sidebar = () => {
  return (
        <aside className="col-lg-4 col-md-12 col-12">
            <div className="sidebar">
                <SearchWidget />
                <PopularFeeds />
                <CatagoriesWidget />
                <PopularTags />
            </div>
        </aside>
  )
}

export default Sidebar