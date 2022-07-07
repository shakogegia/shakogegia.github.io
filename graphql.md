```graphql
query MyQuery {
  allMdx {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        description
        published
      }
    }
  }
}
```