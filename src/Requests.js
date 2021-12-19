const API_KEY = '711831d0171947d0b8713ff414bb9ed4';

const requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&languagae=en-US`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}


export default requests;


//   /discover/movie?api_key=711831d0171947d0b8713ff414bb9ed4&with_genres=27
//   https://api.themoviedb.org/3/discover/tv?api_key=711831d0171947d0b8713ff414bb9ed4&with_networks=213


//Working...
//https://api.themoviedb.org/3/discover/movie?api_key=711831d0171947d0b8713ff414bb9ed4&with_genres=10749