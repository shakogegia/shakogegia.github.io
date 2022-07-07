import * as React from 'react'
import Layout from '../components/layout/main'
import SEO from '../components/seo'

export default function GardenPage() {
  return (
    <Layout>
      <SEO title="Garden" />

      <div className="flex flex-col align-center text-center">
        <span className="text-9xl">🌱</span>
        <h2 className=" mt-6 text-3xl font-mono">Digital Garden</h2>
        <h6 className=" mt-6 text-md font-mono">Seeded</h6>
      </div>
    </Layout>
  )
}
