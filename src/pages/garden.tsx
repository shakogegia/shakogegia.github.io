import Layout from '@/components/layout'
import classNames from '@/utils/classnames'
import type { NextPage } from 'next'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

const Garden: NextPage = () => {
  return (
    <Layout title="Garden">
      <Heading icon="🌱" title="Digital Garden" />

      <div className="flex justify-center space-x-32 mt-20">
        <div className="flex-1">
          <Heading
            small
            icon={
              <ion-icon class="text-orange-400" name="film-outline"></ion-icon>
            }
            title="Film"
          />

          <div className="flex flex-col space-y-2 mt-10">
          </div>
        </div>

        <div className="flex-1">
          <Heading
            small
            icon={
              <ion-icon class="text-blue-500" name="book-outline"></ion-icon>
            }
            title="Books"
          />

          <div className="flex flex-col space-y-2 mt-10">
            <Item href="/notes/dark-matter">Multiverse – Dark Matter</Item>
          </div>
        </div>

        <div className="flex-1">
          <Heading
            small
            icon={
              <ion-icon
                class="text-indigo-500"
                name="laptop-outline"
              ></ion-icon>
            }
            title="Code"
          />
          <div className="flex flex-col space-y-2 mt-10">
            <Item href="/article/bookswap">BookSwap</Item>
            <Item href="/article/english-to-georgian-dictionary">Kindle</Item>
          </div>
        </div>
      </div>
    </Layout>
  )
}

function Heading(props: { small?: boolean; icon: any; title: string }) {
  return (
    <div className="flex flex-col align-center text-center">
      <span className={classNames(props.small ? 'text-6xl' : 'text-9xl')}>
        {props.icon}
      </span>
      <h2
        className={classNames(
          'mt-6 font-mono',
          props.small ? 'text-xl' : 'text-3xl'
        )}
      >
        {props.title}
      </h2>
      {/* <h6 className="mt-6 text-md font-mono">Seeded</h6> */}
    </div>
  )
}

function Item(props: PropsWithChildren<{ href: string }>) {
  return (
    <Link href={props.href}>
      <a className="inline-flex space-x-2 iAWriterDuospace hover:underline hover:text-indigo-500 transition-colors group">
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

export default Garden
