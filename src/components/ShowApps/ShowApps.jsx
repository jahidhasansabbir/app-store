import { NavLink } from "react-router";

const ShowApps = ({ app }) => {
  const {id, name, thumbnail, downloads, rating } = app;

  return (
    <NavLink to={`/app-details/${id}`}>
      <div className="bg-white rounded-xl shadow p-4 text-center">
        <img
          src={thumbnail}
          className="w-full h-40 object-cover rounded-lg mb-3"
        />
        <h2 className="text-lg font-semibold mb-1">{name}</h2>
        <div className="flex justify-between text-sm text-gray-600">
          <p>📥 {downloads}</p>
          <p>⭐ {rating}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default ShowApps;
