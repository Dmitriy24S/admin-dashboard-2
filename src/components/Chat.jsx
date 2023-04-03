import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useStateContext } from '../context/ContextProvider'
import { chatData } from '../data/dummyData'
import Button from './Button'

const Chat = () => {
  const { currentColor } = useStateContext()

  return (
    <div className='absolute z-40 right-3.5 top-16 bg-white dark:bg-[#42464D] p-4 rounded-lg w-96 shadow-md'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-3 items-center'>
          <h6 className='font-semibold text-lg dark:text-gray-200'>Messages</h6>
          {chatData.length > 0 && (
            <div
              // className={`font-semibold text-lg text-[#FF5C8E]`}>5 New</div> */}
              // className={`font-semibold text-lg text-[${currentColor}]`}>5 New</div> // ! tailwind not apply dynamic color? */}
              className={`font-semibold text-lg`}
              style={{
                color: currentColor,
              }}
            >
              {/* 5 New */}
              {chatData.length} New
            </div>
          )}
        </div>
        <Button
          icon={<AiOutlineClose />}
          size='2xp'
          borderRadius='50%'
          // bgHoverColor='light-gray'
        />
      </div>
      {/* messages */}
      <div className='mt-5'>
        {chatData?.map((item, index) => (
          // message
          <a
            href='#'
            // className='border-b-1 border-color dark:border-neutral-500 p-3 '
            className='p-3 flex items-center gap-5 leading-8 cursor-pointer hover:bg-light-gray dark:hover:bg-main-dark-bg rounded-lg'
            key={index}
          >
            <div className='relative'>
              <img
                className='rounded-full h-10 w-10'
                src={item.image}
                alt={item.message}
              />
              <span
                // style={{ backgroundColor: item.dotColor }}
                style={{ backgroundColor: currentColor }}
                className='absolute inlin-flex rounded-full h-2 w-2 right-0 -top-1'
              />
            </div>
            {/* message content */}
            <div>
              <p className='font-semibold dark:text-gray-200'>{item.message}</p>
              <p className='text-gray-500 dark:text-gray-400 text-sm'>{item.desc}</p>
              <p className='text-gray-500 dark:text-gray-400 text-sm'>{item.time}</p>
            </div>
          </a>
        ))}
        <div className='mt-5'>
          <Button
            color='white'
            bgColor={currentColor}
            text='See all messages'
            borderRadius='10px'
            width='full'
          />
        </div>
      </div>
    </div>
  )
}

export default Chat
