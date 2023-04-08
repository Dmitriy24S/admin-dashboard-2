import { useEffect, useRef } from 'react'

const useHandleClickOutside = (callback, dep) => {
  console.count('useHandleClickOutside start')
  console.log('dep start', dep)
  const ref = useRef(null)

  const isActiveDropdown = Object.values(dep).some((value) => value === true)
  console.log('isActiveDropdown', isActiveDropdown)

  const handleClickOutisde = (event) => {
    console.log('handleClickOutisde func inside?')
    // if (!topbarRef.current?.contains(event.target)) {
    if (ref.current && !ref.current?.contains(event.target)) {
      console.log('outside')
      // toggleState(topbarItemsState)
      callback()
    }
  }

  useEffect(() => {
    if (isActiveDropdown) {
      document.addEventListener('click', handleClickOutisde)
      console.log('useHandleClickOutside useffect add click')
    }
    return () => {
      console.log('useHandleClickOutside return remove click')
      document.removeEventListener('click', handleClickOutisde)
    }
    // }, [...Object.values(dep)]) // active each click, even when not using topbar/dropdown
  }, [isActiveDropdown]) // active only when toggle dropdown

  return ref
}

export default useHandleClickOutside
