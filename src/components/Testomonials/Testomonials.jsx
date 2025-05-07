

const Testomonials = ({t}) => {
    const { name, review, rating, photo } =t;
    
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-xl p-4 w-full">
      <div className="flex items-center gap-4 mb-3">
        <img
          src={photo}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
          <div className="flex gap-1">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>{i < rating ? "⭐" : "☆"}</span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600">{review}</p>
    </div>
  );
};

export default Testomonials;
