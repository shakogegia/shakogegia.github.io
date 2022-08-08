import { Link } from 'gatsby'
import React from 'react'
import { IoLibraryOutline, IoShareOutline } from 'react-icons/io5'
import Cover from 'src/components/cover'
import Layout from '../components/layout/main'
import SEO from '../components/seo'
import Ubik from '../images/ubik.jpg'

const library = [
  {
    category: 'Sci-Fi',
    books: [
      {
        title: 'Ubik',
        author: 'Philip K. Dick',
        cover: Ubik,
        href: 'https://www.goodreads.com/book/show/22590.Ubik',
      },
      {
        title: 'Do Androids Dream of Electric Sheep?',
        author: 'Philip K. Dick',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1507838927l/36402034._SY475_.jpg',
        href: 'https://www.goodreads.com/book/show/36402034-do-androids-dream-of-electric-sheep',
      },
      {
        title: 'A Scanner Darkly',
        author: 'Philip K. Dick',
        cover: 'https://upload.wikimedia.org/wikipedia/en/2/27/AScannerDarkly%281stEd%29.jpg',
        href: 'https://www.goodreads.com/book/show/14817.A_Scanner_Darkly',
      },
      {
        title: 'Flow My Tears, the Policeman Said',
        author: 'Philip K. Dick',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398026028l/22584.jpg',
        href: 'https://www.goodreads.com/book/show/22584.Flow_My_Tears_the_Policeman_Said',
      },
      {
        title: 'The Three Stigmata of Palmer Eldritch',
        author: 'Philip K. Dick',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1338461946l/14185.jpg',
        href: 'https://www.goodreads.com/book/show/14185.The_Three_Stigmata_of_Palmer_Eldritch',
      },
      {
        title: '1984',
        author: 'George Orwell',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532714506l/40961427._SX318_.jpg',
        href: 'https://www.goodreads.com/book/show/40961427-1984',
      },
      {
        title: 'Flowers for Algernon',
        author: 'Daniel Keyes',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1510416245l/36576608.jpg',
        href: 'https://www.goodreads.com/book/show/36576608-flowers-for-algernon',
      },
      {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: 'Douglas Adams',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1540169016l/42410904._SY475_.jpg',
        href: 'https://www.goodreads.com/book/show/42410904-the-hitchhiker-s-guide-to-the-galaxy',
      },
      {
        title: 'Dark Matter',
        author: 'Blake Crouch',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1472119680l/27833670._SY475_.jpg',
        href: 'https://www.goodreads.com/book/show/27833670-dark-matter',
      },
      {
        title: 'Recursion',
        author: 'Blake Crouch',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1543687940l/42046112.jpg',
        href: 'https://www.goodreads.com/book/show/42046112-recursion',
      },
      {
        title: 'The Dispossessed',
        author: 'Ursula K. Le Guin',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353467455l/13651.jpg',
        href: 'https://www.goodreads.com/book/show/13651.The_Dispossessed',
      },
    ],
  },
  {
    category: 'Fantasy',
    books: [
      {
        title: 'The Name of the Wind',
        author: 'Patrick Rothfuss',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1270352123l/186074.jpg',
        href: 'https://www.goodreads.com/book/show/186074.The_Name_of_the_Wind',
      },
      {
        title: "The Wise Man's Fear",
        author: 'Patrick Rothfuss',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1452624392l/1215032.jpg',
        href: 'https://www.goodreads.com/book/show/1215032.The_Wise_Man_s_Fear',
      },
    ],
  },
  {
    category: 'Thriller',
    books: [
      {
        title: 'The Girl with the Dragon Tattoo',
        author: 'Stieg Larsson',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327868566l/2429135.jpg',
        href: 'https://www.goodreads.com/book/show/2429135.The_Girl_with_the_Dragon_Tattoo',
      },
      {
        title: 'The Girl Who Played with Fire',
        author: 'Stieg Larsson',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1351778881l/5060378.jpg',
        href: 'https://www.goodreads.com/book/show/5060378-the-girl-who-played-with-fire',
      },
      {
        title: "The Girl Who Kicked the Hornet's Nest",
        author: 'Stieg Larsson',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327708260l/6892870.jpg',
        href: 'https://www.goodreads.com/book/show/6892870-the-girl-who-kicked-the-hornet-s-nest',
      },
    ],
  },
]

export default function LibraryPage() {
  return (
    <Layout>
      <SEO title="Books I read" />

      <div className="flex flex-col align-center text-center mt-4">
        <span className="text-9xl text-indigo-500 flex justify-center">
          <IoLibraryOutline />
        </span>
        <h2 className="mt-6 text-3xl font-mono transition-colors dark:text-gray-200">Digital Library</h2>
        <h6 className="mt-6 text-md font-mono max-w-md mx-auto text-gray-500">
          Here are some of the books I love, admire and find myself frequently returning to them.
          <p>As you can see I'm huge fan of the Sci-Fi and thanks Philip K. Dick for that</p>
        </h6>
      </div>

      {library.map(({category, books}) => (
        <div key={category} className="my-20">
          <div className="relative flex py-0 items-center">
            <span className="flex-shrink mx-4 font-serif text-gray-500 dark:text-gray-400 text-4xl">{category}</span>
            <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
          </div>
          
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 justify-items-center gap-8 mt-10">
            {books.map((book) => (
              <article key={book.title} className="flex flex-col max-w-[230px]">
                <Link
                  to={book.href}
                  target="_blank"
                  rel="noreferrer"
                  className="relative rounded px-4 py-2 flex items-center space-x-2 text-center group"
                >
                  <Cover src={book.cover} size={'small'} className="relative">
                    <div className="absolute inset-0 bg-white flex flex-col justify-center items-center opacity-0 transition-opacity group-hover:opacity-100 bg-opacity-95 p-5 dark:bg-gray-800 dark:bg-opacity-80">
                      <h3 className="iAWriterDuospace text-lg text-gray-900 transition-colors dark:text-gray-200">
                        {book.title}
                      </h3>
                      <p className="iAWriterDuospace text-gray-500 dark:text-gray-300">{book.author}</p>
                      <div className="flex mt-10  dark:text-gray-400">
                        <span className="font-mono text-sm">Goodreads</span>
                        <IoShareOutline />
                      </div>
                    </div>
                  </Cover>
                </Link>
              </article>
            ))}
          </div>
        </div>
      ))}


    </Layout>
  )
}
