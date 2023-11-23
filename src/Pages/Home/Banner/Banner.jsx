import React from "react";
import img1 from "../../../assets/images/logo/adobe.png";
import img2 from "../../../assets/images/logo/figma.png";
import img3 from "../../../assets/images/logo/flutter.png";
import img4 from "../../../assets/images/logo/qwik.png";
import img5 from "../../../assets/images/logo/science.png";
import img6 from "../../../assets/images/logo/vue.png";
import img7 from "../../../assets/images/logo/science.png";
import img8 from "../../../assets/images/logo/vue.png";


const Testimonial = () => {
  return (
    <div className="flex bg-white justify-center mx-auto items-center gap-20 py-52">
     
      <div className="flex flex-col">
        <div className="flex pl-5">
          <img
            src={img4}
            alt=""
            className="w-16 h-16 rounded-full object-contain ml-8 mb-12"
          />
        </div>
        <div className="">
          <img
            src={img5}
            alt=""
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
        <div className="flex ml-24">
          <img
            src={img1}
            alt=""
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <div className="flex mr-11">
          <img
            src={img8}
            alt=""
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
      </div>

      
      <div className="mx-8 text-center max-w-2xl space-y-4">
        <p className="text-4xl text-black font-bold">
          We Develab <span className="text-primary">Software</span> Solutions That Bring You <span className="text-primary">Success </span>
        </p>
        <div className="flex justify-center ">
          
        </div>
        <p className="text-lg text-[#727272] font-sans font-bold">
          "There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered altera,tion in some form, by injected
          humour, or randomised words which don't look even m you"
        </p>
      </div>

      
      <div className="flex flex-col">
        <div className="flex pr-32">
          <img
            src={img2}
            alt=""
            className="w-16 h-16 object-cover rounded-full mb-3"
          />
        </div>
        <div className="flex ml-28">
          <img
            src={img3}
            alt=""
            className="w-10 h-10 object-cover rounded-full mb-3"
          />
        </div>
        <div className="flex">
          <img
            src={img6}
            alt=""
            className="w-14 h-14 object-cover rounded-full mb-3"
          />
        </div>
        <div className="ml-20">
          <img
            src={img7}
            alt=""
            className="w-32 h-32 object-cover rounded-full mb-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
