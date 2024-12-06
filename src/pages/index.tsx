import "./index.css";
import Header from "@src/components/Header/Header";
import MoviesService from "@src/service/movies.service";
import Movie from "@src/components/Movie/Movie";

export default function Home({movies}: {movies:any}) {
  return (
    <div>
      <Header />
        <div>Banner</div>
        <div>
          {movies.map((movie:any) => (
              <Movie key={movie.name} {...movie}/>
          ))}

        </div>
    </div>
  );
}

export async function getServerSideProps() {

  const movies = await MoviesService.getMovies()

  return {
    props: { movies },
  };
}
