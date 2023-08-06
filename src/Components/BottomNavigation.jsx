/* eslint-disable no-unused-vars */
import React from "react";

import Home from "../assets/Images/home.png";
import Mission from "../assets/Images/trophy.png";
import Team from "../assets/Images/group.png";
import VIP from "../assets/Images/vip-person.png";
import User from "../assets/Images/user.png";
import { Link } from "react-router-dom";

const BottomNavigation = () => {
  return (
    <div className="grid grid-cols-5 px-5 bg-gray-400 py-2 ">
      <Link
        to="/"
        className="focus:scale-110 transition-all duration-500"
      >
        <div className=" border-2 border-black p-3 rounded-full w-16 mx-auto">
          <img
            className="w-full h-full "
            src={Home}
            alt=""
          />
        </div>
      </Link>
      <Link
        to="/"
        className="focus:scale-110 transition-all duration-500"
      >
        <div className=" border-2 border-black p-3 rounded-full w-16 mx-auto">
          <img
            className="w-full h-full "
            src={Mission}
            alt=""
          />
        </div>
      </Link>
      <Link
        to="/"
        className="focus:scale-110 transition-all duration-500"
      >
        <div className=" border-2 border-black p-3 rounded-full w-16 mx-auto">
          <img
            className="w-full h-full "
            src={Team}
            alt=""
          />
        </div>
      </Link>
      <Link
        to="/"
        className="focus:scale-110 transition-all duration-500"
      >
        <div className=" border-2 border-black p-3 rounded-full w-16 mx-auto">
          <img
            className="w-full h-full "
            src={VIP}
            alt=""
          />
        </div>
      </Link>
      <Link
        to="/"
        className="focus:scale-110 transition-all duration-500"
      >
        <div className=" border-2 border-black p-3 rounded-full w-16 mx-auto">
          <img
            className="w-full h-full "
            src={User}
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default BottomNavigation;
