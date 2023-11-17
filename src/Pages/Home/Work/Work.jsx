import React, { useState } from "react";
import img1 from "../../../assets/images/work1.jpg";
import img2 from "../../../assets/images/work2.jpg";

const tabs = [
  "All",
  "API Testing",
  "Automation Testing",
  "Blockchain Testing",
  "Security Testing",
  "Desktop App Testing",
  "Game Testing",
  "Mobile App Testing",
  "Performance Testing",
  "Web App Testing",
];

const tabImages = {
  All: [img1, img2],
  "API Testing": [img1, img2],
  "Automation Testing": [img1, img2],
  "Blockchain Testing": [img1, img2],
  "Security Testing": [img1, img2],
  "Desktop App Testing": [img1, img2],
  "Game Testing": [img1, img2],
  "Mobile App Testing": [img1, img2],
  "Performance Testing": [img1, img2],
  "Web App Testing": [img1, img2],
};

const Work = () => {
  const [activeTab, setActiveTab] = useState(0);

  const allImages =
    activeTab === 0
      ? tabs.reduce((acc, tab) => [...acc, ...tabImages[tab]], [])
      : tabImages[tabs[activeTab]];

  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  const tabsInTwoLines = chunkArray(tabs, 5);

  const imagesChunks = chunkArray(allImages, 3);

  return (
    <div className="bg-white">
      <div className="py-28 max-w-7xl mx-auto ">
        <div className="text-center mb-20">
          <p className="text-[20px] font-sans text-primary mb-4">Case Study</p>
          <h1 className="text-4xl font-spartan text-black font-bold mb-6">Our Latest Works</h1>
          <p className=" text-[#727272] mb-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have <br /> suffered alteration in some form.
          </p>
        </div>
        <div className="mb-8 space-y-6">
          {tabsInTwoLines.map((line, lineIndex) => (
            <div
              key={lineIndex}
              className="flex justify-center gap-4 text-[14px]"
            >
              {line.map((tab, tabIndex) => {
                const tabGlobalIndex = lineIndex * 5 + tabIndex;
                return (
                  <div
                    key={tabIndex}
                    className={`cursor-pointer py-4 px-6 font-semibold hover:bg-primary hover:text-white text-center rounded-md ${
                      tabGlobalIndex === activeTab
                        ? "bg-primary text-white "
                        : "bg-gray-200 text-black"
                    }`}
                    onClick={() => setActiveTab(tabGlobalIndex)}
                  >
                    {tab}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="p-4 justify-center">
          <div className="flex flex-wrap justify-start gap-6">
            {imagesChunks.map((chunk, rowIndex) => (
              <div key={rowIndex} className="flex gap-7">
                {chunk.map((imageUrl, colIndex) => (
                  <div key={`${rowIndex}_${colIndex}`} className="relative">
                    <img
                      src={imageUrl}
                      alt={`Item ${rowIndex * 4 + colIndex + 1}`}
                      className="w-[400px] h-[300px] rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 p-4 m-7 rounded-md text-black bg-white">
                      {/* Add your text here */}
                      <p className="text-lg font-semibold">Your Text Here</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
