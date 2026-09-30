import { useState } from "react";

function Card({ name, nama, role, bio, avatar }) {
    const [likes, setLikes] = useState(0);
    const displayName = name || nama;

    const handleLike = () => {
        setLikes((prev) => prev + 1);
    };

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
                src={avatar}
                alt={displayName}
                className="w-full h-64 object-cover object-center"
            />
            <div className="p-5 flex flex-col gap-2">
                <h2 className="text-xl font-bold text-gray-800">{displayName}</h2>
                <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    {role}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
                <button
                    onClick={handleLike}
                    className="mt-3 self-start px-4 py-2 bg-gray-100 hover:bg-red-100 text-gray-800 hover:text-red-600 font-semibold rounded-lg border border-gray-300 hover:border-red-400 transition-colors duration-200"
                >
                    ❤️ Like {likes}
                </button>
            </div>
        </div>
    );
}

export default Card;