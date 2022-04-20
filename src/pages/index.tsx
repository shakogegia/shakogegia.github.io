import Layout from '@/components/layout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return <Layout>home</Layout>
}

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default Home
