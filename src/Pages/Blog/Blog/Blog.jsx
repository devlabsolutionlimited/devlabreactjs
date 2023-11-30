import "./Blog";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import BlogGrid from "../BlogGrid/BlogGrid";
import Sidebar from "../Sidebar/Sidebar";


  const Blog = () => {
  
    return (
      <div>
        <BreadCrumbs />
          <section className="section blog-grid-page mx-[100px]">
          <div className="container">
              <div className="row">
                  <BlogGrid />
                  <Sidebar />            
              </div>
          </div>
      </section>
      </div>
 
    );
  };

  export default Blog;