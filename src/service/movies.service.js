
const POPULAR_FILMS =
    "https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20";

export default class MoviesService {
    static async getMovies() {
        const response = await fetch(POPULAR_FILMS, { method: "GET" })
        const body = await response.json();

        return body.results.map((movie) => ({name: movie.original_title, img: movie.backdrop_path }))
    }
}
