import { title } from 'process'
import React from 'react'
import classNames from 'src/utils/classnames'

type Props = {
  src: string
  title?: string
  className?: string
}

export default function Cover({ src, className }: Props) {
  return (
    <div className={classNames('w-[300px]', className)}>
      <div className='w-full h-full relative rounded overflow-hidden cover-wrapper'>
        <span className={classNames('relative block',
        "after:content-[' '] after:absolute after:inset-0 after:rounded after:pointer-events-none",
        'cover-after h-full'
        )}>
          <img
            className='rounded block h-auto object-cover w-full m-0 no-lightense'
            src={src}
            alt={title}
            loading="lazy"
          />
        </span>
      </div>
    </div>
  )
}

