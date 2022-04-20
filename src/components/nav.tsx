import { PropsWithChildren } from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto text-center block shadow-3xl">
      <ul className="pt-6 lg:pt-0 list-reset lg:flex justify-end flex-1 items-center">
        <NavLink href="/about">About</NavLink>
        <NavLink href="/blog">Blog</NavLink>
      </ul>
    </div>
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
