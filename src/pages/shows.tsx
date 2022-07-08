import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout/main'
import SEO from '../components/seo';

import Friends from "../images/shows/friends.jpg"
import GoOn from "../images/shows/go_on.jpg"
import Got from "../images/shows/got.jpg"
import HouseOfCards from "../images/shows/house_of_cards.jpg"
import Sherlock from "../images/shows/sherlock.jpg"
import Westworld from "../images/shows/westworld.jpg"
import YoungPope from "../images/shows/young_pope.jpg"
import Sopranos from "../images/shows/sopranos.jpg"

export default function ShowsPage() {
  return (
    <Layout className="max-w-7xl">
      <SEO title="Shows I Watch" />

      <div className="flex flex-col align-center text-center mt-4">
        <span className="text-9xl p-1">📽</span>
        <h2 className="mt-6 text-3xl font-mono transition-colors dark:text-gray-200">Shows I watch</h2>
        <h6 className="mt-6 text-md font-mono max-w-md mx-auto text-gray-500">
          Some of the memorable shows worth mentioning. "Friends" is on top of
          the list, I've been a fan of it for a long time and watched it over
          100 times.
        </h6>
      </div>

      <section className="grid mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center gap-8 mt-10">
        <Item
          title="Friends"
          cover={Friends}
        />
        <Item
          title="Go On"
          cover={GoOn}
        />
        <Item
          title="The Sopranos"
          cover={Sopranos}
        />
        <Item
          title="Westworld"
          cover={Westworld}
        />
        <Item
          title="House Of Cards"
          cover={HouseOfCards}
        />
        <Item
          title="GOT"
          cover={Got}
        />
        <Item
          title="The Young Pope"
          cover={YoungPope}
        />
        <Item
          title="Sherlock"
          cover={Sherlock}
        />
      </section>
    </Layout>
  )
}

function Item(props: { title: string; cover: string }) {
  return (
    <article className='flex justify-center'>
      <img
        src={props.cover}
        alt={props.title}
        className="w-[380px] h-[540px] rounded-md object-cover"
      />
    </article>
  )
}

