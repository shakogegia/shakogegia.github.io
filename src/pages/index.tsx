import Layout from '@/components/layout'
import fetchArticles from '@/utils/fetch-articles'
import moment from 'moment'
import Link from 'next/link'
import type { NextPage } from 'next'
import { PropsWithChildren } from 'react'

const Home: NextPage<{ articles: Array<Article & { slug: string }> }> = ({
  articles,
}) => {
  return (
    <Layout>
      <article className="prose normalized-prose md:prose-lg lg:prose-xl max-w-none iAWriterQuattro font-light mt-8 text-gray-600">
        <p>Hi I’m Shalva, a Georgian software engineer based in Amsterdam</p>
        <p>
          I'm starting this website to become my digital{' '}
          <Link href="/garden">garden 🌱</Link> where I'll share notes, articles
          & thoughts about things that interest me. Still new to digital
          gardening, but I’m learning how to grow
        </p>
        <p>
          You can reach out to me via{' '}
          <a href="mailto:shalva.gegia@gmail.com?subject=Hi">Email</a> or{' '}
          <Link href="https://twitter.com/@ShalvaGegia">
            <a target="_blank">Twitter</a>
          </Link>{' '}
          if you want to say hi. While I'm not super active on social media, I
          do check in every now and then.
        </p>
        <p>
          <Link href="/about">
            <a className="group hover:text-indigo-500 no-underline transition-colors">
              more about me
              <span className="group-hover:ml-1 transition-all"> →</span>
            </a>
          </Link>
        </p>
      </article>

      <div className="py-12">
        <div className="w-full border-t border-gray-100"></div>
      </div>

      <section>
        <h3 className="text-2xl font-semibold">Personal Favorites</h3>
        <div className="flex flex-col space-y-4 mt-4">
          <Item href="/notes/starting-digital-garden">
            Starting digital garden
          </Item>
          <Item href="/notes/dark-matter">Multiverse – Dark Matter</Item>
          <Item href="/articles/bookswap">
            BookSwap - Convenient platform for swapping books
          </Item>
        </div>
      </section>
    </Layout>
  )
}

function Item(props: PropsWithChildren<{ href: string }>) {
  return (
    <Link href={props.href}>
      <a className="inline-flex space-x-2 text-lg iAWriterDuospace hover:underline hover:text-indigo-500 transition-colors group">
        <div className="inline-flex mt-1">
          <span className="inline-flex group-hover:hidden">
            <ion-icon name="unlink-outline"></ion-icon>
          </span>

          <span className="hidden group-hover:inline-flex">
            <ion-icon name="link-outline"></ion-icon>
          </span>
        </div>

        <span>{props.children}</span>
      </a>
    </Link>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default Home
