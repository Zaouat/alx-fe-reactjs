// src/components/UserProfile.jsx

function UserProfile() {
  return (
    <div className="w-full max-w-md bg-gray-100 p-6 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto"
      />
      <h1 className="text-xl sm:text-2xl text-blue-800 mt-4 mb-2 text-center">
        John Doe
      </h1>
      <p className="text-gray-600 text-sm sm:text-base text-center">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
