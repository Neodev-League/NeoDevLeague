import * as React from 'react'
import { animated, useSpringValue } from '@react-spring/web'

import { useWindowResize } from '../hooks/useWindowResize'

import { DockContext } from './DockContext'

import styles from './styles.module.scss'

interface DockProps {
  children: React.ReactNode
}

export const Dock = ({ children }: DockProps) => {
  const [width, setWidth] = React.useState(0)
  const isZooming = React.useRef(false)
  const dockRef = React.useRef<HTMLDivElement>(null!)

  const setIsZooming = React.useCallback((value: boolean) => {
    isZooming.current = value
  }, [])

  const zoomLevel = useSpringValue(1, {
    onChange: () => {
      setWidth(dockRef.current.clientWidth)
    },
  })

  useWindowResize(() => {
    setWidth(dockRef.current.clientWidth)
  })

  return (
    <DockContext.Provider value={{setIsZooming, width, zoomLevel }}>
      <animated.div
        ref={dockRef}
        className={styles.dock}
        style={{
          y:'-50%',
          x: '-50%',
          scale: 1,
        }}>
        {children}
      </animated.div>
    </DockContext.Provider>
  )
}
