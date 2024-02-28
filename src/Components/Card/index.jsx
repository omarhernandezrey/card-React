const Card = ({ food, imageUrl, title, grade, restaurant, descripcion, price }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-90 object-cover" />
        {grade && <div className="absolute top-2 right-2 bg-white px-2 py-1 shadow">{grade}</div>}
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{restaurant}</h2>
        <p className="text-sm text-gray-700">{food}</p>
        <p className="text-sm text-gray-700" style={{ fontSize: '0.875rem', lineHeight: '1.25rem', maxHeight: '3.75rem', overflow: 'hidden' }}>{descripcion}</p>
        <p className="text-sm text-gray-500 mt-1">{price}</p>
      </div>
    </div>
  );
};

export default Card;
