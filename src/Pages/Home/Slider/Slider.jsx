import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../../../assets/images/PET.png";
import img2 from "../../../assets/images/PET_MOBILE.png";
import img3 from "../../../assets/images/PET_MOBILE1.png";
import img4 from "../../../assets/images/PET_MOBILE2.jpg";
import img5 from "../../../assets/images/PET2.png";
import img6 from "../../../assets/images/PET3.jpg";

const AutoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderContent = [
    { id: 1, androidImage: img2, tabImage: img1 },
    { id: 2, androidImage: img3, tabImage: img5 },
    { id: 3, androidImage: img4, tabImage: img6 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderContent.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="flex justify-end items-start relative h-screen mt-24 pb-20">
      {/* Android Shape Slider */}
      <div className="bg-white p-4 rounded-[50px] w-[310px] h-[630px] shadow-lg transition-transform duration-500 ease-in-out transform translate-x-28 translate-y-32" style={{ zIndex: 2 }}>
        <Carousel
          selectedItem={currentIndex}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          {sliderContent.map((item) => (
            <div key={item.id}>
              <img src={item.androidImage} alt={`Android Shape ${item.id}`} className="w-full h-full rounded-3xl object-cover" />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Tab View Slider */}
      <div className="bg-white p-8 w-[897px] h-[625px] shadow-lg rounded-xl transition-transform duration-500 ease-in-out" style={{ zIndex: 1 }}>
        <Carousel
          selectedItem={currentIndex}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          {sliderContent.map((item) => (
            <div key={item.id}>
              <img src={item.tabImage} alt={`Tab View ${item.id}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default AutoSlider;



















// import React, { useState, useEffect } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles
// import img1 from "../../../assets/images/PET.png";
// import img2 from "../../../assets/images/PET_MOBILE.png";
// import img3 from "../../../assets/images/PET_MOBILE1.png";
// import img4 from "../../../assets/images/PET_MOBILE2.jpg";


// const AutoSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const sliderContent = [
//     { id: 1, androidImage: img2, tabImage: img1 },
//     { id: 2, androidImage: img3, tabImage: img1 },
//     { id: 3, androidImage: img4, tabImage: img6 },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderContent.length);
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   return (
//     <div className="flex justify-end items-start relative h-screen mt-24">
//       {/* Android Shape Slider */}
//       <div className="bg-white p-4 rounded-[50px] w-[310px] h-[630px] shadow-lg  transition-transform duration-500 ease-in-out transform translate-x-16 translate-y-32" style={{ zIndex: 2 }}>
//         <Carousel
//           selectedItem={(currentIndex + 1) % sliderContent.length}
//           showArrows={false}
//           showStatus={false}
//           showThumbs={false}
//         >
//           {sliderContent.map((item) => (
//             <div key={item.id}>
//               <img src={item.androidImage} alt={`Android Shape ${item.id}`} className="w-full h-full object-cover" />
//             </div>
//           ))}
//         </Carousel>
//       </div>

//       {/* Tab View Slider */}
//       <div className="bg-white p-8 rounded-lg w-[897px] h-[625px]  shadow-lg transition-transform duration-500 ease-in-out" style={{ zIndex: 1 }}>
//         <Carousel
//           selectedItem={currentIndex}
//           showArrows={false}
//           showStatus={false}
//           showThumbs={false}
//         >
//           {sliderContent.map((item) => (
//             <div key={item.id}>
//               <img src={item.tabImage} alt={`Tab View ${item.id}`} className="w-full h-full object-cover" />
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default AutoSlider;
