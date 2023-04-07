import { useEffect, useRef } from 'react'

const useHandleClickOutside = (callback) => {
  console.count('useHandleClickOutside')
  const ref = useRef(null)

  const handleClickOutisde = (event) => {
    // if (!topbarRef.current?.contains(event.target)) {
    if (ref.current && !ref.current?.contains(event.target)) {
      // toggleState(topbarItemsState)
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutisde)

    return () => {
      document.removeEventListener('click', handleClickOutisde)
    }
  }, [])

  // console.log('useHandleClickOutside ref:', ref)
  // {current: div.flex.justify-between.p-2.md:mx-6.relative.dark:text-gray-200}

  return ref
}

export default useHandleClickOutside
