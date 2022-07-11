import React, { useState, useRef, PropsWithChildren } from 'react'
import classNames from '../utils/classnames'

export default function GifTip(props: PropsWithChildren<{ url: string }>) {
  const [isVisible, setIsVisible] = useState(false)
  const imgEl = useRef<HTMLImageElement>(null)

  const onMouseEnter = () => {
    setIsVisible(true)
  }

  const onMouseLeave = () => {
    setIsVisible(false)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (imgEl.current) {
      imgEl.current.style.top = `${e.clientY}px`
      imgEl.current.style.left = `${e.clientX}px`
    }
  }

  return (
    <span
      className={classNames(
        "relative inline-block cursor-none font-bold",
        "after:content-[' '] after:h-0.5 after:w-full after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-pink-400 after:to-indigo-600",
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      {props.children}
      {isVisible && (
        <img
          src={props.url}
          alt={'img'}
          className={"fixed z-[1] pointer-events-none rounded-lg max-w-xs max-h-xs -translate-x-1/2 -translate-y-1/2"}
          ref={imgEl}
        />
      )}
    </span>
  )
}
