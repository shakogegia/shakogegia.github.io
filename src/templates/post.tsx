import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import * as React from 'react'
import Layout from '../components/layout/main'
import SEO from '../components/seo'

export default function Post({ data: { site, mdx }, pageContext: { next, prev } }: any) {
  return (
    <Layout>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.excerpt}
        image={mdx.frontmatter.banner?.childImageSharp?.fluid.src}
        pathname={`/${mdx.frontmatter.slug}`}
        article
      />

      <div className="max-w-3xl m-auto mt-8">
        <h3 className="text-2xl iAWriterDuospaceBold DejaVuSansMonoBold">{mdx.frontmatter.title}</h3>

        <div className="prose max-w-none mt-6 prose-lg iAWriterDuospace DejaVuSansMono text-gray-500">
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>

        <div className="mt-14">
          <em className="font-extralight iAWriterDuospaceItalic text-gray-400">Published on {mdx.frontmatter.date}</em>
        </div>

        <div className="py-20">
          <div className="w-full border-t border-gray-100"></div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      excerpt(pruneLength: 240)
      fields {
        github
      }
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        banner {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
            fixed(width: 500) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        slug
        keywords
      }
    }
  }
`
