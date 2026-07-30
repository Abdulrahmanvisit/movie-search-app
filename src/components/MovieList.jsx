function MovieList({movies, onAdd}) {
    if(!movies || !movies.length) {
        return <p className="text-slate-400 text-center py-4 ">No movie found.</p>
    }

  return (
    <div className="space-y-3">
        {movies.map((movie) => (
            <div key={movie.imdbID}
            className="flex items-center gap-4 bg-slate-800 rounded-xl border border-slate-700/60 hover:slate-600 transition p-3 "
            >
                <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
                 alt={movie.Title}
                 className="w-12 h-16 object-cover rounded-lg b-slate-700"
                 />

                 <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-slate-100 truncate">{movie.Title}</h4>
                    <p className="text-xs text-slate-400">{movie.Year}</p>
                 </div>

                 <button
                 onClick={() => onAdd(movie)}
                 className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-3 py-1.5 rounded-lg transition active:scale-95 shadow"
                 
                 >
                    + Watchlist
                 </button>

            </div>
        ) )}

    </div>
  );
}

export default MovieList