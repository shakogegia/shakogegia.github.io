import Layout from '@/components/layout'
import type { NextPage } from 'next'

const Blog: NextPage = () => {
  return <Layout>Blog</Layout>
}

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default Blog
