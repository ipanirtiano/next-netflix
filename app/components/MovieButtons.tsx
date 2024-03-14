"use client";
import { Button } from "@/components/ui/button";
import { InfoIcon, PlayCircle } from "lucide-react";
import { useEffect, useState } from "react";
import MovieModal from "./MovieModal";
import { options } from "../utils/requestOptions";
import axios from "axios";

const MovieButtons = ({ movie, trailer }: { movie: any; trailer: any }) => {
  // state modal
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="text-gray-100 bg-[#e50914] hover:bg-[#ff525b]"
      >
        <PlayCircle className="mr-2 h-6 w-6" /> Play
      </Button>
      <Button
        onClick={() => setOpen(true)}
        variant={"outline"}
        className="text-lg font-medium border border-white bg-transparent hover:bg-white hover:text-gray-800"
      >
        <InfoIcon className="mr-2 h-6 w-6" /> Learn More
      </Button>

      <MovieModal
        open={open}
        setOpen={setOpen}
        movie={movie}
        trailer={trailer}
      />
    </>
  );
};

export default MovieButtons;
