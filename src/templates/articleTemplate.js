import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
    {
      data.allMarkdownRemark.edges.map(({ node }) => (
      <div>
      <img fluid={node.frontmatter.featuredImage.childImageSharp.fluid.src} className="attachment-full" alt="strategy" />
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      )
      )
    }
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      node {
      html
        frontmatter {
          title
          featuredImage{ 
                childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
        }
      }
    
    }
  }`