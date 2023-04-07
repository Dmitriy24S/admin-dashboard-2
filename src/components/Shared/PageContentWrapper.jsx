import React from 'react'

const PageContentWrapper = ({ children }) => {
  return (
    <div className='m-4 md:mt-10 mt-16 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-md max-w-7xl mx-auto overflow-auto'>
      {children}
    </div>
  )
}

export default PageContentWrapper
