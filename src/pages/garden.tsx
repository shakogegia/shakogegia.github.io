import Layout from '@/components/layout'
import type { NextPage } from 'next'

const Garden: NextPage = () => {
  return <Layout>Garden</Layout>
}

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default Garden
