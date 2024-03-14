"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import MovieCards from "./MovieCards";

const RowMovies = ({ movie, rowsId }: { movie: any; rowsId: number }) => {
  // slide left
  const sliderLeft = () => {
    var slider: any = document.getElementById("slider" + rowsId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  // slide right
  const sliderRight = () => {
    var slider: any = document.getElementById("slider" + rowsId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className="relative flex items-center group">
      <span
        className="absolute text-white text-2xl md:text-3xl left-4 z-[10] w-[50px] h-full  items-center justify-center pl-[5px] hidden group-hover:flex cursor-pointer"
        onClick={sliderLeft}
      >
        <ArrowLeft />
      </span>

      <div
        id={"slider" + rowsId}
        className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
      >
        {movie.map((data: any) => {
          return <MovieCards data={data} key={data.id} />;
        })}
      </div>
      <span
        className="absolute text-white text-2xl md:text-3xl right-0 z-[10] w-[50px] h-full  items-center justify-center pl-[5px] hidden group-hover:flex cursor-pointer"
        onClick={sliderRight}
      >
        <ArrowRight />
      </span>
    </div>
  );
};

export default RowMovies;
