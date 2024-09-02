// src/components/UserProfile.jsx

function UserProfile() {
  return (
    <div className="p-4 max-w-xs md:max-w-sm mx-auto">
      <div className="bg-gray-100 p-4 sm:p-4 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
        <div className="overflow-hidden rounded-full mx-auto w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36">
          <img
            src="https://via.placeholder.com/150"
            alt="User"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <h1 className="text-lg md:text-xl text-blue-800 my-4 text-center transition-colors duration-300 ease-in-out hover:text-blue-500 cursor-pointer">
          John Doe
        </h1>
        <p className="text-gray-600 text-sm md:text-base text-center">
          Developer at Example Co. Loves to write code and explore new
          technologies.
        </p>
      </div>
    </div>
  );
}

export default UserProfile;
