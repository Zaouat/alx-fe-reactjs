import React, { useState } from "react";
import { searchUsers, fetchUserData } from "../services/githubService";

const Search = () => {
  const [searchParams, setSearchParams] = useState({
    username: "",
    location: "",
    minRepos: "",
  });
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [hasSearched, setHasSearched] = useState(false);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPage(1);
    setHasSearched(true);
    await performSearch();
  };

  const performSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const results = await searchUsers({ ...searchParams, page });
      if (results.items.length === 0) {
        setError("Looks like we cant find the user");
        setSearchResults([]);
      } else {
        const detailedResults = await Promise.all(
          results.items.map(async (user) => {
            const details = await fetchUserData(user.login);
            return { ...user, ...details };
          })
        );
        if (page === 1) {
          setSearchResults(detailedResults);
        } else {
          setSearchResults((prev) => [...prev, ...detailedResults]);
        }
        setHasMore(results.items.length === 30); // Assuming 30 is the per_page value
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
    performSearch();
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="username"
            value={searchParams.username}
            onChange={handleInputChange}
            placeholder="Username"
            className="w-full px-3 py-2 border rounded-md"
          />
          <input
            type="text"
            name="location"
            value={searchParams.location}
            onChange={handleInputChange}
            placeholder="Location"
            className="w-full px-3 py-2 border rounded-md"
          />
          <input
            type="number"
            name="minRepos"
            value={searchParams.minRepos}
            onChange={handleInputChange}
            placeholder="Min Repositories"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {searchResults.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {searchResults.map((user) => (
            <div key={user.id} className="border rounded-md p-4">
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                className="w-20 h-20 rounded-full mx-auto"
              />
              <h2 className="text-lg font-bold mt-2 text-center">
                {user.login}
              </h2>
              <p className="text-sm text-center">{user.location}</p>
              <p className="text-sm text-center">Repos: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-2 text-blue-500 hover:underline"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}

      {hasMore && searchResults.length > 0 && (
        <button
          onClick={loadMore}
          className="mt-4 w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
