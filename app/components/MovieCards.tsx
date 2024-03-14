/* eslint-disable @next/next/no-img-element */
"use client";
import axios from "axios";
import { ThumbsUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { options } from "../utils/requestOptions";
import MovieModal from "./MovieModal";

const MovieCards = ({ data }: { data: any }) => {
  // state modal
  const [open, setOpen] = useState(false);
  // state trailer
  const [trailer, setTrailer] = useState([]);
  // set use effect to get trailer by ID movie
  useEffect(() => {
    // function get trailer by ID movie
    const getTrailer = async () => {
      const dataTrailer = await axios
        .get(`https://api.themoviedb.org/3/movie/${data.id}/videos`, options)
        .then((response) =>
          // set trailer into state trailer
          setTrailer(
            response.data.results.find((vid: any) => vid.type == "Trailer")
          )
        );
    };
    getTrailer();
  }, [trailer, data.id]);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="hover:scale-105 transition-all w-[180px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-[10px]"
      >
        <img
          className="w-full h-auto block"
          src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
          alt={data.title}
        />
        <div>
          <h6 className="line-clamp-1 mt-2">{data.title}</h6>
          <div className="flex items-center w-full justify-between">
            <p className="text-gray-500 text-xs md:text-sm">
              {data.release_date}
            </p>

            <div className="flex gap-x-2 items-center text-xs md:text-sm text-gray-500">
              <ThumbsUp className="w-4 h-4" />
              {data.vote_average}
            </div>
          </div>
        </div>
      </div>

      <MovieModal
        open={open}
        setOpen={setOpen}
        movie={data}
        trailer={trailer}
      />
    </>
  );
};

export default MovieCards;
