import React from 'react'
import Layout from '../components/layout/main'
import SEO from '../components/seo'
import GifTip from 'src/components/gif-tip'
import Gallery from 'src/components/gallery'
import { graphql } from 'gatsby'

export default function SketchesPage({ data }: any) {
  return (
    <Layout>
      <SEO title="Sketches" />

      <div className="prose prose-lg max-w-none my-5 iAWriterDuospace text-gray-600 dark:text-gray-400">
        <p>
          I love painting. I love it since I remember myself. Even my very first memories are about
          painting. It may sound unbelievable, but I remember myself as a kid in the kindergarten, painting with
          my friends; This memory is so vivid that I can still feel the smell of the paint and the taste of the paper.
          It was an easy task, we just had to paint 3 circles: one small, one medium and large one. We used brushes and
          watercolors, even remember the color I chose - blue. 
        </p>

        <p>
          Time has passed since, but I never stopped loving painting. From time to time I've found myself craving for painting.
          In 2020, when covid ruled the world and everyone was forced to stay at home, I found myself painting more than ever.
          I've brought brushes, pencils, pens, fountain pens, sketchbooks, watercolors, acrylics, gouache, pastels,
          and everything I could find at my local art store in Utrecht. But this is not all, I've also bought a
          art books and now I have a quite a few of them;
        </p>

        <p>
          Finally, I ended up with <a href="https://urbansketchers.org/" target="_blank">Urban Sketching</a>, found it as my most
          favorite art style. I love the idea of sketching the world around me, capturing the moment, the place, the
          people, the atmosphere. Besides, Netherland is a perfect place for urban sketching.
        </p>

        <p>Here are some of my recent sketches...</p>
      </div>

      <p className="mb-10 iAWriterDuospaceItalic text-gray-400">Hera are list of cameras I own:</p>

      <div className="">
        <Gallery className='object-cover' images={data.allFile.edges.map((edge: any) => edge.node.childImageSharp.fluid.src)} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allFile(
      sort: {name: ASC},
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
