import React from 'react';
import { Link } from 'react-router';

const Error404 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
        <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-4">
          Oops! Page not found.
        </h1>
        <p className="text-gray-500 mt-3 mb-3 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className=" px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go Back Home
        </Link>
        </div>
      </div>
    );
};

export default Error404;