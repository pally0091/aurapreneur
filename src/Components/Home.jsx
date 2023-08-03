/* eslint-disable no-unused-vars */
import React from 'react';
import Buttons from './Buttons';
import MissionHall from './MissionHall';
import MembershipList from './MembershipList';


const Home = () => {
    return (
        <div className='mb-20'>
            <Buttons></Buttons>
            <MissionHall></MissionHall>
            <MembershipList></MembershipList>


        </div>
    );
};

export default Home;