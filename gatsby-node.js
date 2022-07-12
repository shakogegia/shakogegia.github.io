const path = require('path')

const _ = require('lodash')

const createPosts = (createPage, createRedirect, edges) => {
  edges.forEach(({ node }, i) => {
    if (node.parent.sourceInstanceName === `pages`) {
      return
    }
    const prev = i === 0 ? null : edges[i - 1].node
    const next = i === edges.length - 1 ? null : edges[i + 1].node
    const pagePath = node.fields.slug

    if (node.fields.redirects) {
      node.fields.redirects.forEach((fromPath) => {
        createRedirect({
          fromPath,
          toPath: pagePath,
          redirectInBrowser: true,
          isPermanent: true,
        })
      })
    }

    createPage({
      path: pagePath,
      component: path.resolve(`./src/templates/post.tsx`),
      context: {
        id: node.id,
        prev,
        next,
      },
    })
    
    // Legacy redirects
    createPage({
      path: `/notes/${pagePath}`,
      component: path.resolve(`./src/templates/redirect.tsx`),
      context: {
        redirect: pagePath
      },
    })
    
    // Legacy redirects
    createRedirect({
      fromPath: `/notes/*`,
      toPath: `/*`,
    });

  })
}

exports.createPages = async ({ actions, graphql }) => {
  const { data, errors } = await graphql(`
    query {
      allMdx(
        filter: { frontmatter: { published: { ne: false } } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            id
            parent {
              ... on File {
                name
                sourceInstanceName
              }
            }
            excerpt(pruneLength: 250)
            fields {
              title
              slug
              date
            }
          }
        }
      }
    }
  `)

  if (errors) {
    return Promise.reject(errors)
  }

  if (_.isEmpty(data.allMdx)) {
    return Promise.reject('There are no posts!')
  }

  const { edges } = data.allMdx
  const { createRedirect, createPage } = actions

  createPosts(createPage, createRedirect, edges)
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent)
    const titleSlugged = _.join(_.drop(parent.name.split('-'), 3), '-')

    if (parent.sourceInstanceName === `pages`) {
      return
    }

    const slug =
      parent.sourceInstanceName === 'legacy'
        ? `blog/${node.frontmatter.date.split('T')[0].replace(/-/g, '/')}/${titleSlugged}`
        : node.frontmatter.slug || titleSlugged

    createNodeField({
      name: 'id',
      node,
      value: node.id,
    })

    function extractFirstText(str) {
      const matches = str.match(/"(.*?)"/)
      return matches ? matches[1] : str
    }

    const rootFilePath = extractFirstText(parent.internal.description)

    createNodeField({
      name: 'github',
      node,
      value: `${process.env.REPO_ROOT}/${rootFilePath}`,
    })

    createNodeField({
      name: 'published',
      node,
      value: node.frontmatter.published,
    })

    createNodeField({
      name: 'title',
      node,
      value: node.frontmatter.title,
    })

    createNodeField({
      name: 'description',
      node,
      value: node.frontmatter.description,
    })

    createNodeField({
      name: 'slug',
      node,
      value: slug,
    })

    createNodeField({
      name: 'date',
      node,
      value: node.frontmatter.date ? node.frontmatter.date.split(' ')[0] : '',
    })

    createNodeField({
      name: 'banner',
      node,
      banner: node.frontmatter.banner || {},
    })

    createNodeField({
      name: 'categories',
      node,
      value: node.frontmatter.categories || [],
    })

    createNodeField({
      name: 'keywords',
      node,
      value: node.frontmatter.keywords || [],
    })

    createNodeField({
      name: 'redirects',
      node,
      value: node.frontmatter.redirects,
    })
  }
}
