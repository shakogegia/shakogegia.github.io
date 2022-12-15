import React, { PropsWithChildren } from 'react'
import classNames from 'src/utils/classnames'

export default function Gallery(props: PropsWithChildren<{ images?: string[]; className?: string }>) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {props.children
          ? props.children
          : (props.images || []).map((src) => (
              <img
                loading="lazy"
                key={src}
                className={classNames(
                  'rounded-lg w-full h-full object-cover',
                  "w-64 h-64 m-0",
                  props.className
                )}
                src={src}
              />
            ))}
      </div>
    </div>
  )
}
