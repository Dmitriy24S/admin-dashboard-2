import { useEffect } from 'react'

const useDisableBodyScroll = (itemState) => {
  useEffect(() => {
    if (itemState) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [itemState])
}

export default useDisableBodyScroll
