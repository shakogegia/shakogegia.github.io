import { motion } from 'framer-motion'
import React from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'
import Hero from 'src/components/layout/hero'
import Layout from '../components/layout/main'
import SEO from '../components/seo'
import library from '../resources/library'

export default function LibraryPage() {
  return (
    <Layout>
      <SEO title="Books I read" />

      <Hero title="Digital Library" color="text-indigo-500">
          Here are some of the books I love, admire and find myself frequently returning to them.
          <p>As you can see I'm huge fan of the Sci-Fi and thanks Philip K. Dick for that</p>
      </Hero>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-10"
        initial="hidden"
        animate="show"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {library.map((book: any) => (
          <motion.div
            key={book.title}
            className="flex flex-col gap-8 rounded-md p-4 transition-colors group bg-neutral-50 hover:bg-neutral-100 dark:bg-gray-800 hover:dark:bg-gray-700"
            variants={{ hidden: { opacity: 0, y: -10 }, show: { opacity: 1, y: 0, transition: { type: 'spring' } } }}
          >
            <div className="flex justify-between">
              <p className="text-sm tracking-tight text-neutral-400">{book.category}</p>
              <a href={book.href} target="_blank" className="hover:cursor-alias text-neutral-400" title='View on Goodreads'>
                <HiArrowUpRight />
              </a>
            </div>
            <div className="grid grow grid-cols-2 items-end gap-6 px-2">
              <img
                src={book.cover}
                className="rounded-lg shadow-lg group-hover:shadow-xl group-hover:-translate-y-1 transition-transform"
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
