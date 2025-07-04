import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Review from "../components/Review/Review";
import { FaStar } from "react-icons/fa";


const AppDetails = () => {
  const { id } = useParams();
  const apps = useLoaderData();
  const [toggleInstall, setToggleInstall] = useState(false)
  const [isActive, setIsActive] = useState(false)
  
  const app = apps.find((app) => app.id == id);
  const {
    name,
    banner,
    developer,
    downloads,
    thumbnail,
    features,
    reviews,
    description,
    rating,
    category,
  } = app;
  useEffect(() => {
    document.title = `${name} | AppStore`;
  }, [name]);
  const handleInstall = ()=>{
    setToggleInstall(!toggleInstall)
    setIsActive(true)
  }
  return (
    <div className="max-w-[1440px] mx-auto p-4">
      {/* Banner Image */}
      <img
        src={banner}
        className="w-full h-48  md:h-80 object-cover rounded-lg mb-6"
      />

      <div className="flex md:justify-between md:items-center flex-col md:flex-row">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
          <img
            src={thumbnail}
            className="w-16 h-16 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-lg object-cover"
          />
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold">{name}</h1>
            <p className="text-gray-500">By {developer}</p>
            <div className="flex flex-wrap gap-4 text-sm mt-2 text-gray-600">
              <span>📥 {downloads}</span>
              <span>⭐ {rating}</span>
              <span>📁 {category}</span>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <button onClick={handleInstall} className={`text-white font-medium px-6 py-2 rounded cursor-pointer ${toggleInstall? 'bg-red-600' : 'bg-blue-600'}`}>
            {toggleInstall? "Uninstall" : "Install"}
          </button>
        </div>
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Features</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">User Reviews</h2>
        <div className="space-y-4">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white"
            >
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold">{review.user}</p>
                <p className="text-yellow-600 text-sm flex justify-center items-center gap-1"><FaStar></FaStar> {review.rating}</p>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
          <Review isActive={isActive}></Review>
    </div>
  );
};

export default AppDetails;
