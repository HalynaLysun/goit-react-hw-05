import axios from "axios";

// 3851e83ee14b977b6f81f30d47ed733d

const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODUxZTgzZWUxNGI5NzdiNmY4MWYzMGQ0N2VkNzMzZCIsInN1YiI6IjY2MjkyMDA1Mzk1NDlhMDE2NjAxNDc1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3DZXCNMepYwxQkjpxQ2BrY4Sr7IPgE8jbD0-Xy2WNYU",
  },
};

export default async function getTrendingMovies() {
  const response = axios.get(url, options);

  return (await response).data.results;
}

// axios.defaults.baseURL = "https://api.unsplash.com";
// const KEY = "cpMrNbJR9hAZfCOvirw9MRq6_gAnEEUzO53Wjet5MRo";

// export default async function fetchImages(query, page) {
//   const response = await axios.get("/search/photos", {
//     params: {
//       query: query,
//       page: page,
//       per_page: 14,
//       client_id: KEY,
//       orientation: "landscape",
//     },
//   });

//   return response.data;
// }
