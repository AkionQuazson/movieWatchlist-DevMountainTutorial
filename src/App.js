import {useEffect, useState} from 'react';
import Header from './components/Header.jsx';
import Watchlist from './components/Watchlist.jsx';
import MovieScreen from './components/MovieScreen.jsx';
import './App.css';

import axios from 'axios';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);

   const getData = () => {
      axios
          .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
          .then((res) => {
              setMovieList(res.data.results);
          });
  };
  
  useEffect(() => {
      getData();
  }, [page]);

  const addMovie = (movie) => {
	setWatchList([...watchList, movie]);
  }

  const removeMovie = (movie) => {
	const newState = watchList.filter((mov) => {
		return mov !== movie;
	});
	setWatchList(newState);
  }

  return (
    <div className="App">
      <Header />
	  <main>
		<MovieScreen 
			list={watchList}
			page={page}
			setPage={setPage}
			movieList={movieList}
			addMovie={addMovie}
			removeMovie={removeMovie}
		></MovieScreen>
		<Watchlist
			list={watchList}
			removeMovie={removeMovie}
		></Watchlist>
	  </main>
    </div>
  );
}


export default App;
