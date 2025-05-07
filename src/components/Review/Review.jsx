import React, { use, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FaStar } from "react-icons/fa";

const Review = () => {
  const { user } = use(AuthContext);
  const [rating, setRating] = useState(null);
  const [review, setReview] = useState("");
  const handleRating = (e) => {
    e.preventDefault();
    const review = e.target.review.value;
    setReview(review);
    e.target.review.value=''
  };
  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };
  return (
    <div>
      <div className={`${review?'block':'hidden'} my-6`}>
        <h1 className="text-xl font-semibold my-3">Your Review</h1>
        <div className=" p-4 rounded-lg shadow-sm border border-gray-200 bg-white">
          <div className="flex justify-between items-start mb-2">
            <h2 className="font-semibold text-lg">{user.displayName}</h2>
            <div className="flex items-center text-yellow-500">
              <FaStar className="w-4 h-4 fill-yellow-500" />
              <span className="ml-1 text-sm font-medium">{rating}</span>
            </div>
          </div>
          <p className="text-sm text-gray-700">{review}</p>
        </div>
      </div>
      {/* review & rating */}
      <div>
        <h1 className="text-xl font-semibold">Rate this app</h1>
        <p className="text-gray-500">Tell other what you think</p>
        <form onSubmit={handleRating} className="space-y-4">
          <div className="flex mt-4">
            <div className="rating gap-4" onClick={handleRatingChange}>
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star"
                aria-label="1 star"
                value="1"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star"
                aria-label="2 star"
                value="2"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star"
                aria-label="3 star"
                value="3"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star"
                aria-label="4 star"
                value="4"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star"
                aria-label="5 star"
                value="5"
              />
            </div>
          </div>

          <div>
            <textarea
              id="review"
              name="review"
              className="textarea textarea-bordered w-full h-24"
              placeholder="Describe your experience"
              required
            ></textarea>
          </div>

          <input
            type="submit"
            value="Submit"
            className="btn bg-black text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default Review;
