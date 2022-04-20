import Layout from '@/components/layout'
import type { NextPage } from 'next'

const About: NextPage = () => {
  return <Layout>About</Layout>
}

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default About
