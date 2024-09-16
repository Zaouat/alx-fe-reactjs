import axios from "axios";

const GITHUB_API_URL = "https://api.github.com";

export const searchUsers = async (query) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/search/users`, {
      params: { q: query },
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error searching users:", error);
    throw error;
  }
};
