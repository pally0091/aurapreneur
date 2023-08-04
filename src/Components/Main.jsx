/* eslint-disable no-unused-vars */
import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import BottomNavigation from "./BottomNavigation";

const Main = () => {
  return (
    <div className="w-full  lg:w-1/2 mx-auto bg-red-100">
      <Navigation></Navigation>
      <Outlet></Outlet>
      <BottomNavigation></BottomNavigation>
    </div>
  );
};

export default Main;
