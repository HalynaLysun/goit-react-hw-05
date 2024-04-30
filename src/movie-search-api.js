import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODUxZTgzZWUxNGI5NzdiNmY4MWYzMGQ0N2VkNzMzZCIsInN1YiI6IjY2MjkyMDA1Mzk1NDlhMDE2NjAxNDc1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3DZXCNMepYwxQkjpxQ2BrY4Sr7IPgE8jbD0-Xy2WNYU",
  },
};

export default async function getSearchMovie(query, page) {
  const response = await axios.get("search/movie", {
    params: {
      query: query,
      page: page,
      per_page: 15,
    },
    headers: options.headers,
  });
  return response.data;
}
