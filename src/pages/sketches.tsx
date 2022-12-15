import { graphql } from 'gatsby'
import React from 'react'
import Gallery from 'src/components/gallery'
import Layout from '../components/layout/main'
import SEO from '../components/seo'

export default function SketchesPage({ data }: any) {
  return (
    <Layout>
      <SEO title="Sketches" />

      <div className="prose prose-lg max-w-none my-5 iAWriterDuospace text-gray-600 dark:text-gray-400">
        <p>
          My love for painting has been a constant in my life, a passion that has stayed with me through the years. Even
          as a child, I remember the thrill of picking up a brush and watching the colors dance across the page, the
          smell of the paint filling my senses. It was as if I had discovered a part of myself that I never knew
          existed, a sense of freedom and joy that I had never before experienced.
        </p>
        <p>
          As I grew older, my love for painting only deepened. I continued to explore different mediums and styles,
          finding solace and creativity in each brushstroke. In 2020, when the world was consumed by the Covid-19
          pandemic and we were all forced to stay at home, I found myself drawn to painting more than ever. I stocked up
          on supplies, filling my shelves with pencils, pens, and paints of every color. I even discovered a new love in
          urban sketching, the art of capturing the world around me in quick, vibrant strokes.
        </p>
        <p>
          The Netherlands, with its stunning cities and landscapes, is the perfect place for urban sketching. I find
          myself constantly inspired by the people, places, and atmosphere of this country, and I pour that inspiration
          into my art. Each sketch is a moment in time, a memory frozen on paper for all eternity.
        </p>
        <p>
          Through painting, I have found a sense of purpose and fulfillment. It is a passion that will always be with
          me, a constant source of joy and creativity. And I will continue to paint, to capture the beauty of the world
          around me and share it with others.
        </p>
      </div>

      <p className="mb-10 iAWriterDuospaceItalic text-gray-400">Here are some of my recent sketches...</p>

      <div className="">
        <Gallery
          className="object-cover"
          images={data.allFile.edges.map((edge: any) => edge.node.childImageSharp.fluid.src)}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allFile(
      sort: { name: ASC }
      filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" }, sourceInstanceName: { eq: "sketches" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100) {
              originalName
              ...GatsbyImageSharpFluid
            }
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`
