import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'

import { Button, PieChart, SparkLine, StackedChart } from '../components'
import { useStateContext } from '../context/ContextProvider'
import { earningData, ecomPieChartData, SparklineAreaData } from '../data/dummyData'

const Ecommerce = () => {
  return (
    <div className='mt-12'>
      {/* <div className='flex flex-wrap lg:flex-nowrap justify-center'> */}
      <div className='flex flex-wrap justify-center overflow-hidden'>
        {/* HERO */}
        {/* <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'> */}
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$63,448.78</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button
              color='white'
              bgColor='#4a6fff'
              text='Download'
              borderRadius='10px'
              size='md'
            />
          </div>
        </div>
        {/* CARDS */}
        {/* <div className='flex m-3 flex-wrap justify-center gap-1 items-center'> */}
        <div className='flex m-3 flex-wrap gap-4 justify-center w-full'>
          {earningData.map((item) => (
            <div
              key={item.title}
              className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl min-w-[190px]'
            >
              <button
                type='button'
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='text-2xl opacity-90 rounded-full p-4 hover:drop-shadow-xl mx-auto block'
              >
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>{item.amount}</span>
                <span
                  className={`text-sm text-${item.pcColor} ml-2`}
                  // ! set colors manualy, then apply dynamic - works?
                >
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
        {/* CARDS 2 */}
        <div className='flex gap-10 flex-wrap justify-center w-full'>
          {/* <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-780 m-3 p-4'> */}
          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-4 w-full m-3'>
            <div className='flex justify-between'>
              <p className='font-semibold text-xl'>Revenue Updates</p>
              <div className='flex gap-4 items-center'>
                <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl dark:text-gray-300'>
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>Expense</span>
                </p>
                <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>Budget</span>
                </p>
              </div>
            </div>
            {/* DATA */}
            <div className='mt-10 flex gap-10 flex-wrap justify-center'>
              {/* LEFT Container */}
              <div className='border-r-1 border-color m-4 pr-10'>
                {/* CARD 1 */}
                <div className=''>
                  <p>
                    <span className='text-3xl font-semibold'>$93,438</span>
                    <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>
                      23%
                    </span>
                  </p>
                  <p className='mt-1 text-gray-500'>Budget</p>
                </div>
                {/* Card 2 */}
                <div className='mt-8'>
                  <p>
                    <span className='text-3xl font-semibold'>$48,438</span>
                  </p>
                  <p className='mt-1 text-gray-500 '>Expense</p>
                </div>
                {/* CHART */}
                <div className='mt-5'>
                  <SparkLine
                    id='line-sparkLine'
                    type='Line'
                    height='80px'
                    width='250px'
                    data={SparklineAreaData}
                    currentColor='blue'
                    color='blue'
                  />
                </div>
                <div className='mt-10'>
                  <Button
                    text='Download Report'
                    borderRadius='10px'
                    color='white'
                    bgColor='#4a6fff'
                  />
                </div>
              </div>
              {/* Right container */}
              <div className='mt-5'>
                <StackedChart width='320px' height='360px' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// export default React.memo(Ecommerce)
export default Ecommerce
