const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

// 1. Guard clause: Handle empty or whitespace-only searches
 async function fetchMoviesBySearch(searchTerm) {
  if(!searchTerm || !searchTerm.trim()) {
    return{success: true, movies: []}
    
  }

    //Network request inside try/catch
    try {
      const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}`)
      const data = await response.json();

      if(data.Response === 'True'){
        return {success:true, movies:data.Search}
      }else {
        return {success:false, error:data.Error || "no movies found."}
      }
      
    } catch (error) {
      console.error("Fetch failed:", error);
      return {success: false, error: "Network error. please check your internet connection."}

      
    }
  
}

export default fetchMoviesBySearch