function WatchList({items, onRemove})  {

    if (!items || !items.length) {
        return <p className="text-slate-600 text-center py-4">your watchlist is empty.</p>

    }

  return (
    <div className="space-y-3">
        {items.map((movie) => (
            <div key={movie.imdbID}
            className="flex items-center justify-between bg-slate-800/80  p-3 rounded-xl border border-slate-700/40 "
            
            >
                <span className="font-medium text-slate-200 text-sm truncate">{movie.Title}</span>
                <button onClick={() => onRemove()}
                className="bg-rose-500/10 hover:bg-rose-500/20 text-xs font-medium px-3 py-1.5 rounded-lg border border-rose-500/20 transition active:scale-95"  
                    >Remove</button>
            </div>
        ))}
    </div>
  )
}

export default WatchList