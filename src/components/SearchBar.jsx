
function SearchBar({query, setQuery}) {

  return (
    <div className='relative max-w-xl mx-auto'>
        <input 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='search for movies...'
        className='w-full bg-slate-800 text-slate-100 placeholder-slate-400 px-5 py-4 rounded-full border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition  shadow-lg mt-6'
         
        />
    </div>
  )
}

export default SearchBar