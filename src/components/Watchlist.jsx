import MovieCard from './MovieCard.jsx';

export const Watchlist = (props) => {
    const {list, removeMovie} = props;

    const movieDisplay = list.map((movie, i) => {

        return <MovieCard
        key={i}
        movie={movie}
        removeMovie={removeMovie}
        inWatchlist={true}
    >
    </MovieCard>
    });
    
    return <div className="watchlist">
        <h1>My Watchlist</h1>
        <div className='movie-container'>
            {movieDisplay}
        </div>
    </div>   
}

export default Watchlist;