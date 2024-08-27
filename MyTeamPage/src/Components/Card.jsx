import React from "react";
import './Card.css'
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";

const Card = ({ review }) => {

    return (
        <div >
            <div className="absolute -top-20 right-20 z-50 ">
                <img
                    src={review.image}
                    alt={review.name}
                    className="rounded-full w-32 h-32 border-8 border-green-700 shadow-xl"
                />
            </div>
            <div className="text-center px-4">
            <p className="font-bold text-xl mt-16 ">{review.name}</p>
            <p className="text-green-700 text-sm">{review.job}</p>
            <p className="font-medium text-gray-600 mt-4 leading-normal">{review.text}</p>
            </div>
            

            <div className="absolute bottom-0 w-full h-10 bg-green-700 flex justify-evenly mt-5 rounded-b-lg ">
                <a href={review.linkedin}>
                <BiLogoLinkedinSquare style={{color:'white', fontSize:"25px"}} className="mt-2 cursor-pointer"/>
                </a>
                <a href={review.twitter} >
                <FaSquareXTwitter style={{color:'white', fontSize:"25px"}} className="mt-2 cursor-pointer"/>
                </a>
                <a href={review.instagram} >
                <GrInstagram style={{color:'white', fontSize:"22px"}} className="mt-2 cursor-pointer"/>
                </a>
            </div>
        </div>
    );
};

export default Card;
