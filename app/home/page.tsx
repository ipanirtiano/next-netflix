import React from "react";
import MovieVidios from "../components/MovieBanner";
import NowPlaying from "../components/NowPlaying";
import UpcomingMovie from "../components/UpcomingMovie";

const page = async () => {
  return (
    <>
      <div className="p-5 lg:p-0">
        <MovieVidios />
        <NowPlaying rowsId={1} />
        <UpcomingMovie rowsId={2} />
      </div>
    </>
  );
};

export default page;
