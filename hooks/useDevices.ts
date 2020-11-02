import { useState, useEffect } from 'react'

interface Devices {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

function getDevice(width: number) {
  const devices = {
    isMobile: false,
    isDesktop: false,
    isTablet: false,
  }

  switch (true) {
    case width < 735:
      devices.isMobile = true

      return devices
    case width < 1024:
      devices.isTablet = true

      return devices
    default:
      devices.isDesktop = true

      return devices
  }
}

function useDevices(): Devices {
  const [devices, setDevices] = useState({} as Devices)

  useEffect(() => {
    const handleResize = (): void => {
      setDevices(getDevice(window.innerWidth))
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return (): void => window.removeEventListener('resize', handleResize)
  }, [])

  return devices
}

export default useDevices
