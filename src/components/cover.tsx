import React, { PropsWithChildren } from 'react'
import classNames from 'src/utils/classnames'

type Props = {
  src: string
  title?: string
  className?: string
  size?: 'small' | 'medium' | 'large'
}

const sizes = {
  small: 'w-[198px] h-[298px]',
  medium: 'w-[300px] h-[455px]',
  large: 'w-[325px] h-[500px]',
}

export default function Cover({ src, className, title, size = "medium", children }: PropsWithChildren<Props>) {
  return (
    <div className={classNames(sizes[size], className)}>
      <div className='rounded overflow-hidden cover-wrapper relative'>
        <span className={classNames('relative block',
        "after:content-[' '] after:absolute after:inset-0 after:rounded after:pointer-events-none",
        'cover-after h-full'
        )}>
          <img
            className={classNames('rounded block object-cover m-0 no-lightense', sizes[size])}
            src={src}
            alt={title}
            loading="lazy"
          />
        </span>
        <div className='absolute inset-0 rounded overflow-hidden'>
          {children}
        </div>
      </div>
    </div>
  )
}

