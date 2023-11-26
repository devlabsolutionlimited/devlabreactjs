import Card from "./Card";
import img1 from "../../../assets/images/icon/blog-1.png";
import img2 from "../../../assets/images/icon/blog-2.png";
import img3 from "../../../assets/images/icon/blog-3.png";
  
  const Blog = () => {
    const cards = [
      {
        image: img1,
        date: "2023-11-21",
        name: "John Doe",
        title: "Branding Involves Developing a Strategy to Creating.",
        description:
          "Lorem ipsum dolor sit amet, adipscing elitr, sit gifted sed diam nonumy eirmod tempor ividunt dolore..",
        link: "https://example.com/card1",
      },
      {
        image: img2,
        date: "2023-11-22",
        name: "Jane Smith",
        title: "Branding Involves Developing a Strategy to Creating.",
        description:
          "Lorem ipsum dolor sit amet, adipscing elitr, sit gifted sed diam nonumy eirmod tempor ividunt dolore..",
        link: "https://example.com/card2",
      },
      {
        image: img3,
        date: "2023-11-23",
        name: "Bob Johnson",
        title: "Branding Involves Developing a Strategy to Creating.",
        description:
          "Lorem ipsum dolor sit amet, adipscing elitr, sit gifted sed diam nonumy eirmod tempor ividunt dolore..",
        link: "https://example.com/card3",
      },
    ];
  
    return (
      <div className="bg-white py-28 px-[200px]">
        <div className="flex felx-row justify-center w-[80%]">
            <div className="flex flex-wrap justify-center col-lg-8">
                {cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
            <div className="col-lg-4 max-w-[410px] max-w-[410px] rounded overflow-hidden shadow-lg m-4">
                <div className="max-w-[510px] px-4 rounded overflow-hidden shadow-lg m-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-[510px]" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  };

  export default Blog;