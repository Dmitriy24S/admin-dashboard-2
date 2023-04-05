import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import userAvatar from '../data/avatar.jpg'
import { userProfileData } from '../data/dummyData'
import Button from './Button'

const UserProfile = () => {
  return (
    // <div className='absolute z-40 right-3.5 top-16 bg-white dark:bg-[#42464D] p-4 md:p-8 rounded-lg w-96 shadow-md'>
    <div className='absolute z-40 right-3.5 top-16 bg-white dark:bg-[#42464D] p-4 rounded-lg w-96 shadow-md'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-3 items-center'>
          <h6 className='font-semibold text-lg dark:text-gray-200'>User Profile</h6>
        </div>
        <Button icon={<AiOutlineClose />} size='2xp' borderRadius='50%' />
      </div>
      {/* User Info */}
      <div className='mt-6 flex gap-5 items-center'>
        <img src={userAvatar} alt='user' className='rounded-full h-24 w-24' />
        <div>
          <p className='font-semibold text-xl dark:text-gray-200'>David Roberts</p>
          <p className='text-gray-500 text-sm dark:text-gray-400'>Administrator</p>
          <p className='text-gray-500 text-sm font-semibold dark:text-gray-400'>
            info@shop.com
          </p>
        </div>
      </div>
      {/* Links */}
      <div className='mt-7'>
        {userProfileData.map((item, index) => (
          <div className='flex gap-5 p-4 cursor-pointer hover:bg-light-gray dark:hover:bg-main-dark-bg rounded-md'>
            <div
              className='text-xl rounded-lg p-3 flex items-center'
              style={{
                color: item.iconColor,
                backgroundColor: item.iconBg,
              }}
            >
              {item.icon}
            </div>
            <div className=''>
              <p className='font-semibold dark:text-gray-200'>{item.title}</p>
              <p className='text-gray-500 text-sm dark:text-gray-400'>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserProfile
