import Layout from '@/components/layout'
import type { NextPage } from 'next'
import Link from 'next/link'

const Library: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col align-center text-center">
        <span className="text-9xl">🍀</span>
        <h2 className=" mt-6 text-3xl font-mono">Digital Library</h2>
        <h6 className=" mt-6 text-md font-mono">Seeded</h6>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default Library
