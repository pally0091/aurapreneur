/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import VIPMember from './VIPMember';

const VIPMembers = () => {

    const dataset = [
        {
            id: 0,
            image: "image1",
            name: "a",
            commission: 0.00,

        },
        {
            id: 1,
            image: "image2",
            name: "b",
            commission: 0.00,

        }

    ]

    return (
        <div >

            <div className=' px-5'>
                {
                    dataset.map(data => <VIPMember key={data.id} data={data}></VIPMember>)
                }
            </div>
        </div>
    );
};

export default VIPMembers;