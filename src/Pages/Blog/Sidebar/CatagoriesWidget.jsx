import React from 'react';
import "./Sidebar.css";

const CatagoriesWidget = () => {
  return (
    <div className="widget categories-widget">
                    <h5 className="widget-title">Categories</h5>
                    <ul className="custom">
                        <li>
                            <a href="javascript:void(0)">Creative</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">Technology</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">Startup</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">Branding</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">Web Design</a>
                        </li>
                    </ul>
        </div>
  )
}

export default CatagoriesWidget