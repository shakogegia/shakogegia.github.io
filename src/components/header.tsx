import Link from 'next/link'
import { PropsWithChildren } from 'react'

export default function Header() {
  return (
    <header className="w-full">
      <nav className="container mx-auto md:max-w-5xl flex items-center justify-between p-6">
        <Link href="/">
          <a className="text-indigo-500 font-bold text-lg">Shalva Gegia</a>
        </Link>

        <ul className="flex">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/garden">Garden 🌱</NavLink>
        </ul>
      </nav>
    </header>
  )
}

function NavLink({ href, children }: PropsWithChildren<{ href: string }>) {
  return (
    <li className="mr-3">
      <Link href={href}>
        <a className="text-ml inline-block text-gray-500 no-underline hover:text-indigo-500 py-2 px-4">
          {children}
        </a>
      </Link>
    </li>
  )
}
