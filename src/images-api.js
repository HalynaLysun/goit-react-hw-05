import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const KEY = "cpMrNbJR9hAZfCOvirw9MRq6_gAnEEUzO53Wjet5MRo";

export default async function fetchImages(query, page) {
  const response = await axios.get("/search/photos", {
    params: {
      query: query,
      page: page,
      per_page: 14,
      client_id: KEY,
      orientation: "landscape",
    },
  });

  return response.data;
}
