import { createContext, useContext } from 'react'
import { SpringValue } from '@react-spring/web'

type DockApi = {
  width: number
  zoomLevel?: SpringValue
  setIsZooming: (isZooming: boolean) => void
}

export const DockContext = createContext<DockApi>({ width: 0, setIsZooming: () => {} })

export const useDock = () => {
  return useContext(DockContext)
}
