import React, { PropsWithChildren } from 'react'
import classNames from 'src/utils/classnames'

type Props = PropsWithChildren<{
  title: string
  color: string
  icon: React.ReactNode
  className?: string
}>

export default function Hero({ title, icon, color, className, children }: Props) {
  return (
    <div className={classNames("flex flex-col align-center text-center mt-4", className)}>
      <div className="flex flex-col align-center text-center font-duospace">
        <span className={classNames("text-9xl flex justify-center", color)}>{icon}</span>

        <h2 className="mt-6 text-3xl transition-colors dark:text-gray-200">{title}</h2>
        <h6 className="mt-6 text-md max-w-md mx-auto text-gray-500">{children}</h6>
      </div>
    </div>
  )
}
