import Link from 'next/link'
import { PropsWithChildren } from 'react'

export default function Header() {
  return (
    <header className="w-full">
      <nav className="container mx-auto md:max-w-5xl flex items-center justify-between p-6">
        <Link href="/">
          <a className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-indigo-600">
            Shalva Gegia
          </a>
        </Link>

        <ul className="flex iAWriterQuattro space-x-3">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/notes">Notes</NavLink>
          {/* <NavLink href="/articles">Articles</NavLink> */}
          <NavLink href="/garden">Garden 🌱</NavLink>
        </ul>
      </nav>
    </header>
  )
}

function NavLink({ href, children }: PropsWithChildren<{ href: string }>) {
  return (
    <li>
      <Link href={href}>
        <a className="text-ml inline-block transition-colors py-2 px-4 text-gray-500 no-underline hover:text-indigo-500 ">
          {children}
        </a>
      </Link>
    </li>
  )
}
