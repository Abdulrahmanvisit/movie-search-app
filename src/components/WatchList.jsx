function WatchList({items, onRemove})  {

    if (!items || !items.length) {
        return <p className="text-slate-600 text-center py-4">Your watchlist is empty.</p>

    }

  return (
    <div className="space-y-3">
        {items.map((movie) => (
            <div key={movie.imdbID}
            className="flex items-center justify-between bg-slate-800/80  p-3 rounded-xl border border-slate-700/40 "
            
            >
                <div className="flex items-center gap-3 min-w-0">
                <img
                 src={movie.Poster !== "N/A" ? movie.Poster :"https://via.placeholder.com/150"}
                  alt={movie.Title}
                  className="w-12 h-16 object-cover rounded-lg shrink-0"           
                 />
                 <span className="font-medium text-slate-200 text-sm truncate">{movie.Title}</span>
                 </div>
                <button onClick={() => onRemove(movie.imdbID)}
                className="bg-rose-500/10 hover:bg-rose-500/20 text-xs font-medium px-3 py-1.5 rounded-lg border border-rose-500/20 transition active:scale-95" >
                    Remove
                    </button>
            </div>
        ))}
    </div>
  )
}

export default WatchList