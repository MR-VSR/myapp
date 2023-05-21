import React from 'react'
import './navbar.css';
import Message from '../assets/Vectormess.png'
import Notification from '../assets/Vectornoti.png'
import UserProfile from '../assets/Vector.png'

export default function navbar() {
    return (
        <div className='navbarContainer'>
            <div className='nameContainer'>
                <p>Hello, <span>Asish Sharma</span></p>
            </div>

            <div className='iconsContainer'>

                <div className='notificationIcon'>
                    <img src={Notification} />
                </div>
                <div className='messageIcon'>
                    <img src={Message} />

                </div>

                <div className='userprofileIcon'>
                    <img src={UserProfile} />

                </div>

            </div>
        </div>
    )
}
