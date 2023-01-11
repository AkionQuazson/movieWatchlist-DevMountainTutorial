export const MovieCard = (props) => {
    const {movie, addMovie, removeMovie, inWatchlist} = props;
    
    const button = inWatchlist ? 
    (<button onClick={() => {removeMovie(movie)}}>Remove from List</button>) : 
    (<button onClick={() => {addMovie(movie)}}>Add to List</button>);

    return <div className="movie-card">
        <div>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.original_title} />
            <h3>{movie.original_title}</h3>
        </div>
        {button}
    </div>
}

export default MovieCard;