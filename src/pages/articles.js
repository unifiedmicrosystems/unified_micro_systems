import React from "react"
//import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
//import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
/*const webpack = require('webpack');
const module = typeof window !== `undefined` ? require("module") : null
*/export default ({ data }) => {
  return (
    <Layout>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
        <article class="post-view">
          <div class="post-blog-content">
            <div class="blog-post-image">
              <a itemprop="url" href="#" title="">
                <img  src="images/home-banner-1.jpg" class="attachment-full" alt="strategy" />            
              </a>
            </div>

            <div class="blog-post-text">
              <div class="blog-post-text-inner">
                <h2 itemprop="name" class="entry_title">
                  <Link to={node.fields.slug}>{node.frontmatter.title}{" "}</Link>
                </h2>
                <div class="blog-post-info">
                  <span class="time">{node.frontmatter.date}</span> in Articles
                  <span class="dots"><i class="fa fa-square"></i></span>
                </div>
                <p itemprop="description" class="blog-excerpt">{node.excerpt}</p>
                <div class="post_more">
                  <Link to={node.fields.slug} class="qbutton small">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </article>
          </div>
        ))}
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