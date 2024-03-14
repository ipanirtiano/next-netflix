"use client";
import { CheckCircle, PlusCircle, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const ModalButon = ({ movie, list }: { movie: any; list: any }) => {
  const router = useRouter();
  // get session user
  const { data: session } = useSession();
  // state loading
  const [isLoading, setIsLoading] = useState(false);

  const handleAction = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/favorit", {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        backdrop_path: movie.backdrop_path,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        userId: session?.user?.email,
      });
      setIsLoading(false);
      router.refresh();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const hanldeRemoveList = async (id: string) => {
    setIsLoading(true);
    try {
      const response = await axios.delete(`/api/favorit/${id}`);
      router.refresh();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {list ? (
        <div
          onClick={() => hanldeRemoveList(list.id)}
          className="font-normal cursor-pointer text-xs px-[10px] py-[6px] bg-[#e50914] rounded-sm"
        >
          {isLoading ? (
            <div className="flex items-center gap-x-1">
              <p>Loading...</p>
            </div>
          ) : (
            <div className="flex items-center gap-x-1">
              <Trash2 className="w-4 h-4" />
              <p>Remove List</p>
            </div>
          )}
        </div>
      ) : (
        <div
          onClick={handleAction}
          className="font-normal cursor-pointer text-xs px-[10px] py-[6px] border border-gray-200 hover:bg-gray-200 hover:text-gray-800 rounded-sm"
        >
          {isLoading ? (
            <div className="flex items-center gap-x-1">
              <p>Loading...</p>
            </div>
          ) : (
            <div className="flex items-center gap-x-1">
              <PlusCircle className="w-4 h-4" />
              <p>Add To List</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ModalButon;
