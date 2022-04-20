import Nav from '@/components/nav'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full">
      <nav className="flex items-center justify-center lg:justify-between flex-wrap p-6 container mx-auto md:max-w-4xl">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-indigo-500 font-bold text-lg">Shalva Gegia</a>
          </Link>
        </div>

        <Nav />
      </nav>
    </header>
  )
}
