// get all now showing movie
import { options } from "../utils/requestOptions";
import RowMovies from "./RowMovies";

async function getDataMovie() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing",
    options
  );
  // return data movie json
  return response.json();
}

const NowPlaying = async ({ rowsId }: { rowsId: number }) => {
  const data = await getDataMovie();

  return (
    <div className="py-4">
      <h2 className="text-white font-semibold md:text-xl">Now Playing</h2>

      <RowMovies movie={data.results} rowsId={rowsId} />
    </div>
  );
};

export default NowPlaying;
