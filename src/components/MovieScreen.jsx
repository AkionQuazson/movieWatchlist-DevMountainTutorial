import MovieCard from './MovieCard.jsx';

export const MovieScreen = (props) => {
    const {list, page, setPage, movieList} = props;
    const movieDisplay = movieList.map((movie, i) => {
        return <MovieCard
            key={i}
            movie={movie}
        >
            {/* {movie.original_title} */}
        </MovieCard>
    })
    
    return <div className="page">
        <h1>Spencer's Movie Theatre</h1>
        <h3>Add a movie to your watchlist.</h3>
        <div className="movie-container">
            {movieDisplay}
        </div>
    </div>
}

export default MovieScreen;