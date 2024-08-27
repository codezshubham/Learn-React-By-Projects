import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";

const Testimonial = ({ reviews }) => {

  return (

    <div className="w-[100vw] h-[100vh] relative bg-gray-200 overflow-y-scroll">
      <div className=" w-[380px] md:w-[768px] lg:w-[1100px] min-w-[400px] min-h-[100vh] mx-auto flex flex-col justify-center">
      <div className="text-center ">
        <h1 className="text-3xl font-bold mt-4 mb-4">My Teams</h1>
        <div className="bg-green-700 h-[4px] w-[180px] mt-1 mx-auto rounded-xl"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-y-32 mt-28 mb-14">
        {reviews.map((review, idx) => (
          <div key={idx} className="w-[280px] h-[380px] min-h-[320px] min-w-[280px] rounded-t-3xl rounded-b-lg 
         bg-white hover:shadow-2xl hover:shadow-green-700 hover:scale-105 hover:opacity-300 transition all duration-300 rounded-md mx-auto relative">
            <div className="absolute -top-20 right-20 z-50 ">
              <img
                src={review.image}
                alt={review.name}
                loading="lazy"
                className="rounded-full w-32 h-32 border-8 border-green-700 shadow-xl opacity-100 hover:shadow-2xl hover:shadow-green-700"
              />
            </div>
            <div className="text-center px-4">
              <p className="font-bold text-xl mt-16 ">{review.name}</p>
              <p className="text-green-700 text-sm">{review.job}</p>
              <p className="font-medium text-gray-600 mt-4 leading-normal">{review.text}</p>
            </div>


            <div className="absolute bottom-0 w-full h-10 bg-green-700 flex justify-evenly mt-5 rounded-b-lg ">
              <a href={review.linkedin}>
                <BiLogoLinkedinSquare style={{ color: 'white', fontSize: "25px" }} className="mt-2 cursor-pointer" />
              </a>
              <a href={review.twitter} >
                <FaSquareXTwitter style={{ color: 'white', fontSize: "25px" }} className="mt-2 cursor-pointer" />
              </a>
              <a href={review.instagram} >
                <GrInstagram style={{ color: 'white', fontSize: "22px" }} className="mt-2 cursor-pointer" />
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Testimonial;

