import React from "react";
import { options } from "../utils/requestOptions";
import MovieButtons from "./MovieButtons";

// get data movie API
async function getDataMovie() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing",
    options
  );
  // return data movie json
  return response.json();
}

// get trailer by ID movie
async function getTrailer(id: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos`,
    options
  );
  // returnn trailer
  return response.json();
}

const MovieVidios = async () => {
  // init data movies
  const data = await getDataMovie();

  // get random data movie
  const movieBanner =
    data.results[Math.floor(Math.random() * data.results.length)];

  // fetch trailer movie
  const dataTrailer = await getTrailer(movieBanner.id);
  // set trailer
  const trailer = dataTrailer.results.find((vid: any) => vid.type == "Trailer");

  return (
    <div className="h-[65vh] lg:h-[100vh] w-full flex justify-start items-center">
      <div className="absolute bottom-[34vh] lg:bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-black"></div>
      <video
        poster={`https://image.tmdb.org/t/p/original/${movieBanner?.backdrop_path}`}
        autoPlay
        muted
        loop
        src={`https://image.tmdb.org/t/p/original/${movieBanner?.backdrop_path}`}
        className="w-full absolute top-0 left-0 h-[65vh] md:h-[100vh] object-cover -z-10 brightness-[55%]"
      ></video>

      <div className="absolute w-[90%] lg:w-[40%] mx-auto">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold">
          {movieBanner?.title}
        </h1>
        <p className="text-white mt-5 line-clamp-3 md:line-clamp-4">
          {movieBanner?.overview}
        </p>
        <div className="flex gap-x-3 mt-4">
          <MovieButtons movie={movieBanner} trailer={trailer} />
        </div>
      </div>
    </div>
  );
};

export default MovieVidios;
