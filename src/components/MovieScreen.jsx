import MovieCard from './MovieCard.jsx';

export const MovieScreen = (props) => {
    const {list, page, setPage, movieList, addMovie, removeMovie} = props;
    const movieDisplay = movieList.map((movie, i) => {
            
        const inWatchlist = list.filter((mov) => {
            return mov.id === movie.id;
        });
        
        if (inWatchlist.length === 0) {
            return <MovieCard
                key={i}
                movie={movie}
                removeMovie={removeMovie}
                inWatchlist={false}
                addMovie={addMovie}
            >
            </MovieCard>
        }
        else {
            return <></>;
        }
    })

    const decrement = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    }
    const increment = () => {
        if (movieList.length >= 20) {
            setPage(page + 1);
        }
    }
    
    return <div className="page">
        <h1>Spencer's Movie Theatre</h1>
        <div className='btn-container'>
            <button onClick={() => decrement()}>Previous</button>
            <button onClick={() => increment()}>Next</button>
        </div>
        <h3>Add a movie to your watchlist.</h3>
        <div className="movie-container">
            {movieDisplay}
        </div>
    </div>
}

export default MovieScreen;