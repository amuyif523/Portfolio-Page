'use client'

import { forwardRef, useImperativeHandle, useRef } from 'react'
import { View as ViewImpl } from '@react-three/drei'

const View = forwardRef(({ children, ...props }: any, ref) => {
  const localRef = useRef(null)
  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
      <div ref={localRef} {...props} />
      <ViewImpl track={localRef}>
        {children}
      </ViewImpl>
    </>
  )
})
View.displayName = 'View'

export { View }
