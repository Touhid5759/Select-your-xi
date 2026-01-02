import React from 'react';

const SplayersCart = ({player,removePlayer}) => {
  const handleRemove=()=>{
         removePlayer(player);
  }
    return (
         <div className="flex items-center justify-between border border-gray-200 rounded-2xl bg-white shadow-sm px-5 py-4 hover:shadow-md transition">
          {/* Left: image and text */}
          <div className="flex items-center gap-4">
            {/* Image / placeholder */}
              <img
            src={player.player_img}
            alt={player.player_name}
            className="h-12 w-12 rounded-xl object-cover bg-gray-200"
            />
            {/* Player info */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                 {player.player_name}
              </h2>
              <p className="text-sm text-gray-500">{player.player_role}</p>
            </div>
          </div>
          {/* Right: delete icon */}
          <button
            onClick={handleRemove}
            className="p-2 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-full transition"
            title="Remove player">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
    );
};

export default SplayersCart;