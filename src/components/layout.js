/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {Component} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
//import ReactModal from 'react-modal'
import { Link } from '@reach/router'
import logo from "../images/Unified-Logo-2-2.png"
import Header from "./header"
import "./layout.css"
const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "active" } : {}
}

const ExactNavLink = props => (
  <Link {...props} getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          color: isCurrent ? "red" : "white"
        }
      };
    }}
  />
)

// this link will be active when itself or deeper routes
// are current
const isPartiallyActive = ({
  isPartiallyCurrent
}) => {
  return isPartiallyCurrent
    ? { className: "active" }
    : {}
}

const PartialNavLink = props => (
  <Link getProps={isPartiallyActive} {...props} />
)
    
 const Layout = ({ children }) => {
return (

	    <body>
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
                  <div className="d-flex justify-content-end col-sm-1 col-md-9 menu-lg">
                      <ul className="menus">
                        <li><Link to="/" partiallyActive={true}><i className="menu_icon blank fa"></i><span>Home</span><span className="plus"></span></Link></li>
                        <li className="menu-item">
                          <Link to="#"><i className="menu_icon blank fa"></i><span>About</span><span className="plus"></span></Link>
                          <div className="second">
                            <div className="inner">
                              <ul>
                                <li className="sub-menu-item"><Link to="/our-story/"><i className="menu_icon blank fa"></i><span>Our Story</span></Link></li>
                                <li className="sub-menu-item"><Link to="/technology_partners" className=""><i className="menu_icon blank fa"></i><span>Technology Partners</span></Link></li>
                                <li className="sub-menu-item"><Link to="/reseller_business_partners" className=""><i className="menu_icon blank fa"></i><span>Resellers &amp; Business Partners</span></Link></li>
                                <li className="sub-menu-item"><Link to="/terms_and_conditions" className=""><i className="menu_icon blank fa"></i><span>Terms and Conditions</span></Link></li>
                               <li className="sub-menu-item"><Link to="/careers" className=""><i className="menu_icon blank fa"></i><span>Careers</span></Link></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="menu-item wide">
                          <Link to="#" className=""><i className="menu_icon blank fa"></i><span>Solutions</span><span className="plus"></span></Link>
                           <div className="second" style={{width:'1140px'}}>
                            <div className="inner">
                              <ul>
                                <li className="sub-menu-item"><Link to="javascript:void(0)" className=" no_link"><i className="menu_icon blank fa"></i><span>Service Delivery</span></Link>
                                  <ul>
                                    <li className="sub-menu-item"><Link to="/managed_services_uae_phillippines" className=""><i className="menu_icon blank fa"></i><span>Managed Services in UAE &amp; Philippines</span></Link></li>
                                    <li className="sub-menu-item"><Link to="/hosted_solutions" className=""><i className="menu_icon blank fa"></i><span>Hosted Solutions</span></Link></li>
                                    <li className="sub-menu-item"><Link to="/disaster_recovery_business_continuity" className=""><i className="menu_icon blank fa"></i><span>Disaster Recovery &amp; Business Continuity</span></Link></li>
                                  </ul>
                                </li>
                                <li className="sub-menu-item">
                                  <Link to="#" className="no_link"><i className="menu_icon blank fa"></i><span>Consultancy</span></Link>
                                  <ul>
                                    <li className="sub-menu-item"><Link to="/strategic_it_planning_architecture" className=""><i className="menu_icon blank fa"></i><span>Strategic IT Planning &amp; Architecture</span><span className="plus"></span></Link></li>
                                    <li className="sub-menu-item"><Link to="/network_end_point_security" className=""><i className="menu_icon blank fa"></i><span>Network &amp; End-Point Security Solutions</span><span className="plus"></span></Link></li>
                                    <li className="sub-menu-item"><Link to="/software_development" className=""><i className="menu_icon blank fa"></i><span>Software Development</span></Link></li>
                                  </ul>
                                </li>
                                <li className="sub-menu-item">
                                  <Link to="#" className="no_link"><i className="menu_icon blank fa"></i><span>Infrastructure</span></Link>
                                  <ul>
                                    <li className="sub-menu-item"><Link to="/it_office_setup_uae_phillippines" className=""><i className="menu_icon blank fa"></i><span>IT Office Setup in UAE &amp; Philippines</span></Link></li>
                                    <li className="sub-menu-item"><Link to="/smart_building_home_automation" className=""><i className="menu_icon blank fa"></i><span>Smart Building, Office &amp; Home Automation Solutions</span></Link></li>
                                    <li className="sub-menu-item"><Link to="/structured_cabling_wireless" className=""><i className="menu_icon blank fa"></i><span>Structured Cabling &amp; Wireless</span></Link></li>
                                  </ul>
                                </li>
                                <li className="sub-menu-item">
                                  <Link to="#" className=" no_link" style={{cursor: 'default'}} ><i className="menu_icon blank fa"></i><span>Communications</span></Link>
                                  <ul>
                                    <li className="sub-menu-item"><Link to="/unified_communications" className=""><i className="menu_icon blank fa"></i><span>Unified Communications</span><span className="plus"></span></Link></li>
                                    <li className="sub-menu-item"><Link to="/contact_centers" className=""><i className="menu_icon blank fa"></i><span>Contact Centers</span><span className="plus"></span></Link></li>
                                    <li className="sub-menu-item"><Link to="/hold_music_ivr_voice_recording" className=""><i className="menu_icon blank fa"></i><span>Hold Music &amp; IVR Voice Recording</span></Link></li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div> 
                        </li>
                        <li className="menu-item">
                          <Link to="#" className=""><i className="menu_icon blank fa"></i><span>Resources</span><span className="plus"></span></Link>
                          <div className="second">
                            <div className="inner">
                              <ul>
                                <li className="sub-menu-item"><Link to="/articles" className=""><i className="menu_icon blank fa"></i><span>Articles</span><span className="plus"></span></Link></li>
                                <li className="sub-menu-item"><Link to="/open_source_software" className=""><i className="menu_icon blank fa"></i><span>Open Source Software</span></Link></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="menu-item"><Link to="/contact" className=""><i className="menu_icon blank fa"></i><span>Contact</span></Link></li>

                        <li className="search">
                          <div className="header_inner_right">
                            <div className="side_menu_button">
                              <Link to="/">
                                <i className="qode_icon_font_awesome fa fa-search "></i>  
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="mobile-menu"> 
                        <ul className="menu-main-menu">
                          <li className="menu-item">
                            <Link to="/" className=" current "><span>Home</span></Link>
                          </li>
                          <li className="menu-item has-sub-menu open_sub">
                            <Link to="#" className="current"><span>About</span></Link>
                            <ul className="sub_menu">
                              <li className="menu-item">
                                <Link to="/our_story" className=""><span>Our Story</span></Link>
                              </li>
                              <li className="menu-item">
                                <Link to="/technology_partners" className=""><span>Technology Partners</span></Link>
                              </li>
                              <li className="menu-item">
                                <Link to="/resellers_business_partners" className="">
                                  <span>Resellers &amp; Business Partners</span>
                                </Link>
                              </li>
                              <li className="menu-item">
                                <Link to="/terms_and_conditions" className=""><span>Terms and Conditions</span></Link>
                              </li>
                              <li className="menu-item">
                                <Link to="/careers" className=""><span>Careers</span></Link>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item has-sub-menu open_sub">
                            <Link to="#" className=""><span>Solutions</span></Link>
                              <ul className="sub_menu">
                              <li className="menu-item menu-item-has-children has_sub open_sub"><h3><span>Service Delivery</span></h3>
                                <ul className="sub_menu">
                                  <li className="menu-item"><Link to="/managed_services_uae_philippines" className=""><span>Managed Services in UAE &amp; Philippines</span></Link></li>
                                  <li className="menu-item"><Link to="/hosted_solutions" className=""><span>Hosted Solutions</span></Link></li>
                                  <li className="menu-item"><Link to="/disaster_recovery_business_continuity" className=""><span>Disaster Recovery &amp; Business Continuity</span></Link></li>
                                </ul>
                              </li>
                              <li className="menu-item has-sub-menu"><h3><span>Consultancy</span></h3>
                                <ul className="sub_menu">
                                  <li className="menu-item"><Link to="/strategic_it_planning_architecture" className=""><span>Strategic IT Planning &amp; Architecture</span></Link></li>
                                  <li className="menu-item"><Link to="/network_end_point_security" className=""><span>Network &amp; End-Point Security Solutions</span></Link></li>
                                  <li className="menu-item"><Link to="/software_development" className=""><span>Software Development</span></Link></li>
                                </ul>
                              </li>
                              <li className="menu-item menu-item-has-children has-sub-menu"><h3><span>Infrastructure</span></h3>
                                <ul className="sub_menu">
                                  <li className="menu-item"><Link to="/it_office_setup_uae_philippines" className=""><span>IT Office Setup in UAE &amp; Philippines</span></Link></li>
                                  <li className="menu-item"><Link to="/smart_building_home_automation" className=""><span>Smart Building, Office &amp; Home Automation Solutions</span></Link></li>
                                  <li className="menu-item"><Link to="/structured_cabling_wireless" className=""><span>Structured Cabling &amp; Wireless</span></Link></li>
                                </ul>
                              </li>
                              <li className="menu-item menu-item-has-children has-sub-menu"><h3><span>Communications</span></h3>
                                <ul className="sub_menu">
                                  <li className="menu-item"><Link to="/unified_communications" className=""><span>Unified Communications</span></Link></li>
                                  <li className="menu-item"><Link to="/contact_centers" className=""><span>Contact Centers</span></Link></li>
                                  <li className="menu-item"><Link to="/hold_music_ivr_voice_recording" className=""><span>Hold Music &amp; IVR Voice Recording</span></Link></li>
                                </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-has-children  has-sub-menu"><Link to="#" className=""><span>Resources</span></Link>
                          <ul className="sub_menu">
                            <li className="menu-item"><Link to="/articles" className=""><span>Articles</span></Link></li>
                            <li className="menu-item"><Link to="/open_source_software" className=""><span>Open Source Software</span></Link></li>
                          </ul>
                        </li>
                        <li className="menu-item"><Link to="/contact" className=""><span>Contact</span></Link></li>
                      </ul>
                    </div>

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
  <span id="back-top" class="fa fa-arrow-up"></span>
  
    </body>

)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout