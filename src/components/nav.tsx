import Link from 'next/link'

export default function Nav() {
  return (
    <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto text-center block shadow-3xl">
      <ul className="pt-6 lg:pt-0 list-reset lg:flex justify-end flex-1 items-center">
        <li className="mr-3">
          <a className="text-ml inline-block text-gray-500 no-underline hover:text-indigo-500 py-2 px-4">
            About
          </a>
        </li>
        <li className="mr-3">
          <a className="text-ml inline-block text-gray-500 no-underline hover:text-indigo-500 py-2 px-4">
            Blog
          </a>
        </li>
      </ul>
    </div>
  )
}
