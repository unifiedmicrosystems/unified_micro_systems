import React from "react"
//import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
//import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import Img from "gatsby-image"
/*const webpack = require('webpack');
const module = typeof window !== `undefined` ? require("module") : null
*/export default ({ data }) => {
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
        <article className="post-view">
          <div className="post-blog-content">
            <div className="blog-post-image">
              <a itemprop="url" href="#" title="">
                <img fluid={featuredImgFluid} className="attachment-full" alt="strategy" />            
              </a>
            </div>

            <div className="blog-post-text">
              <div className="blog-post-text-inner">
                <h2 itemprop="name" className="entry_title">
                  <Link to={node.fields.slug}>{node.frontmatter.title}{" "}</Link>
                </h2>
                <div className="blog-post-info">
                  <span className="time">{node.frontmatter.date}</span> in Articles
                  <span className="dots"><i className="fa fa-square"></i></span>
                </div>
                <p itemprop="description" className="blog-excerpt">{node.excerpt}</p>
                <div className="post_more">
                  <Link to={node.fields.slug} className="qbutton small">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </article>
          </div>
        )
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
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }`