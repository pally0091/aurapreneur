/* eslint-disable no-unused-vars */
import React from 'react';
import VIPMembers from './VIPMembers/VIPMembers';
import BottomNavigation from './BottomNavigation';
import UtilityButton from './UtilityButton';
import MembershipList from './MembershipList';

const MissionHall = () => {
    return (
        <div className='py-10'>

            <div className='bg-gray-400 py-1'>
                <div className='relative w-32 mx-5 my-5' >
                    <div id='missionHall' className=' text-center ' >
                        <h1 className='text-lg font-semibold '>Mission Hall</h1>
                    </div>

                </div>
            </div>
            <VIPMembers></VIPMembers>
            <UtilityButton></UtilityButton>

            <BottomNavigation></BottomNavigation>
        </div >
    );
};

export default MissionHall;