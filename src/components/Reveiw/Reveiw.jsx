import React from "react";

const Reveiw = ({setReview}) => {
  const handleRating = (e) => {
    e.preventDefault();
    const review = e.target.review.value;
    setReview(review)
  };
  return (
    <div>
        <h1 className="text-xl font-semibold">Rate this app</h1>
        <p className="text-gray-500">Tell other what you think</p>
      <form onSubmit={handleRating} className="space-y-4">
        <div className="flex mt-4">
        <div className="rating gap-4">
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            aria-label="1 star"
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            aria-label="2 star"
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            aria-label="3 star"
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            aria-label="4 star"
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            aria-label="5 star"
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
  );
};

export default Reveiw;
