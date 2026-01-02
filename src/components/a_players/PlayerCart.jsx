import React, { useState } from 'react';
import iconCart from '../../assets/user 1.png'
import { toast } from 'react-toastify';
const PlayerCart = ({player,setAvailableBalance,AvailableBalance,purchasedPlayers,setpurchasedPlayers}) => {
    const [isSelected,setIsSelected]=useState(false)
    const handleSelected=(player)=>{
        const PlayerPrice=parseInt(player.price.split("£").join("").split("m").join(""))
        if(AvailableBalance<PlayerPrice)
        {
          toast.warning(`${player.player_name} is out of your budget`);
        }
         else if(purchasedPlayers.length===6){
          toast.info('already 6 player are selected');
          return;
        }
        else 
        {
        setIsSelected(true);
        setAvailableBalance(AvailableBalance-PlayerPrice);
        setpurchasedPlayers([...purchasedPlayers,player]);
        }
       
    }
    return (
        <>
       <div className="card bg-base-100 w-96 shadow-sm p-4">
  <figure>
    <img
      className="w-full h-64 object-cover rounded-lg"
      src={player.player_img}
      alt="Shoes" />
  </figure>
  <div className="card-body space-y-2.5">
    <div className='flex items-start'>
    <img className='mr-4'src={iconCart} alt="" />
    <h2 className="card-title font-bold">{player.player_name}</h2>
    </div>
    <div className="flex items-center gap-2 ml-1 mt-1">
    {/* <i className="fa-solid fa-flag"></i> */}
    <img className="w-5 h-4 object-cover rounded-sm"src={player.flag_img} alt="" />
    <p className="font-sora text-[16px] font-normal">{player.player_country}</p>
    </div>
    <div className='flex justify-between ml-1 mt-1'>
        <span className=' text-[16px] font-bold'>Rating</span>
        <span>{player.rating}</span>
    </div>
    <div className='flex justify-between ml-1 mt-1'>
        <span className=' text-[16px] font-bold'>Position</span>
        <span>{player.player_role}</span>
    </div>
     <div className='flex justify-between ml-1 mt-1'>
        <span className=' text-[16px] font-bold'>Price</span>
        <span>{player.price}</span>
    </div>
    <div className="card-actions justify-start">
      <button disabled={isSelected} onClick={()=>handleSelected(player)} className={`btn font-bold ${isSelected===true?"bg-amber-100":"bg-green-500"}`}>{isSelected===true?"selected":"select"}</button>
    </div>
  </div>
</div>
        </>
    );
};

export default PlayerCart;