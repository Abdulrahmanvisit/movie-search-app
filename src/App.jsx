import { useState, useEffect } from "react";
import fetchMoviesBySearch from "./components/services/omdbApi";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import WatchList from "./components/WatchList";

function App() {
  const [query, setQuery] = useState("Batman");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load Watchlist from LocalStorage
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem("myWatchlist");
    return saved ? JSON.parse(saved) : [];
  });

  // save watchlist to the localStorage
  useEffect(() => {
    localStorage.setItem("myWatchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  // Fetch movie API
  useEffect(() => {
    if (!query.trim()) {
      setMovies([]);
      setError(null);
      return;
    }

    let ignore = false;

    const timeoutId = setTimeout(async () => {
      setLoading(false);
      setError(null);

      let result = await fetchMoviesBySearch(query);

      if (ignore) return;
    }, 500);
  });

  //Dummy handlers so jsx don't before adding the funcionalities
  const handleAddWatchlist = (movie) => {
    console.log("Add clicked: ", movie);
  };

  const handleRemoveWatchlist = (id) => {
    console.log("Removed clicked: ", id);
  };

  return (
    <div className="">
      <div className="max-w-md mx-auto px-4">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold text-indigo-400">
            🎬 Movie Finder
          </h1>
          <p>Save you favorite movies and save them to your watchlist.</p>
        </header>

        <SearchBar query={query} setQuery={setQuery} />

        <main className="grid grid-cols-1 md:grid-cols-2 ">
          <section>
            <h2>🔍 Search Results</h2>

            {loading && <p>Searching...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && (
              <MovieList movies={movies} onAdd={handleAddWatchlist} />
            )}
          </section>

          <section>
            <div>
              <h2>📌 My Watchlist</h2>
              <span>{watchlist.length} Saved</span>
            </div>
          </section>
        </main>

        <WatchList items={watchlist} onRemove={handleRemoveWatchlist} />
      </div>
    </div>
  );
}

export default App;
