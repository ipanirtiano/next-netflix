"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle, ThumbsUp } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import ModalButon from "./ModalButton";

interface modalProps {
  open: boolean;
  setOpen: any;
  movie: any;
  trailer: any;
}

const MovieModal = ({ open, setOpen, movie, trailer }: modalProps) => {
  // state list data movie
  const [list, setList] = useState([]);
  // get movie list by ID movie
  const getMovieList = async () => {
    const response = await axios.get(`/api/favorit/${movie.id}`);
    setList(response.data.data);
    return response.data;
  };

  // use effect get my list movie
  useEffect(() => {
    getMovieList();
  }, [list]);

  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogContent className="w-full">
        <iframe
          src={`https://www.youtube.com/embed/${trailer?.key}`}
          height={250}
          className="w-full"
          allowFullScreen
        ></iframe>
        <DialogHeader className="flex flex-col justify-center items-start">
          <DialogTitle className="w-full">
            <div className="flex flex-wrap items-center gap-4 w-full justify-between font-normal">
              <div className="text-start flex items-center gap-x-2">
                {movie.title}
                {list ? (
                  <CheckCircle className="text-green-600 cursor-pointer w-5 h-5" />
                ) : (
                  ""
                )}
              </div>
              <ModalButon movie={movie} list={list} />
            </div>
          </DialogTitle>
          <DialogDescription className="py-2 flex flex-col justify-center items-start">
            <div className="text-xs text-gray-500">Overview :</div>
            <div className="line-clamp-3 text-left">{movie.overview}</div>
          </DialogDescription>
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-x-2 items-center">
              <div className="text-sm text-gray-500">Release :</div>
              <div className="text-sm">{movie.release_date}</div>
            </div>

            <div className="flex gap-x-2 items-center text-sm">
              <ThumbsUp className="w-4 h-4" />
              {movie.vote_average}
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default MovieModal;
