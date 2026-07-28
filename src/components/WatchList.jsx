function WatchList({items, onRemove})  {

    if (!items || !items.length) {
        return <p>your watchlist is empty.</p>

    }

  return (
    <div>
        {items.map((movie) => (
            <div key={movie.imdbID}>
                <span>{movie.Title}</span>
                <button onClick={() => onRemove()}>Remove</button>
            </div>
        ))}
    </div>
  )
}

export default WatchList