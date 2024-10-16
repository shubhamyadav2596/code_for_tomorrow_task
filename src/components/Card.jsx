const Card = ({ post, onRemove }) => {
    return (
      <div className="border rounded shadow py-6 px-4 relative">
        <button onClick={onRemove} className="absolute top-2 right-2 text-red-600">X</button>
        <h2 className="mb-3 text-gray-700 text-xl font-bold">{post.title}</h2>
        <p className="text-gray-600 text-justify">{post.body}</p>
      </div>
    );
  };
  
  export default Card;
  