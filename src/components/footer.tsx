import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bottom-0 mt-10 text-center w-full py-4 px-6">
      <small className="text-gray-500">
        Copyright © Shalva Gegia 2022. Made by{' '}
        <Link href="/">
          <a className="underline">Shalva Gegia</a>
        </Link>
        {' • '}
        <Link href="https://twitter.com/@ShalvaGegia">
          <a target="_blank" className="underline" rel="noopener">
            Twitter
          </a>
        </Link>
        {' • '}
        <Link href="https://github.com/shakogegia">
          <a target="_blank" className="underline" rel="noopener">
            Github
          </a>
        </Link>
      </small>
    </footer>
  )
}
