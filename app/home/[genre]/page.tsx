import RowMovies from "@/app/components/RowMovies";
import { options } from "@/app/utils/requestOptions";

async function getDataMovie(genre: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${genre}`,
    options
  );
  // return data movie json
  return response.json();
}

const page = async ({ params }: { params: { genre: string } }) => {
  const data = await getDataMovie(params.genre);

  return (
    <div className="md:pt-[70px] pt-[50px] md:px-0 px-4">
      <div className="py-4">
        <h2 className="text-white font-semibold md:text-xl">
          {params.genre === "now_playing"
            ? "Now Playing"
            : params.genre === "upcoming"
            ? "Up Coming"
            : params.genre === "top_rated"
            ? "Popular"
            : ""}
        </h2>

        <RowMovies movie={data.results} rowsId={1} />
      </div>
    </div>
  );
};

export default page;
