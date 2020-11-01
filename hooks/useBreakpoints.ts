import { useState, useEffect } from 'react'

interface Breakpoints {
  mobile: boolean
  tablet: boolean
  desktop: boolean
  landscape: boolean
}

function getBreakpoint(width: number) {
  const breakpoints = {
    mobile: false,
    desktop: false,
    tablet: false,
  }

  switch (true) {
    case width < 735:
      breakpoints.mobile = true

      return breakpoints
    case width < 1024:
      breakpoints.tablet = true

      return breakpoints
    default:
      breakpoints.desktop = true

      return breakpoints
  }
}

function useBreakpoints(): Breakpoints {
  const [breakpoints, setBreakpoints] = useState({} as Breakpoints)

  useEffect(() => {
    const handleResize = (): void => {
      setBreakpoints({
        ...getBreakpoint(window.innerWidth),
        landscape: window.innerWidth > window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return (): void => window.removeEventListener('resize', handleResize)
  }, [])

  return breakpoints
}

export default useBreakpoints
