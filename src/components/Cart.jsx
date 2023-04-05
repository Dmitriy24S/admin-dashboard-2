import React from 'react'
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useStateContext } from '../context/ContextProvider'
import { cartData } from '../data/dummyData'
import Button from './Button'

const Cart = () => {
  const { currentColor } = useStateContext()

  return (
    <div className='bg-half-transparent w-full fixed nav-item top-0 right-0 bottom-0'>
      {/* <div className='float-right h-screen duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-secondary-dark-bg bg-white md:w-400 p-8 border-l border-neutral-800'> */}
      <div className='absolute z-40 bottom-0 top-0 right-0 h-screen dark:text-gray-200 dark:bg-secondary-dark-bg bg-white md:w-400 p-8 sidebar overflow-auto'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-3 items-center'>
            <h6 className='font-semibold text-lg dark:text-gray-200'>Shopping Cart</h6>
          </div>
          <Button icon={<AiOutlineClose />} size='2xp' borderRadius='50%' />
        </div>
        {/* Cart Data */}
        {cartData?.map((item, index) => (
          // Item
          <div key={index} className=''>
            <div className='flex items-center gap-5 p-4 leading-8'>
              <img src={item.image} alt='' className='rounded-lg h-80 w-24' />
              <div>
                <p className='font-semibold'>{item.name}</p>
                <p className='font-semibold text-gray-600 dark:text-gray-400 text-sm'>
                  {item.category}
                </p>
                {/* price */}
                <div className='flex gap-4 mt-2 items-center'>
                  <p className='font-semibold text-lg'>{item.price}</p>
                  {/* amount */}
                  <div className='flex items-center rounded'>
                    <button
                      className='text-red-600 p-2
                    hover:bg-light-gray dark:hover:bg-main-dark-bg rounded-md
                    '
                    >
                      <AiOutlineMinus />
                    </button>
                    <p className='p-2'>1</p>
                    <button className='text-green-600 p-2 hover:bg-light-gray dark:hover:bg-main-dark-bg rounded-md'>
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Totals */}
        <div className='mt-3 mb-3'>
          <div className='flex justify-between items-center'>
            <p className=''>Sub Total</p>
            {/* <p className='text-gray-500 dark:text-gray-200'>Sub Total</p> */}
            <p className='font-semibold'>$890</p>
          </div>
          <div className='flex justify-between items-center mt-3'>
            <p className='text-gray-500 dark:text-gray-200'>Total</p>
            <p className='font-semibold'>$890</p>
          </div>
        </div>
        {/* Order Button */}
        <div className='mt-6'>
          <Button
            color='white'
            bgColor={currentColor}
            text='Place Order'
            borderRadius='10px'
            width='full'
          />
        </div>
      </div>
    </div>
  )
}

export default Cart
