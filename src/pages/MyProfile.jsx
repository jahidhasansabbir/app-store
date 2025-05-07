import React, { use, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user, updateUser } = use(AuthContext);
  const { email, displayName, photoURL } = user;
  useEffect(() => {
        document.title = "My Profile | AppStore";
      }, []);
  const handleUserProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    updateUser({ name, photoUrl })
      .then(() => {
        toast.success("Profile updated successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
      
  };
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md md:my-8  text-center">
      <img
        src={photoURL || "https://i.ibb.co/2kR2B94/default-user.png"}
        alt="User Avatar"
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />

      <h2 className="text-xl font-semibold">{displayName || "Anonymous"}</h2>
      <p className="text-gray-600">{email}</p>
      <div className="break-words mt-2">
        {" "}
        <span>PhotoURL:</span>
        <p className="text-gray-600">{photoURL}</p>
      </div>
      <form onSubmit={handleUserProfile} className="mt-6 text-left">
        <label className="block text-gray-700 mb-1">Name</label>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="block text-gray-700 mt-4 mb-1">photoURL</label>
        <input
          type="text"
          placeholder="Enter photoURL"
          name="photoUrl"
          className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="submit"
          className="btn mt-3 bg-blue-500 text-white hover:bg-blue-700"
          value="Save"
        />
      </form>
    </div>
  );
};

export default MyProfile;
