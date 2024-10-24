export const Card = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mr-4 w-64 max-w-xs">
      <img
        src={user.profilePhoto}
        alt={`${user.userName}'s profile`}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-1">
        {user.userName}
      </h2>
      <p className="text-gray-600 text-sm mb-2">{user.city}</p>
      <p className="text-gray-500 text-sm mb-4">{user.profession}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-full w-full shadow-md hover:bg-blue-600 transition">
        Follow
      </button>
    </div>
  );
};
