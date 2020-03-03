import React from "react"
//import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
//import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
/*const webpack = require('webpack');
const module = typeof window !== `undefined` ? require("module") : null
*/

const handleInputChange = event => {
    console.log(event)
    const query = event.target.value
    const { data } = props

    const posts = data.allMarkdownRemark.edges || []

    console.log("-------------"+posts)


    /*const filteredData = posts.filter(post => {
      const { title } = post.node.frontmatter
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
      )
    })

    setState({
      query,
      filteredData,
    })*/
  }
export default ({ data }) => {
  return (
    <Layout>
    <h1 style={{ textAlign: `center` }}>Writing</h1>

      <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          aria-label="Search"
          placeholder="Type to filter posts..."
          onChange={handleInputChange}
        />
      </div>
      <div>
        <h1>ARTICLES</h1>
        <Link to="/page-2/">Home</Link>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title}{" "}
                <span>
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}

      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }`