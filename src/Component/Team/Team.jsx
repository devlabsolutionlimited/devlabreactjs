import React from "react";
import User1 from "../../assets/images/user1.jpg";
import User2 from "../../assets/images/user2.jpg";
import User3 from "../../assets/images/user3.jpg";
import User4 from "../../assets/images/user4.jpg";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    position: "Full Stack Developer",
    image: User1,
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "UX Designer",
    image: User2,
  },
  {
    id: 3,
    name: "Bob Johnson",
    position: "Frontend Developer",
    image: User3,
  },
  {
    id: 4,
    name: "Alice Williams",
    position: "Backend Developer",
    image: User4,
  },
];

const Team = () => {
  return (
    <div className="bg-white pt-[200px] ">
      <div className="text-center mb-28">
        <h3 className="text-lg font-sans  text-primary font-medium mb-5">
        Expert Team
        </h3>
        <h1 className="text-4xl text-black font-spartan font-bold mb-7">
        Meet Our Team
        </h1>
        <p className="text-base text-[#727272] mb-10">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have <br /> suffered alteration in some form.
        </p>
      </div>
      <div className="flex justify-center items-center pb-48 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-36">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="text-center relative group transition-transform transform hover:scale-105"
            >
              <div className="border-black overflow-hidden">
                <img
                  src={member.image}
                  alt=""
                  className="object-cover w-[200px] h-[200px] border-[1px] border-[#eeeeee] p-4 rounded-full mb-7"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-base font-spartan text-black font-semibold">
                  {member.name}
                </h3>
                <p className="text-gray-500 font-sans text-sm">
                  {member.position}
                </p>
              </div>
              <div className="social-icons flex opacity-0 group-hover:opacity-100 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 transition-opacity duration-300">
                <FaFacebook className="text-black text-base mr-5" />
                <FaTwitter className="text-black text-base mr-5" />
                <FaLinkedin className="text-black text-base mr-5" />
                <FaInstagram className="text-black text-base" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
