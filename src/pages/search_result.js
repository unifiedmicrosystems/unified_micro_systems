import React, {useReact, useState} from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

const BlogIndex = props => {
  const { data } = props
  const allPosts = data.allMarkdownRemark.edges

  const emptyQuery = ""

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value
    const { data } = props

    const posts = data.allMarkdownRemark.edges || []

    const filteredData = posts.filter(post => {
      const { title, tags } = post.node.frontmatter
      return ( title.toLowerCase().includes(query.toLowerCase()) )
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts
  return (
    <Layout>
        <div className="banner-with-title">
    <div className="bn-title">
      <div className="container">
        <div className="main-st">
          <h1><span>Search</span></h1>
        </div>
      </div>
    </div>
  </div>
      <div className="searchBox">
     <div className="container">
        <input
          className="searchInput"
          type="text"
          aria-label="Search"
          placeholder="Type to filter posts..."
          onChange={handleInputChange}
        />
        </div>
      </div>
      <div className="blog-posts">
      <div className="container">
      <div className="blog-st">
      {posts.map(({ node }) => {
        const { excerpt } = node

        const { slug } = node.fields
        const { title, date } = node.frontmatter
        return (
          <article key={slug}>
          <div className="post-blog-content">
            <div className="blog-post-image">
              <a itemprop="url" href="#" title="">
                <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} className="attachment-full" alt="strategy" />
                
              </a>
            </div>
            <div className="blog-post-text">
              <div className="blog-post-text-inner">
                <h2 itemprop="name" className="entry_title">
                <div key={node.id}><Link to={slug}>{title}</Link></div>
              </h2>
              <div className="blog-post-info">
                  <span className="time">{date}</span> in Articles
                  <span className="dots"><i className="fa fa-square"></i></span>
                </div>
              </div>
              </div>
              <p itemProp="description" className="blog-excerpt"
                dangerouslySetInnerHTML={{
                  __html: excerpt,
                }}
              />
            <div className="post_more">
                  <Link to={slug} className="qbutton small">Read More</Link>
                </div>
            <hr />
            </div>
          </article>
        )
      })}
      </div>
      </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            featuredImage{ 
              childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          }

          fields {
            slug
          }
        }
      }
    }
  }
`