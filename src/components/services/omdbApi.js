const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

async function fetchMoviesBySearch(searchTerm) {
  if (!searchTerm || !searchTerm.trim()) {
    return { success: true, movies: [] };
  }

  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}`);
    const data = await response.json();

    if (data.Response === "True") {
      return { success: true, movies: data.Search };
    } else {
      return { success: false, error: data.Error || "No movies found." };
    }
  } catch (err) {
    console.error("Fetch failed:", err);
    return { success: false, error: "Network error. Please check your internet connection." };
  }
}

export default fetchMoviesBySearch;