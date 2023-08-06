/* eslint-disable no-unused-vars */
import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import BottomNavigation from "./BottomNavigation";

const Main = () => {
  return (
    <div className="w-full relative  lg:w-1/2 mx-auto bg-red-100">
      <Navigation></Navigation>
      <Outlet></Outlet>
      <div className="w-full lg:w-1/2 fixed  bottom-0">
        <BottomNavigation></BottomNavigation>
      </div>
    </div>
  );
};

export default Main;
