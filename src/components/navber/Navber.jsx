import React from 'react';
import nevImg from '../../assets/league.jpg'
import dollarImg from '../../assets/Currency.png'
const Navber = ({AvailableBalance}) => {
    return (
            <div className="navbar mb-10">
        <div className="flex-1">
          <a className="text-xl">
            <img className="w-[60px] h-[60px] rounded-2xl"src={nevImg} alt="" />
          </a>
        </div>
        <div className="flex items-center">
             <span>£</span>
             <span>{AvailableBalance}</span>
             <span className="mr-3">m</span>
             <img src={dollarImg} alt="" />
        </div>
      </div>
    );
};

export default Navber;