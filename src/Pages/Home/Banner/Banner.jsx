import React from "react";
import img1 from "../../../assets/images/logo/adobe.png";
import backgroundImg from "../../../assets/images/Banner.png";

const Banner = () => {
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={containerStyle}>
      <div className="max-w-7xl flex justify-center mx-auto items-center gap-56 py-36">
        {/* first section */}

        <div className="flex flex-col mt-44">
          <div className="flex pl-5">
            <img
              src={img1}
              alt=""
              className="w-16 h-16 rounded-full object-cover ml-8 mb-12 moveArrow"
            />
          </div>
          <div className="">
            <img
              src={img1}
              alt=""
              className="w-14 h-14 rounded-full object-cover moveArrow"
            />
          </div>
          <div className="flex ml-24">
            <img
              src={img1}
              alt=""
              className="w-32 h-32 rounded-full object-cover moveArrow"
            />
          </div>
          <div className="flex mr-11">
            <img
              src={img1}
              alt=""
              className="w-14 h-14 rounded-full object-cover moveArrow"
            />
          </div>
        </div>

        {/* second section */}

        <div className="mx-8 text-center max-w-xl space-y-4 mb-40">
          <p className="text-2xl font-caveatt font-semibold text-primary">
            Testimonial
          </p>
          <p className="text-5xl font-bold pb-20">
            What our customer <br />
            says about us
          </p>
          <div className="flex justify-center "></div>
          <p className="text-lg font-sans font-bold">
            "There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered altera,tion in some form, by injected
            humour, or randomised words which don't look even m you"
          </p>
          <p className="text-lg text-[#727272]">-By lara datta actor </p>
        </div>

        {/* thired section */}

        <div className="flex flex-col mt-44">
          <div className="flex pr-32">
            <img
              src={img1}
              alt=""
              className="w-16 h-16 object-cover rounded-full mb-3"
            />
          </div>
          <div className="flex ml-28">
            <img
              src={img1}
              alt=""
              className="w-10 h-10 object-cover rounded-full mb-3"
            />
          </div>
          <div className="flex">
            <img
              src={img1}
              alt=""
              className="w-14 h-14 object-cover rounded-full mb-3"
            />
          </div>
          <div className="ml-20">
            <img
              src={img1}
              alt=""
              className="w-32 h-32 object-cover rounded-full mb-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
