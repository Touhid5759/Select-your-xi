import React, { use } from "react";
import PlayerCart from "./PlayerCart";
const Aplayers = ({
  fetchPromise,
  setAvailableBalance,
  AvailableBalance,
  purchasedPlayers,
  setpurchasedPlayers,
}) => {
  const playersData = use(fetchPromise);
  console.log(playersData);
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {playersData.map((player) => (
        <PlayerCart
          purchasedPlayers={purchasedPlayers}
          setpurchasedPlayers={setpurchasedPlayers}
          AvailableBalance={AvailableBalance}
          setAvailableBalance={setAvailableBalance}
          player={player}
        ></PlayerCart>
      ))}
    </div>
  );
};

export default Aplayers;
