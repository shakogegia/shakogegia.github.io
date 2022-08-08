import React, { PropsWithChildren } from 'react'

export default function Gallery(props: PropsWithChildren<{ images: string[] }>) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-items-center">
        {props.images.map((src) => (
          <img loading="lazy" key={src} className="rounded-md w-full h-full object-cover" src={src} />
        ))}
      </div>
    </div>
  )
}
