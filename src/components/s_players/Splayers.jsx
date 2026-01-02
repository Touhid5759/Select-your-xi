import React from 'react';
import SplayersCart from './SplayersCart';

const Splayers = ({purchasedPlayers,removePlayer,setToggle}) => {
    return (
     <div className="max-w-[1200px] mx-auto mt-10 space-y-5">
         {
          purchasedPlayers.map(player=><SplayersCart removePlayer={removePlayer} player={player}></SplayersCart>)
         }
    <button
     onClick={() => setToggle(true)}
     className="bg-[#E7FE29] text-black font-semibold mb-5 px-8 py-3 rounded-xl border border-black shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200">
     Add More
     </button>
    </div>
    );
};

export default Splayers;