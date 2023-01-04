export const MovieCard = (props) => {
    const {movie} = props;

    return <div className="movie-card">
        <div>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.original_title} />
        </div>
        <button>Add to List</button>
    </div>
}

export default MovieCard;