/* eslint-disable no-unused-vars */
import React from 'react';
import App from "../assets/Images/app.png";
import institute from "../assets/Images/institution.png";
import I from "../assets/Images/i.png"
import MembershipList from './MembershipList';


const UtilityButton = () => {
    return (
        <div className='px-5 py-3'>
            <div className='flex bg-red-500 text-white justify-between border-4 border-white rounded-2xl items-center px-5 py-3  shadow-lg mb-5'>
                <a href="#">
                    <h1 className='text-3xl underline font-semibold'>Download App</h1>
                </a>
                <div className='h-14 w-14'>
                    <img className='w-full h-full' src={App} alt="" />
                </div>
            </div>
            <div className='flex bg-blue-500 text-white justify-between border-4 border-white rounded-2xl items-center px-5 py-3 shadow-lg'>
                <a href="#">
                    <div className='flex justify-center items-center'>
                        <div className='h-10 w-10 me-2'>
                            <img className='w-full h-full' src={I} alt="" />
                        </div>
                        <h1 className='text-3xl underline font-semibold'>Company Profile</h1>
                    </div>
                </a>
                <div className='h-14 w-14'>
                    <img className='w-full h-full' src={institute} alt="" />
                </div>
            </div>

        </div>
    );
};

export default UtilityButton;