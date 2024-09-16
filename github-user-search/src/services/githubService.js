import axios from "axios";

const GITHUB_API_URL = "https://api.github.com";
const SEARCH_URL = "https://api.github.com/search/users?q=";

export const searchUsers = async ({
  username,
  location,
  minRepos,
  page = 1,
}) => {
  try {
    let query = username;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await axios.get(
      `${SEARCH_URL}${encodeURIComponent(query)}`,
      {
        params: { per_page: 30, page },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error searching users:", error);
    throw error;
  }
};

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
