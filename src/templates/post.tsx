import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import * as React from 'react'
import Share from 'src/components/share'
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
        <h3 className="text-3xl max-w-lg mx-auto text-center iAWriterDuospaceBold transition-colors dark:text-gray-200">{mdx.frontmatter.title}</h3>

        <div className="prose max-w-none mt-16 prose-lg iAWriterDuospace break-words  text-gray-500 transition-colors dark:text-gray-300 dark:prose-a:text-gray-200 dark:prose-strong:text-gray-200 dark:prose-blockquote:text-gray-200">
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>

        <div className="mt-14">
          <em className="font-extralight iAWriterDuospaceItalic text-gray-400">Published on {mdx.frontmatter.date}</em>
        </div>

        <div className="py-20">
          <div className="w-full border-t border-gray-100 transition-colors dark:border-gray-600"></div>
        </div>
      </div>

      <div className='mb-20'>
        <Share url={`/${mdx.frontmatter.slug}`} text={mdx.frontmatter.title} />
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
