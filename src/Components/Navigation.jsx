/* eslint-disable no-unused-vars */
import React from 'react';

const Navigation = () => {
    return (
        <div className=' mx-auto flex justify-between px-5 py-3'>
            <div>
                <div>
                    <img src="" alt="" />
                </div>
                <h1 className='text-3xl'>TradeVista</h1>
            </div>
            <div className="flex items-center ">
                <label className="block text-gray-700 text-sm font-bold mx-3" htmlFor="selectOption">
                    Language:
                </label>
                <select className="block appearance-none w-full bg-white border border-gray-300 rounded py-2 px-4 leading-tight " id="selectOption">
                    <option value="option1">English</option>
                    <option value="option2">Bangla</option>
                </select>
            </div>
        </div>
    );
};

export default Navigation;