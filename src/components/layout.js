/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {Component,useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
//import ReactModal from 'react-modal'
import { Link } from '@reach/router'
import logo from "../images/Unified-Logo-2-2.png"
import Header from "./header"
import "./layout.css"
import Search from "../components/SearchContainer"
import NavbarLinks from "./NavbarLinks"
import styled from 'styled-components'


const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;

  @media (max-width: 1000px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 1000px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
//import Search from "./search"
const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          color: isCurrent ? "red" : "black"
        }
      };
    }}
  />
);
    
 const Layout = ({ children }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
return (

	    <>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
	  <header className="page_header">
        <div className="header_inner">
        <form role="search" id="searchform" action="#" className="qode_search_form" method="get">
          <div className="container">
            <div className="container_inner clearfix">
              <i className="qode_icon_font_awesome fa fa-search qode_icon_in_search"></i>            
              <input type="text" placeholder="Search" name="s" className="qode_search_field" autoComplete="off" />
              <input type="submit" value="Search" />
              <div className="qode_search_close">
                <Link to="#"> <i className="qode_icon_font_awesome fa fa-times qode_icon_in_search"></i> </Link>
              </div>
            </div>
          </div>
        </form>
        <div className="header_top_bottom_holder">
          <div className="header-top">
            <div className="container">
              <div className="container_inner">
                <div className="row">
                  <div className="col-sm-6 left">
                    <div className="inner">
                      <div className="header-left">
                        <div className="custom-html">
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="full_section_inner">                                
                                <div className="column-inner">
                                  <div className="social-link">
                                    <ul className="social_icon">
                                      <li>
                                        <a href="https://www.facebook.com/unifiedmicrosystems/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                      </li>
                                      <li>
                                        <Link to="javascript:void(0)" target="_blank"><i className="fa fa-linkedin"></i></Link>
                                      </li>
                                      <li>
                                        <Link to="javascript:void(0)" target="_blank"><i className="fa fa-youtube"></i></Link>
                                      </li>
                                      <li>
                                        <Link to="javascript:void(0)" target="_blank"><i className="fa fa-instagram"></i></Link>
                                      </li>
                                    </ul> 
                                  </div>
                                  <div className="cta-top">|  Best of Breed Technologies, One Unified Solution</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 right">
                    <div className="inner">
                      <div className="d-flex justify-content-end">
                        <Link itemProp="url" to="tel:+97142432025" target="_self" className="call-to-action-button">Call Now: +971 4 243 2025</Link>
                        <Link itemProp="url" to="/contact" target="_self" className="call-to-quote">Request A Quote</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div className="header-logo-bottom">
            <div className="container">
              <div className="container_inner">
              <div className="row">
                  <div className="mobile_menu_button col-sm-2">
                    <span>
                      <span aria-hidden="true" className="qode_icon_font_elegant icon_menu mob-menu">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                      </span>    
                    </span>
                  </div>
                  <div className="d-flex justify-content-start col-sm-8 col-md-3 logo-lg">
                    <div className="logos"><Link to="/"><img src={logo} /></Link></div>
                  </div>
                  
                      <Navigation>
      <Toggle className={navbarOpen}
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
                    

                  </div>
              </div>
            </div>
          </div>     
        </div>
    </div>

    </header>

    {children}

  <footer className="footer-section">
    <div className="footer-set">
        <div className="container">
          <div className="copy-right">
            <p>©2020 Unified Microsystems</p>
          </div>
        </div>
    </div>
  </footer>
  <span id="back-top" className="fa fa-arrow-up"></span>
  
    </>

)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout