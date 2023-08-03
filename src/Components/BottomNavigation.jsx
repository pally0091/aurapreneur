/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';


import Home from '../assets/Images/home.png';
import Mission from '../assets/Images/trophy.png';
import Team from "../assets/Images/group.png";
import VIP from "../assets/Images/vip-person.png";
import User from "../assets/Images/user.png";

const BottomNavigation = () => {

    const [clickedLink, setClickedLink] = useState(null);
    const componentRef = useRef(null);

    const handleClick = (index) => {
        setClickedLink(index === clickedLink ? null : index);
    };
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (componentRef.current && !componentRef.current.contains(e.target)) {
                setClickedLink(null);
            }
        };

        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);


    const linksData = [
        { text: 'Home', imgSrc: Home },
        { text: 'Mission', imgSrc: Mission },
        { text: 'Team', imgSrc: Team },
        { text: 'VIP', imgSrc: VIP },
        { text: 'User', imgSrc: User }

    ];


    return (
        <div className="fixed-bottom-div ">
            <div ref={componentRef} className="bottom-navigation fixed bottom-0 w-1/2 flex justify-around items-center bg-[#fee2e2] shadow-md py-1 rounded-lg">

                {linksData.map((link, index) => (
                    <a
                        key={index}
                        className={`flex flex-col items-center text-gray-600 hover:text-black transition-all duration-300 ${clickedLink === index ? 'scale-105 -mt-5' : 'scale-100 -mt-0'
                            }`}
                        onClick={() => handleClick(index)}
                    >
                        <div className='h-10 w-10 p-2 rounded-full bg-[#fee2e2]'>
                            <img className='w-full h-full' src={link.imgSrc} alt={link.text} />
                        </div>
                        <p className="font-semibold text-black text-sm mb-1">{link.text}</p>
                    </a>
                ))}

            </div>
        </div >
    );
};

export default BottomNavigation;