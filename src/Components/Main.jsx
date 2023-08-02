/* eslint-disable no-unused-vars */
import React from 'react';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='w-1/2 mx-auto bg-red-100'>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;