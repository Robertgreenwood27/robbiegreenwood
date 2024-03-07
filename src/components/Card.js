// components/Card.js
function Card({ title, description, imageUrl, pageUrl, githubUrl, imageAlt }) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="relative">
        <img src={imageUrl} alt={imageAlt || 'Card Image'} className="w-full h-auto" />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 transition duration-300 ease-in-out hover:opacity-100">
          <div className="flex space-x-4">
            <a href={pageUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#006638] text-white rounded-md transition duration-300 ease-in-out hover:bg-[#004d2a]">Visit Page</a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#006638] text-white rounded-md transition duration-300 ease-in-out hover:bg-[#004d2a]">GitHub</a>
          </div>
        </div>
      </div>
      <div className="px-6 py-4 text-white">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-zinc-100 text-base">{description}</p>
      </div>
    </div>
  );
}

export default Card;