import React, { useState } from "react";
import Lottie from "lottie-react";
import ReactPlayer from "react-player";
import image from "../../../assets/images/bg-shapes2.svg";
import vio from "../../../assets/images/Untitled design.mp4";
import Animation from "../../../assets/images/Animation.json";
import Animation1 from "../../../assets/images/Animation1.json";
import { RxCross2 } from "react-icons/rx";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const playVideo = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsPlaying(true);
    }, 2000);
  };

  const stopVideo = () => {
    setIsPlaying(false);
  };

  return (
    <div className="relative h-full w-full bg-white flex items-center justify-center rounded-xl shadow-lg shadow-[#eeeeee]">
      <div>
        <img
          src={image}
          alt=""
          className="w-auto h-auto absolute object-cover top-0 bottom-0 right-0 left-0"
        />
      </div>
      
      <div className="text-black text-center z-10">
        <div className="text-center">
          <h3 className="text-sm font-spartan text-primary font-medium mb-5">
            Create your own experience
          </h3>
          <h1 className="text-4xl text-black font-spartan font-bold mb-7">
            Watch Our intro video
          </h1>
          <p className="text-base text-[#727272] mb-10">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have <br /> suffered alteration in some form.
          </p>
        </div>
        <button
          className=""
          onClick={playVideo}
          disabled={isLoading || isPlaying}
          style={{ position: "" }} 
        >
          {isLoading && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center"
              style={{ zIndex: 1000, width: "100vw", height: "100vh" }}
            >
              <div style={{ width: "200px", height: "200px" }}>
                <Lottie animationData={Animation1} loop={true} />
              </div>
            </div>
          )}
          <p className="h-32 w-32">
            <Lottie animationData={Animation} loop={true} />
          </p>
        </button>
      </div>

      
      {isPlaying && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-90 flex items-center justify-center"
          style={{ zIndex: 1000 }}
        >
          <div className="flex flex-col items-center gap-4">
            <ReactPlayer
              url={vio}
              width="1100px" 
              height="900px" 
              playing={isPlaying}
              controls={true}
              volume={0}
              loop={true}
            />
            <button
              className="text-white text-5xl absolute top-4 right-4"
              onClick={stopVideo}
            >
              <RxCross2 />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
