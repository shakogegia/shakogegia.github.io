import Layout from '@/components/layout'
import type { NextPage } from 'next'

const Garden: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col align-center text-center">
        <span className="text-9xl">🌱</span>
        <h2 className=" mt-6 text-3xl font-mono">Digital Garden</h2>
        <h6 className=" mt-6 text-md font-mono">Coming soon</h6>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default Garden
