// components/Card.js
function Card({ title, description, imageUrl, pageUrl, githubUrl, imageAlt }) {
    return (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-xl border-2 border-[#006638]  m-4 p-6 hover:bg-opacity-90 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <img className="w-full rounded-lg mb-4" src={imageUrl} alt={imageAlt || 'Card Image'} />
        <div>
          <div className="font-bold text-xl mb-2 text-white">{title}</div>
          <p className="text-white text-base mb-4">
            {description}
          </p>
        </div>
        <div className="flex justify-between">
          <a href={pageUrl} className="inline-block bg-[#006638] rounded-full px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 transition duration-300 ease-in-out">Visit Page</a>
          <a href={githubUrl} className="inline-block bg-gray-900 rounded-full px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700 transition duration-300 ease-in-out">GitHub</a>
        </div>
      </div>
    );
  }
  
  export default Card;
  