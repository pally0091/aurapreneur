/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import play from "../../assets/Images/play.png"

const VIPMember = ({ data }) => {

    const { name, commission, image } = data;


    return (
        <div className='flex justify-between items-center border-2 border-black rounded-lg my-5'>
            <div className='flex justify-start items-center'>
                <div className='mx-5'>
                    <img src={image} alt="image" />
                </div>
                <div>
                    <h1 className='text-xl font-semibold'>{name}</h1>
                    <p className='text-sm'>Order Commission <span className='text-red-500 text-lg mx-3'> ${commission}</span></p>
                </div>
            </div>
            <div className='p-5'>
                <button type="submit" className='transition-all duration-500 hover:scale-110'>
                    <div className='w-14 h-14 rounded-full'>
                        <img className='w-full h-full' src={play} alt="" />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default VIPMember;