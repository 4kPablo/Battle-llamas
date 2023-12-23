import React from "react";
import { AiFillCloseCircle as CloseButton } from "react-icons/ai";

export const ProductDetailsPopup = ({
  clickedProduct,
  visibleDetails,
  toggleDetails,
}) => {
  if (visibleDetails) {
    return (
      <div className="flex fixed bg-[#000c] sm:bg-transparent sm:backdrop-blur-sm justify-center items-center h-full w-full">
        <div className="flex flex-col md:flex-row text-center items-center h-full md:h-1/2 w-[50em] lg:text-xl gap-5 px-10 py-20 mt-14 rounded-lg text-white bg-black">
          <img
            className="flex-1 h-[20em] object-cover rounded-lg"
            src={clickedProduct.img}
          />
          <div className="flex flex-1 flex-col bg-slate-900">
            <h2 className="text-2xl lg:text-3xl">{clickedProduct.title}</h2>
            <h3 className="text-xl lg:text-2xl">{clickedProduct.subtitle}</h3>
            <p className="mt-2 text-[#D9BD8B]">{clickedProduct.description}</p>
          </div>
        </div>
        <CloseButton
          className="text-4xl relative sm:-top-44 sm:-left-14 select-none hover:cursor-pointer text-white hover:text-[#a6121f] active:text-[#a6121f]"
          onClick={() => toggleDetails()}
        />
      </div>
    );
  }
};
