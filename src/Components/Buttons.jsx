/* eslint-disable no-unused-vars */
import React from 'react';
import speaker from "../assets/Images/speaker.png"

const Buttons = () => {
    return (
        <div>
            <div className="bg-purple-800 p-4 shadow-md relative text-white border-8 border-transparent overflow-hidden ">
                {/* Speaker Icon */}
                <div className="absolute top-1/2 transform -translate-y-1/2 left-4 w-10 h-10 bg-gray-100 rounded-full shadow-md flex items-center justify-center ">
                    <div className="w-4 h-4"><img className='w-full h-full' src={speaker} alt="" /></div>
                </div>
                {/* Marquee Content */}
                <div className='ms-14 overflow-hidden'>
                    <div className="marquee-content whitespace-nowrap animation px-4 ">
                        1.Welcome to join Temu-USDT shopping and wealth management mall!You must be clear that the fastest way to make money here is not to save money by yourself, but to form a team by yourself to earn generous commissions, and you can also lead team members to make money together.Introduction to platform activities:1: Register for free VIP1, daily income 1.3 USDT.2: Register for a free lucky draw, randomly reward 0.5-158 USDT, and the winning rate is 100%.3: If you deposit more than 200 USDT, you will get an extra 28 USDT.4: Invite friends to deposit more than 18 USDT, and give a lucky draw event, randomly reward 3-258 USDT, and the winning rate is 100%.5: Invite friends to deposit more than 558 USDT, and get 98 USDT as a gift.6: Invite 5 A-level friends to deposit and buy VIP2, and give VIP2 a daily income of 8 USDT for free.7: Invite 5 A-level friends to deposit and buy VIP3, and give VIP3 a daily income of 28 USDT for free.Note: Class B and Class C will not be included in the scope of gifts.Customer Service Telegram: @Temu_Vip 2.(VIP1) Deposit 0 USDT, earn 1.3 USDT daily.(VIP2) Deposit 18 USDT, earn 8 USDT daily.(VIP3) Deposit 58 USDT, earn 28 USDT daily.(VIP4) Deposit 168 USDT, earn 88 USDT daily.(VIP5) Deposit 328 USDT, earn 168 USDT daily.(VIP6) Deposit 758 USDT, earn 398 USDT daily.(VIP7) Deposit 1258 USDT, earn 668 USDT daily.(VIP8) Deposit 2758 USDT, earn 1458 USDT daily.(VIP9) Deposit 6658 USDT, earn 3558 USDT daily.1: Recharge investment can only use USDT currency, choose TRC20 network.2: At the end of 00:00 Eastern Time every day, new tasks will be refreshed, and you can get profits by completing merchant orders every day.3: Withdrawal arrives in 1-5 minutes, there is no time limit, the withdrawal fee is 8%, the minimum withdrawal amount: 8 USDT, no upper limit, once a week. 3.Invite friends or share to get 19% rewards as follows:You invite member deposits 1000USDT and gets 13% (130USDT) commission.A invites member deposits 1000USDT and gets 5% (50USDT) commission.B invites member deposits 1000USDT and gets 1% (10USDT) commission.Commission calculation (A+B+C) = (total commission 19%/190USDT)The higher the level, the higher the referral commission you can get, please consult customer service for details.1. The bonus can be withdrawn immediately on the same day. If you recommend more users to join your promotion link, the more commission rewards you will get, and the commission collected by the recommended users will directly enter your member account, and you can withdraw cash directly!2. Tell your team that the company registration invitation link can be promoted in any social software, as follows: Facebook, Twitter, YouTube, instarma, TikTok, KAO KAO, WhatsApp group, Telegram group, etc.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buttons;