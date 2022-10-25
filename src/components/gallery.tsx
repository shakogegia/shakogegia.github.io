import React, { PropsWithChildren } from 'react'
import classNames from 'src/utils/classnames'

export default function Gallery(props: PropsWithChildren<{ images?: string[], className?: string }>) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-items-center">
        {props.children
          ? props.children
          : (props.images || []).map((src) => (
              <img loading="lazy" key={src} className={classNames("rounded-md w-full h-full object-cover", props.className)} src={src} />
            ))}
      </div>
    </div>
  )
}
