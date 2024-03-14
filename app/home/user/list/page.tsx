import RowMovies from "@/app/components/RowMovies";
import { authOptions } from "@/app/utils/authOptions";
import prisma from "@/prisma/prisma_db";
import { getServerSession } from "next-auth";

// get movie list by user email
const getMyListMovie = async (email: any) => {
  const response = await prisma.movie_list.findMany({
    where: {
      userEmailId: email,
    },
  });

  return response;
};

const page = async () => {
  // get session
  const session = await getServerSession(authOptions);

  // get my list movie
  const myListMovie = await getMyListMovie(session?.user?.email);

  return (
    <div className="md:pt-[70px] pt-[50px] md:px-0 px-4">
      <div className="py-4">
        <h2 className="text-white font-semibold md:text-xl">My List</h2>

        <RowMovies movie={myListMovie} rowsId={1} />
      </div>
    </div>
  );
};

export default page;
