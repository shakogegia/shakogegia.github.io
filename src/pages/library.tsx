import { motion } from 'framer-motion'
import React from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'
import { IoLibraryOutline } from 'react-icons/io5'
import Layout from '../components/layout/main'
import SEO from '../components/seo'

const library = [
  {
    title: 'Ubik',
    author: 'Philip K. Dick',
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1296937408i/315939._SX300_.jpg",
    href: 'https://www.goodreads.com/book/show/22590.Ubik',
    category: 'Sci-Fi',
  },
  {
    title: 'Do Androids Dream of Electric Sheep?',
    author: 'Philip K. Dick',
    cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1519481930i/7082.jpg',
    href: 'https://www.goodreads.com/book/show/36402034-do-androids-dream-of-electric-sheep',
    category: 'Sci-Fi',
  },
  {
    title: 'A Scanner Darkly',
    author: 'Philip K. Dick',
    cover: 'https://upload.wikimedia.org/wikipedia/en/2/27/AScannerDarkly%281stEd%29.jpg',
    href: 'https://www.goodreads.com/book/show/14817.A_Scanner_Darkly',
    category: 'Sci-Fi',
  },
  {
    title: 'Flow My Tears, the Policeman Said',
    author: 'Philip K. Dick',
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398026028l/22584.jpg',
    href: 'https://www.goodreads.com/book/show/22584.Flow_My_Tears_the_Policeman_Said',
    category: 'Sci-Fi',
  },
  {
    title: 'The Three Stigmata of Palmer Eldritch',
    author: 'Philip K. Dick',
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1338461946l/14185.jpg',
    href: 'https://www.goodreads.com/book/show/14185.The_Three_Stigmata_of_Palmer_Eldritch',
    category: 'Sci-Fi',
  },
  {
    title: '1984',
    author: 'George Orwell',
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532714506l/40961427._SX318_.jpg',
    href: 'https://www.goodreads.com/book/show/40961427-1984',
    category: 'Sci-Fi',
  },
  {
    title: 'Flowers for Algernon',
    author: 'Daniel Keyes',
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1510416245l/36576608.jpg',
    href: 'https://www.goodreads.com/book/show/36576608-flowers-for-algernon',
    category: 'Sci-Fi',
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1540169016l/42410904._SY475_.jpg',
    href: 'https://www.goodreads.com/book/show/42410904-the-hitchhiker-s-guide-to-the-galaxy',
    category: 'Sci-Fi',
  },
  {
    title: 'Dark Matter',
    author: 'Blake Crouch',
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1472119680l/27833670._SY475_.jpg',
    href: 'https://www.goodreads.com/book/show/27833670-dark-matter',
    category: 'Sci-Fi',
  },
  {
    title: 'Recursion',
    author: 'Blake Crouch',
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1543687940l/42046112.jpg',
    href: 'https://www.goodreads.com/book/show/42046112-recursion',
    category: 'Sci-Fi',
  },
  {
    title: 'The Dispossessed',
    author: 'Ursula K. Le Guin',
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353467455l/13651.jpg',
    href: 'https://www.goodreads.com/book/show/13651.The_Dispossessed',
    category: 'Sci-Fi',
  },
  {
    title: 'The Name of the Wind',
    author: 'Patrick Rothfuss',
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1270352123l/186074.jpg',
    href: 'https://www.goodreads.com/book/show/186074.The_Name_of_the_Wind',
    category: 'Fantasy',
  },
  {
    title: "The Wise Man's Fear",
    author: 'Patrick Rothfuss',
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1452624392l/1215032.jpg',
    href: 'https://www.goodreads.com/book/show/1215032.The_Wise_Man_s_Fear',
    category: 'Fantasy',
  },
  {
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327868566l/2429135.jpg',
    href: 'https://www.goodreads.com/book/show/2429135.The_Girl_with_the_Dragon_Tattoo',
    category: 'Thriller',
  },
  {
    title: 'The Girl Who Played with Fire',
    author: 'Stieg Larsson',
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1351778881l/5060378.jpg',
    href: 'https://www.goodreads.com/book/show/5060378-the-girl-who-played-with-fire',
    category: 'Thriller',
  },
  {
    title: "The Girl Who Kicked the Hornet's Nest",
    author: 'Stieg Larsson',
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327708260l/6892870.jpg',
    href: 'https://www.goodreads.com/book/show/6892870-the-girl-who-kicked-the-hornet-s-nest',
    category: 'Thriller',
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

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10"
        initial="hidden"
        animate="show"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {library.map(book => (
          <motion.div
            key={book.title}
            className="flex flex-col gap-8 rounded-md p-4 transition-colors group bg-neutral-50 hover:bg-neutral-100 dark:bg-gray-800 hover:dark:bg-gray-700"
            variants={{ hidden: { opacity: 0, y: -10 }, show: { opacity: 1, y: 0, transition: { type: 'spring' } } }}
          >
            <div className="flex justify-between">
              <p className="text-sm text-neutral-400">{book.category}</p>
              <a href={book.href} target="_blank" className="hover:cursor-alias text-neutral-400" title='View on Goodreads'>
                <HiArrowUpRight />
              </a>
            </div>
            <div className="grid grow grid-cols-2 items-end gap-6 px-2">
              <img
                src={book.cover}
                className="rounded-lg shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-transform"
              />
              <div className='font-mono'>
                <h3 className="text-md dark:text-gray-400">{book.title}</h3>
                <p className="text-sm text-neutral-400">{book.author}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Layout>
  )
}
