import Layout from '@/components/layout'
import type { NextPage } from 'next'
import Link from 'next/link'

const Library: NextPage = () => {
  return (
    <Layout className="max-w-7xl">
      <div className="flex flex-col align-center text-center mt-4">
        <span className="text-9xl p-1">📽</span>
        <h2 className="mt-6 text-3xl font-mono">Shows I watch</h2>
        <h6 className="mt-6 text-md font-mono max-w-md mx-auto text-gray-500">
          Some of the memorable shows worth mentioning. "Friends" is on top of
          the list, I've been a fan of it for a long time and watched it over
          100 times.
        </h6>
      </div>

      <section className="grid grid-cols-3 gap-8 mt-10">
        <Item
          title="Friends"
          cover="https://assets.nflxext.com/us/boxshots/hd1080/70153404.jpg"
        />
        <Item
          title="Go On"
          cover="https://m.media-amazon.com/images/M/MV5BMTYwOTgwOTU2OF5BMl5BanBnXkFtZTcwNDQ5NTU0OA@@._V1_.jpg"
        />
        <Item
          title="The Sopranos"
          cover="https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
        />
        <Item
          title="Westworld"
          cover="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mv5bmtrmyznmotctzjmwos00odzllwjizgqtndg5ndy5nje3mtczxkeyxkfqcgdeqxvymdm2ndm2mqatat-v1-1-1587400003.jpg"
        />
        <Item
          title="House Of Cards"
          cover="https://media.s-bol.com/gZ7MZknO9Nqr/970x1200.jpg"
        />
        <Item
          title="GOT"
          cover="https://media.s-bol.com/mZZGQpmMZ2ZO/550x793.jpg"
        />
        <Item
          title="The Young Pope"
          cover="https://media.s-bol.com/ml10jnnj3mp/847x1200.jpg"
        />
        <Item
          title="Sherlock"
          cover="https://static.posters.cz/image/750/posters/sherlock-series-4-iconic-i33910.jpg"
        />
      </section>
    </Layout>
  )
}

function Item(props: { title: string; cover: string }) {
  return (
    <article>
      <img
        src={props.cover}
        alt={props.title}
        className="w-[380px] h-[540px] rounded-md object-cover"
      />
    </article>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default Library
