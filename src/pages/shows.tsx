import { motion } from 'framer-motion'
import React from 'react'
import Layout from '../components/layout/main'
import SEO from '../components/seo'
import Friends from '../../static/shows/friends.jpg'
import Got from '../../static/shows/got.jpg'
import GoOn from '../../static/shows/go_on.jpg'
import HouseOfCards from '../../static/shows/house_of_cards.jpg'
import Sherlock from '../../static/shows/sherlock.jpg'
import Sopranos from '../../static/shows/sopranos.jpg'
import Westworld from '../../static/shows/westworld.jpg'
import YoungPope from '../../static/shows/young_pope.jpg'

export default function ShowsPage() {
  return (
    <Layout className="max-w-7xl">
      <SEO title="Shows I Watch" />

      <div className="flex flex-col align-center text-center mt-4">
        <span className="text-9xl p-1">📽</span>
        <h2 className="mt-6 text-3xl font-mono transition-colors dark:text-gray-200">Shows I watch</h2>
        <h6 className="mt-6 text-md font-mono max-w-md mx-auto text-gray-500">
          Some of the memorable shows worth mentioning. "Friends" is on top of the list, I've been a fan of it for a
          long time and watched it over 100 times.
        </h6>
      </div>

      <motion.div
        className="grid mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center gap-8 mt-10"
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
        <Item title="Friends" cover={Friends} />
        <Item title="Go On" cover={GoOn} />
        <Item title="The Sopranos" cover={Sopranos} />
        <Item title="Westworld" cover={Westworld} />
        <Item title="House Of Cards" cover={HouseOfCards} />
        <Item title="GOT" cover={Got} />
        <Item title="The Young Pope" cover={YoungPope} />
        <Item title="Sherlock" cover={Sherlock} />
      </motion.div>
    </Layout>
  )
}

function Item(props: { title: string; cover: string }) {
  return (
    <motion.div
      className="flex justify-center"
      variants={{ hidden: { opacity: 0, y: -10 }, show: { opacity: 1, y: 0, transition: { type: 'spring' } } }}
    >
      <img src={props.cover} alt={props.title} className="w-[380px] h-[540px] rounded-md object-cover" loading="lazy" />
    </motion.div>
    
  )
}
