import React from 'react'
import { Link } from 'gatsby'
import { PropsWithChildren } from 'react'
import classNames from '../utils/classnames'

export default function Header() {
  return (
    <header className="w-full">
      <nav className="container mx-auto md:max-w-5xl flex items-center justify-between p-6">
        <Link to="/" className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-indigo-600">
          Shalva Gegia
        </Link>

        <ul className="flex iAWriterQuattro space-x-3">
          <NavLink className='hidden sm:block' to="/about">About</NavLink>
          <NavLink to="/notes">Notes</NavLink>
          <NavLink to="/garden">Garden 🌱</NavLink>
        </ul>
      </nav>
    </header>
  )
}

function NavLink({ to, children, className }: PropsWithChildren<{ to: string, className?: string }>) {
  return (
    <li>
      <Link to={to} className={classNames("text-ml inline-block transition-colors py-2 px-4 text-gray-500 no-underline hover:text-indigo-500 ", className)}>
        {children}
      </Link>
    </li>
  )
}
