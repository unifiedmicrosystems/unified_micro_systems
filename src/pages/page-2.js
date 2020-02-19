import React from "react"
import { Link } from "gatsby"
import ReactDOM from "react-dom";
import Layout from "../components/layout"
import SEO from "../components/seo"
import OwlCarousel from 'react-owl-carousel';
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
//const webpack = require('webpack');
//const module = typeof window !== `undefined` ? require("module") : null

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
          <header className="page_header">
        <div className="header_inner">
        <form role="search" id="searchform" action="https://www.unifiedmicro.systems/" className="qode_search_form" method="get">
          <div className="container">
            <div className="container_inner clearfix">
              <i className="qode_icon_font_awesome fa fa-search qode_icon_in_search"></i>            
              <input type="text" placeholder="Search" name="s" className="qode_search_field" autoComplete="off" />
              <input type="submit" value="Search" />
              <div className="qode_search_close">
                <a href="#"> <i className="qode_icon_font_awesome fa fa-times qode_icon_in_search"></i> </a>
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
                                        <a href="#" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                      </li>
                                      <li>
                                        <a href="#" target="_blank"><i className="fa fa-linkedin"></i></a>
                                      </li>
                                      <li>
                                        <a href="#" target="_blank"><i className="fa fa-youtube"></i></a>
                                      </li>
                                      <li>
                                        <a href="#" target="_blank"><i className="fa fa-instagram"></i></a>
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
                        <a itemProp="url" href="tel:+97142432025" target="_self" className="call-to-action-button">Call Now: +971 4 243 2025</a>
                        <a itemProp="url" href="https://www.unifiedmicro.systems/contact" target="_self" className="call-to-quote">Request A Quote</a>
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
                  <div className="d-flex justify-content-start col-sm-3">
                    <div className="logos"><img src="https://www.unifiedmicro.systems/wp-content/uploads/2018/10/Unified-Logo-2-2.png" /></div>
                  </div>
                  <div className="d-flex justify-content-end col-sm-9">
                      <ul className="menus">
                        <li><Link to="/page-2/"><i className="menu_icon blank fa"></i><span>Home</span><span className="plus"></span></Link></li>
                        <li className="menu-item">
                          <a href="#" className=""><i className="menu_icon blank fa"></i><span>About</span><span className="plus"></span></a>
                          <div className="second">
                            <div className="inner">
                              <ul>
                                <li className="sub-menu-item"><Link to="/our-story/"><i className="menu_icon blank fa"></i><span>Our Story</span><span className="plus"></span></Link></li>
                                <li className="sub-menu-item"><a href="https://www.unifiedmicro.systems/technology-partners/" className=""><i className="menu_icon blank fa"></i><span>Technology Partners</span><span className="plus"></span></a></li>
                                <li className="sub-menu-item"><a href="https://www.unifiedmicro.systems/resellers-business-partners/" className=""><i className="menu_icon blank fa"></i><span>Resellers &amp; Business Partners</span><span className="plus"></span></a></li>
                                <li className="sub-menu-item"><a href="https://www.unifiedmicro.systems/terms-and-conditions/" className=""><i className="menu_icon blank fa"></i><span>Terms and Conditions</span><span className="plus"></span></a></li>
                               <li className="sub-menu-item"><a href="https://www.unifiedmicro.systems/careers/" className=""><i className="menu_icon blank fa"></i><span>Careers</span><span className="plus"></span></a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="menu-item wide">
                          <a href="#" className=""><i className="menu_icon blank fa"></i><span>Solutions</span><span className="plus"></span></a>
                           <div className="second" style={{left: '-722.406px'}}>
                            <div className="inner">
                              <ul style={{width: '1140px'}}>
                                <li className="sub-menu-item"><a href="" className=" no_link"><i className="menu_icon blank fa"></i><span>Service Delivery</span><span className="plus"></span><i className="q_menu_arrow fa fa-angle-right"></i></a>
                                  <ul>
                                    <li className="sub-menu-item"><a href="https://www.unifiedmicro.systems/managed-services-uae-philippines/" className=""><i className="menu_icon blank fa"></i><span>Managed Services in UAE &amp; Philippines</span><span className="plus"></span></a></li>
                                    <li className="sub-menu-item"><a href="https://www.unifiedmicro.systems/hosted-solutions/" className=""><i className="menu_icon blank fa"></i><span>Hosted Solutions</span><span className="plus"></span></a></li>
                                    <li className="sub-menu-item"><a href="https://www.unifiedmicro.systems/disaster-recovery-business-continuity/" className=""><i className="menu_icon blank fa"></i><span>Disaster Recovery &amp; Business Continuity</span><span className="plus"></span></a></li>
                                  </ul>
                                </li>
                                <li className="sub-menu-item">
                                  <a href="http://#" className="no_link"><i className="menu_icon blank fa"></i><span>Consultancy</span><span className="plus"></span><i className="q_menu_arrow fa fa-angle-right"></i></a>
                                  <ul>
                                    <li className="sub-menu-item"><a href="https://www.unifiedmicro.systems/strategic-it-planning-architecture/" className=""><i className="menu_icon blank fa"></i><span>Strategic IT Planning &amp; Architecture</span><span className="plus"></span></a></li>
                                    <li className="sub-menu-item"><a href="https://www.unifiedmicro.systems/network-end-point-security/" className=""><i className="menu_icon blank fa"></i><span>Network &amp; End-Point Security Solutions</span><span className="plus"></span></a></li>
                                    <li className="sub-menu-item"><a href="https://www.unifiedmicro.systems/software-development/" className=""><i className="menu_icon blank fa"></i><span>Software Development</span><span className="plus"></span></a></li>
                                  </ul>
                                </li>
                                <li className="sub-menu-item">
                                  <a href="http://#" className="no_link"><i className="menu_icon blank fa"></i><span>Infrastructure</span><span className="plus"></span><i className="q_menu_arrow fa fa-angle-right"></i></a>
                                  <ul>
                                    <li className="sub-menu-item"><a href="https://www.unifiedmicro.systems/it-office-setup-uae-philippines/" className=""><i className="menu_icon blank fa"></i><span>IT Office Setup in UAE &amp; Philippines</span><span className="plus"></span></a></li>
                                    <li className="sub-menu-item"><a href="https://www.unifiedmicro.systems/smart-building-home-automation/" className=""><i className="menu_icon blank fa"></i><span>Smart Building, Office &amp; Home Automation Solutions</span><span className="plus"></span></a></li>
                                    <li className="sub-menu-item"><a href="https://www.unifiedmicro.systems/structured-cabling-wireless/" className=""><i className="menu_icon blank fa"></i><span>Structured Cabling &amp; Wireless</span><span className="plus"></span></a></li>
                                  </ul>
                                </li>
                                <li className="sub-menu-item">
                                  <a href="http://#" className=" no_link" style={{cursor: 'default'}} onClick="JavaScript: return false;"><i className="menu_icon blank fa"></i><span>Communications</span><span className="plus"></span><i className="q_menu_arrow fa fa-angle-right"></i></a>
                                  <ul>
                                    <li className="sub-menu-item"><a href="https://www.unifiedmicro.systems/unified-communications/" className=""><i className="menu_icon blank fa"></i><span>Unified Communications</span><span className="plus"></span></a></li>
                                    <li className="sub-menu-item"><a href="https://www.unifiedmicro.systems/contact-centers/" className=""><i className="menu_icon blank fa"></i><span>Contact Centers</span><span className="plus"></span></a></li>
                                    <li className="sub-menu-item"><a href="https://www.unifiedmicro.systems/hold-music-ivr-voice-recording/" className=""><i className="menu_icon blank fa"></i><span>Hold Music &amp; IVR Voice Recording</span><span className="plus"></span></a></li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div> 
                        </li>
                        <li className="menu-item">
                          <a href="#" className=""><i className="menu_icon blank fa"></i><span>Resources</span><span className="plus"></span></a>
                          <div className="second">
                            <div className="inner">
                              <ul>
                                <li className="sub-menu-item"><a href="https://www.unifiedmicro.systems/articles/" className=""><i className="menu_icon blank fa"></i><span>Articles</span><span className="plus"></span></a></li>
                                <li className="sub-menu-item"><a href="https://www.unifiedmicro.systems/open-source/" className=""><i className="menu_icon blank fa"></i><span>Open Source Software</span><span className="plus"></span></a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="menu-item"><a href="https://www.unifiedmicro.systems/contact/" className=""><i className="menu_icon blank fa"></i><span>Contact</span><span className="plus"></span></a></li>

                        <li className="search">
                          <div className="header_inner_right">
                            <div className="side_menu_button" style={{height: '120px'}}>
                              <a className="search_button fullscreen_search normal" href="javascript:void(0)">
                                <i className="qode_icon_font_awesome fa fa-search "></i>  
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                  </div>
                  </div>
              </div>
            </div>
          </div>       
        </div>
    </div>
  </header>
  <div className="banner-section">
    <div id="demo" className="carousel slide" data-ride="carousel">
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" className="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>
      <div className="home-slide carousel-inner">
        <div className="carousel-item active">
          <img src="https://www.unifiedmicro.systems/wp-content/uploads/2018/10/home-banner-1.1.jpg" alt="Los Angeles" width="1100" height="500" />
          <div className="banner-content"> 
            <div className="full-section">
              <div className="form-view" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-mirror="true" data-aos-once="false">
                <h3 className="bn-head">MANAGED SERVICES</h3>
                <p>Let us manage your systems, giving you peace of mind <br /> and time to concentrate on running your business. </p>
                <div className="read-more"> 
                  <a href="#">Read More </a>
                </div>
              </div>  
            </div>
        </div>
        </div>
        <div className="carousel-item">
          <img src="https://www.unifiedmicro.systems/wp-content/uploads/2018/10/home-banner-3.1.jpg" alt="Chicago" width="1100" height="500" />
          <div className="banner-content"> 
            <div className="full-section">
                <div className="form-view" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-delay="500">
                  <h3 className="bn-head">NETWORK & ENDPOINT SECURITY </h3>
                  <p>Next generation security appliances and software, <br /> enabling faster and safer communications.</p>
                  <div className="read-more"> 
                    <a href="#">Read More </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://www.unifiedmicro.systems/wp-content/uploads/2018/10/home-banner-2.1.jpg" alt="New York" width="1100" height="500" />
          <div className="banner-content"> 
            <div className="full-section">
              <div className="form-view" data-aos-duration="1000" data-aos-offset="100" data-aos-easing="ease-in-sine">
                <h3 className="bn-head">UNIFIED <br /> COMMUNICATIONS   </h3>
                <p>Communicate without limits, with voice <br /> video and meeting collaboration solutions. </p>
                <div className="read-more"> 
                  <a href="#">Read More </a>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>      
      <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>
    </div>   
  </div>
  <div className="service-section">
    <div className="container"> 
      <div className="d-flex cm-services"> 
        <div className="hm-serv">
          <div className="row"> 
            <div className="col-sm-12 col-md-3">
              <div className="service-element"> 
                <div className="service-title">
                  <h4 className="icon_title aline-center">Service Delivery</h4>
                </div>
                <div className="separator-line" ></div>
                <div className="service-details">
                  <table style={{width: '100%'}}>
                    <tbody>
                      <tr>
                        <td className="aline-left">
                          <span data-type="normal" className="qode_icon_shortcode  q_font_awsome_icon fa-lg  " >
                            <a itemProp="url" href="www.link.com" target="_self">
                              <i className="qode_icon_font_awesome fa fa-check qode_icon_element" style={{color: '#be1522'}}></i>
                            </a>
                          </span>
                        </td>
                        <td style={{textalign: 'left', fontweight: '400', fontsize: '15px'}}>
                          <a href="https://www.unifiedmicro.systems/managed-services-uae-philippines/">Managed Services in UAE &amp; Philippines</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="aline-left">
                          <span data-type="normal" className="qode_icon_shortcode  q_font_awsome_icon fa-lg  " >
                            <a itemProp="url" href="www.link.com" target="_self">
                              <i className="qode_icon_font_awesome fa fa-check qode_icon_element" style={{color: '#be1522'}}></i>
                            </a>
                          </span>
                        </td>
                        <td style={{textalign: 'left', fontweight: '400', fontsize: '15px'}}>
                          <a href="https://www.unifiedmicro.systems/hosted-solutions/"> Hosted Solutions</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="aline-left">
                          <span data-type="normal" className="qode_icon_shortcode  q_font_awsome_icon fa-lg  " >
                            <a itemProp="url" href="www.link.com" target="_self">
                              <i className="qode_icon_font_awesome fa fa-check qode_icon_element" style={{color: '#be1522'}}></i>
                            </a>
                          </span>
                        </td>
                        <td style={{textalign: 'left', fontweight: '400', fontsize: '15px'}}><a href="https://www.unifiedmicro.systems/disaster-recovery-business-continuity/"> Disaster Recovery &amp; Business Continuity </a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="empty_space" style={{height: '40px'}}>&nbsp;</div>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="service-element"> 
                <div className="service-title">
                  <h4 className="icon_title aline-center">Consultancy</h4>
                </div>
                <div className="separator-line" ></div>
                <div className="service-details">
                  <table style={{width: '100%'}}>
                    <tbody>
                      <tr>
                        <td className="aline-left">
                          <span data-type="normal" className="qode_icon_shortcode  q_font_awsome_icon fa-lg  " >
                            <a itemProp="url" href="www.link.com" target="_self">
                              <i className="qode_icon_font_awesome fa fa-check qode_icon_element" style={{color: '#be1522'}}></i>
                            </a>
                          </span>
                        </td>
                        <td style={{textalign: 'left', fontweight: '400', fontsize: '15px'}}>
                          <a href="https://www.unifiedmicro.systems/strategic-it-planning-architecture/"> Strategic IT Planning &amp; Architecture</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="aline-left">
                          <span data-type="normal" className="qode_icon_shortcode  q_font_awsome_icon fa-lg  " >
                            <a itemProp="url" href="www.link.com" target="_self">
                              <i className="qode_icon_font_awesome fa fa-check qode_icon_element" style={{color: '#be1522'}}></i>
                            </a>
                          </span>
                        </td>
                        <td style={{textalign: 'left', fontweight: '400', fontsize: '15px'}}>
                          <a href="https://www.unifiedmicro.systems/network-end-point-security/"> Network &amp; End-Point Security</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="aline-left">
                          <span data-type="normal" className="qode_icon_shortcode  q_font_awsome_icon fa-lg  " >
                            <a itemProp="url" href="www.link.com" target="_self">
                              <i className="qode_icon_font_awesome fa fa-check qode_icon_element" style={{color: '#be1522'}}></i>
                            </a>
                          </span>
                        </td>
                        <td style={{textalign: 'left', fontweight: '400', fontsize: '15px'}}><a href="https://www.unifiedmicro.systems/software-development/"> Software Development</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="empty_space" style={{height: '40px'}}>&nbsp;</div>
            </div>

            <div className="col-sm-12 col-md-3">
              <div className="service-element"> 
                <div className="service-title">
                  <h4 className="icon_title aline-center">Infrastructure</h4>
                </div>
                <div className="separator-line" ></div>
                <div className="service-details">
                  <table style={{width: '100%'}}>
                    <tbody>
                      <tr>
                        <td className="aline-left">
                          <span data-type="normal" className="qode_icon_shortcode  q_font_awsome_icon fa-lg  " >
                            <a itemProp="url" href="www.link.com" target="_self">
                              <i className="qode_icon_font_awesome fa fa-check qode_icon_element" style={{color: '#be1522'}}></i>
                            </a>
                          </span>
                        </td>
                        <td style={{textalign: 'left', fontweight: '400', fontsize: '15px'}}>
                          <a href="https://www.unifiedmicro.systems/it-office-setup-uae-philippines/"> IT Office Setup in UAE &amp; Philippines</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="aline-left">
                          <span data-type="normal" className="qode_icon_shortcode  q_font_awsome_icon fa-lg  " >
                            <a itemProp="url" href="www.link.com" target="_self">
                              <i className="qode_icon_font_awesome fa fa-check qode_icon_element" style={{color: '#be1522'}}></i>
                            </a>
                          </span>
                        </td>
                        <td style={{textalign: 'left', fontweight: '400', fontsize: '15px'}}>
                          <a href="https://www.unifiedmicro.systems/smart-building-home-automation/"> Smart Building &amp; Home Automation</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="aline-left">
                          <span data-type="normal" className="qode_icon_shortcode  q_font_awsome_icon fa-lg  " >
                            <a itemProp="url" href="www.link.com" target="_self">
                              <i className="qode_icon_font_awesome fa fa-check qode_icon_element" style={{color: '#be1522'}}></i>
                            </a>
                          </span>
                        </td>
                        <td style={{textalign: 'left', fontweight: '400', fontsize: '15px'}}><a href="https://www.unifiedmicro.systems/structured-cabling-wireless/"> Structured Cabling &amp; Wireless</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="empty_space" style={{height: '40px'}}>&nbsp;</div>
            </div>

            <div className="col-sm-12 col-md-3">
              <div className="service-element"> 
                <div className="service-title">
                  <h4 className="icon_title aline-center">Communications</h4>
                </div>
                <div className="separator-line" ></div>
                <div className="service-details">
                  <table style={{width: '100%'}}>
                    <tbody>
                      <tr>
                        <td className="aline-left">
                          <span data-type="normal" className="qode_icon_shortcode  q_font_awsome_icon fa-lg  " >
                            <a itemProp="url" href="www.link.com" target="_self">
                              <i className="qode_icon_font_awesome fa fa-check qode_icon_element" style={{color: '#be1522'}}></i>
                            </a>
                          </span>
                        </td>
                        <td style={{textalign: 'left', fontweight: '400', fontsize: '15px'}}>
                          <a href="https://www.unifiedmicro.systems/unified-communications/"> Unified Communications</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="aline-left">
                          <span data-type="normal" className="qode_icon_shortcode  q_font_awsome_icon fa-lg  " >
                            <a itemProp="url" href="www.link.com" target="_self">
                              <i className="qode_icon_font_awesome fa fa-check qode_icon_element" style={{color: '#be1522'}}></i>
                            </a>
                          </span>
                        </td>
                        <td style={{textalign: 'left', fontweight: '400', fontsize: '15px'}}>
                          <a href="https://www.unifiedmicro.systems/contact-centers/"> Contact Centres</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="aline-left">
                          <span data-type="normal" className="qode_icon_shortcode  q_font_awsome_icon fa-lg  " >
                            <a itemProp="url" href="www.link.com" target="_self">
                              <i className="qode_icon_font_awesome fa fa-check qode_icon_element" style={{color: '#be1522'}}></i>
                            </a>
                          </span>
                        </td>
                        <td style={{textalign: 'left', fontweight: '400', fontsize: '15px'}}><a href="https://www.unifiedmicro.systems/hold-music-ivr-voice-recording/"> Hold Music &amp; IVR Voice Recording</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="empty_space" style={{height: '40px'}}>&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="we-are-ui">
    <div className="container">
      <div className="row"> 
        <div className="col-sm-12 col-md-12 d-flex justify-content-center">
          <div className="col-sm-12 col-md-12 aline-center we-are-unified">
              <div className="unifi-story">
                <div className="unifi-title">
                  <h2>We are Unified</h2>
                </div>
                <div className="unifi-content">
                    <p>Everything about us is Unified… our team, our approach, our integration and our technology.</p>
                </div>
                <div className="uni-link">
                  <a itemProp="url" href="https://www.unifiedmicro.systems/our-story/" target="_self" className="qbutton">OUR STORY</a>
                </div>
              </div>
              <div className="unifi-time">
                <h3 className="aline-center">We are On Time, First Time, Every Time.</h3>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="our-blog">
    <div className="container">
    <div className="blog-section">
      <h3 style={{textalign: 'center'}}>Latest From Our Blog</h3>
      <div className="blog-post"> 
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="blog-art">
                <div className="blog-post-img">
                    <a itemProp="url" href="https://www.unifiedmicro.systems/articles/reality-check-on-unlimited-web-hosting/" target="_self">
                      <img itemProp="image" src="https://www.unifiedmicro.systems/wp-content/uploads/2018/10/home-banner-3.1.jpg" />
                    </a>
                </div>
                <div className="blog-post-text">
                  <h5 itemProp="name" className="blog_title">
                    <a itemProp="url" href="https://www.unifiedmicro.systems/articles/reality-check-on-unlimited-web-hosting/">A Reality Check on Unlimited Web Hosting</a>
                  </h5>
                  <p className="blog-description">Web hosting service providers are a dime a dozen on the internet. When you are looking for shared we...</p>
                  <div className="post_info">
                    <span itemProp="dateCreated" className="time entry_date updated">27 September, 2018</span> / <a itemProp="url" className="post_comments" href="https://www.unifiedmicro.systems/articles/reality-check-on-unlimited-web-hosting/#respond">No comment</a></div>
                </div>
              </div>  
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="blog-art">
                <div className="blog-post-img">
                    <a itemProp="url" href="https://www.unifiedmicro.systems/articles/securing-cloud-for-teams/" target="_self">
                      <img itemProp="image" src="https://www.unifiedmicro.systems/wp-content/uploads/2018/10/home-banner-1.jpg" />
                    </a>
                </div>
                <div className="blog-post-text">
                  <h5 itemProp="name" className="blog_title">
                    <a itemProp="url" href="https://www.unifiedmicro.systems/articles/securing-cloud-for-teams/">Data Security: Securing the Cloud for Teams</a>
                  </h5>
                  <p className="blog-description">Enterprise grade cloud tools such as Google Docs, social media, Dropbox, private emails, as well as ...</p>
                  <div className="post_info">
                    <span itemProp="dateCreated" className="time entry_date updated">28 September, 2018</span> / <a itemProp="url" className="post_comments" href="https://www.unifiedmicro.systems/articles/reality-check-on-unlimited-web-hosting/#respond">No comment</a></div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="blog-art">
                <div className="blog-post-img">
                    <a itemProp="url" href="https://www.unifiedmicro.systems/articles/dedicated-or-cloud-the-smart-choice/" target="_self">
                      <img itemProp="image" src="https://www.unifiedmicro.systems/wp-content/uploads/2018/09/shutterstock_397574752-2.jpg" />
                    </a>
                </div>
                <div className="blog-post-text">
                  <h5 itemProp="name" className="blog_title">
                    <a itemProp="url" href="https://www.unifiedmicro.systems/articles/dedicated-or-cloud-the-smart-choice/">Dedicated or Cloud – The Smart Choice</a>
                  </h5>
                  <p className="blog-description">The trend observed in the web hosting industry over the last few years has been one that promotes th...</p>
                  <div className="post_info">
                    <span itemProp="dateCreated" className="time entry_date updated">27 September, 2018</span> / <a itemProp="url" className="post_comments" href="https://www.unifiedmicro.systems/articles/reality-check-on-unlimited-web-hosting/#respond">No comment</a></div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4">
              <div className="blog-art">
                <div className="blog-post-img">
                    <a itemProp="url" href="https://www.unifiedmicro.systems/articles/dedicated-or-cloud-the-smart-choice/" target="_self">
                      <img itemProp="image" src="https://www.unifiedmicro.systems/wp-content/uploads/2018/09/shutterstock_397574752-2.jpg" />
                    </a>
                </div>
                <div className="blog-post-text">
                  <h5 itemProp="name" className="blog_title">
                    <a itemProp="url" href="https://www.unifiedmicro.systems/articles/dedicated-or-cloud-the-smart-choice/">Dedicated or Cloud – The Smart Choice</a>
                  </h5>
                  <p className="blog-description">The trend observed in the web hosting industry over the last few years has been one that promotes th...</p>
                  <div className="post_info">
                    <span itemProp="dateCreated" className="time entry_date updated">27 September, 2018</span> / <a itemProp="url" className="post_comments" href="https://www.unifiedmicro.systems/articles/reality-check-on-unlimited-web-hosting/#respond">No comment</a></div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4">
              <div className="blog-art">
                <div className="blog-post-img">
                    <a itemProp="url" href="https://www.unifiedmicro.systems/articles/dedicated-or-cloud-the-smart-choice/" target="_self">
                      <img itemProp="image" src="https://www.unifiedmicro.systems/wp-content/uploads/2018/09/shutterstock_397574752-2.jpg" />
                    </a>
                </div>
                <div className="blog-post-text">
                  <h5 itemProp="name" className="blog_title">
                    <a itemProp="url" href="https://www.unifiedmicro.systems/articles/dedicated-or-cloud-the-smart-choice/">Dedicated or Cloud – The Smart Choice</a>
                  </h5>
                  <p className="blog-description">The trend observed in the web hosting industry over the last few years has been one that promotes th...</p>
                  <div className="post_info">
                    <span itemProp="dateCreated" className="time entry_date updated">27 September, 2018</span> / <a itemProp="url" className="post_comments" href="https://www.unifiedmicro.systems/articles/reality-check-on-unlimited-web-hosting/#respond">No comment</a></div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4">
              <div className="blog-art">
                <div className="blog-post-img">
                    <a itemProp="url" href="https://www.unifiedmicro.systems/articles/dedicated-or-cloud-the-smart-choice/" target="_self">
                      <img itemProp="image" src="https://www.unifiedmicro.systems/wp-content/uploads/2018/09/shutterstock_397574752-2.jpg" />
                    </a>
                </div>
                <div className="blog-post-text">
                  <h5 itemProp="name" className="blog_title">
                    <a itemProp="url" href="https://www.unifiedmicro.systems/articles/dedicated-or-cloud-the-smart-choice/">Dedicated or Cloud – The Smart Choice</a>
                  </h5>
                  <p className="blog-description">The trend observed in the web hosting industry over the last few years has been one that promotes th...</p>
                  <div className="post_info">
                    <span itemProp="dateCreated" className="time entry_date updated">27 September, 2018</span> / <a itemProp="url" className="post_comments" href="https://www.unifiedmicro.systems/articles/reality-check-on-unlimited-web-hosting/#respond">No comment</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>   

    </div>
  </div>

  <div className="join-our-team">
    <div className="container">
        <div className="wrp-content">
            <div className="wrp-title">
              <h3>Join our Growing Team with Engineering Jobs in the UAE and Philippines</h3>
            </div>
            <div className="wrp-txt">
              <h4>We are looking for qualified members in roles such as server and desktop support, networking, building management systems and auxiliary integration engineers, back office administration and support functions, across our offices in Dubai and Manila.</h4>
            </div>
        </div>
        <div className="team-flow">
          <div className="row">
            <div className="col-sm-12 col-md-6"> 
              <div className="info">
                  <ul className="join-info">
                    <li className="icon_list">
                      <i className="qode_icon_font_awesome fa fa-users qode-ili-icon-holder circle"></i>
                      <p >Infrastructure Manager (Manila)</p>
                    </li>

                    <li className="icon_list">
                      <i className="qode_icon_font_awesome fa fa-users qode-ili-icon-holder circle"></i><p >Project Manager (Manila)</p>
                    </li>

                    <li className="icon_list">
                      <i className="qode_icon_font_awesome fa fa-users qode-ili-icon-holder circle"></i><p >Senior BMS Engineer (Manila)</p>
                    </li>
                  </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6"> 
              <div className="info">
                  <ul className="join-info">
                    <li className="icon_list">
                      <i className="qode_icon_font_awesome fa fa-users qode-ili-icon-holder circle"></i>
                      <p >Server Engineer (Manila and Dubai)</p>
                    </li>

                    <li className="icon_list">
                      <i className="qode_icon_font_awesome fa fa-users qode-ili-icon-holder circle"></i><p >Sales Engineer (Manila and Dubai)</p>
                    </li>

                    <li className="icon_list">
                      <i className="qode_icon_font_awesome fa fa-users qode-ili-icon-holder circle"></i><p >Software Engineer (Manila)</p>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
          <div className="career-lg"> 
            <a itemProp="url" href="https://www.unifiedmicro.systems/our-story/" target="_self" className="qbutton">VIEW AVAILABLE CAREERS</a>
          </div>
        </div>
    </div>
  </div>


  <div className="our-customers">
    <div className="container">
      <div className="customer-service">
        <h3 className="aline-center">Our Customers</h3>
      </div>
      <div className="empty-space-50">&nbsp;</div>
      <div className="owlcarousel-cstm-clas" style={{float: 'left', width: '100%'}}>
      {(typeof window !== 'undefined') ? (
      <OwlCarousel className="owl-theme" loop margin={10} items={5} autoplay={true} autoplayTimeout={2000}  dots={false}>
      
            <div className="item">
              <img itemProp="image" src="https://www.unifiedmicro.systems/wp-content/uploads/2018/09/carrerfour-1.png" alt="carousel image" />
            </div>
            <div className="item">
              <img itemProp="image" src="https://www.unifiedmicro.systems/wp-content/uploads/2018/09/cathay-pacific-1.png" alt="carousel image" />
            </div>
            <div className="item">
              <img itemProp="image" src="https://www.unifiedmicro.systems/wp-content/uploads/2018/09/Fagerhult.png" alt="carousel image" />
            </div>
            <div className="item">
              <img itemProp="image" src="https://www.unifiedmicro.systems/wp-content/uploads/2018/11/fit-republic.png" alt="carousel image" />
            </div>
            <div className="item">
              <img itemProp="image" src="https://www.unifiedmicro.systems/wp-content/uploads/2018/11/novomed.png" alt="carousel image" />
            </div>
            <div className="item">
              <img itemProp="image" src="https://www.unifiedmicro.systems/wp-content/uploads/2018/11/sentor_electrical.png" alt="carousel image" />
            </div>
            <div className="item">
              <img itemProp="image" src="https://www.unifiedmicro.systems/wp-content/uploads/2018/11/Toyota-logo.png" alt="carousel image" />
            </div>
            <div className="item">
              <img itemProp="image" src="https://www.unifiedmicro.systems/wp-content/uploads/2018/11/wsp.png" alt="carousel image" />
            </div>
          </OwlCarousel>
           ) : null}
          </div>
    </div>
  </div>

  <div className="client-testimonials">
    <div className="container">
      <div className="testimonials-service">
        <h3 className="aline-center">Testimonials</h3>
      </div>
      <div className="empty-space-50">&nbsp;</div>
      <div id="client-testimonials-owl" className="owl-carousel owl-theme">
      {(typeof window !== 'undefined') ? (
      <OwlCarousel className="owl-carousel owl-theme test" loop margin={10} items={3} autoplay={true} autoplayTimeout={2000}>
        <div className="item">
          <div className="testimonial_content_inner">
            <div className="testimonial_title_holder">
              <h5>The team will respond quickly and efficiently</h5>
            </div>
            <div className="testimonial_rating_holder">
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
            </div>
            <div className="testimonial_text_holder">
              <div className="testimonial_text_inner" >
                <p>Rather than a template based solution as my previous supplier suggested, I can pick up the phone and feel confident that the team will respond quickly and efficiently, providing me with a service and solution that suits my requirements.</p>
                <p className="testimonial_author" style={{fontweight: '500',color: '#be1522',fontsize: '13px'}}>- Debbie&nbsp;Rogers (Owner,&nbsp;CoffeCakesAndRunning.com)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="testimonial_content_inner">
            <div className="testimonial_title_holder">
              <h5>I highly recommend their services</h5>
            </div>
            <div className="testimonial_rating_holder">
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
            </div>
            <div className="testimonial_text_holder">
              <div className="testimonial_text_inner" >
                <p>The support is on time and professional, and the advice we receive is unbiased and factual. I highly recommend their services – it’s a pleasure to work with such a professional IT provider.</p>
                <p className="testimonial_author" style={{fontweight: '500',color: '#be1522',fontsize: '13px'}}>- Brian Ballinger (General Manager, Heidi Chef Solutions LLC)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="testimonial_content_inner">
            <div className="testimonial_title_holder">
              <h5>Comprehensive Support</h5>
            </div>
            <div className="testimonial_rating_holder">
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
            </div>
            <div className="testimonial_text_holder">
              <div className="testimonial_text_inner" >
                <p>In addition to comprehensive support, an office move and setup of infrastructure for two new businesses in other GCC countries. In all these endeavours Unified Microsystems have been of immense help and support.</p>
                <p className="testimonial_author" style={{fontweight: '500',color: '#be1522',fontsize: '13px'}}>- Paul Loke (Regional Director, Edmundson Electrical)</p>
              </div>
            </div>
          </div>
        </div>   

        <div className="item">
          <div className="testimonial_content_inner">
            <div className="testimonial_title_holder">
              <h5>The team are simply awesome</h5>
            </div>
            <div className="testimonial_rating_holder">
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
            </div>
            <div className="testimonial_text_holder">
              <div className="testimonial_text_inner" >
                <p>I am impressed the professionalism, response time and quality of service. They take their time to explain how things work and make excellent recommendations.</p>
                <p className="testimonial_author" style={{fontweight: '500',color: '#be1522',fontsize: '13px'}}>- Blagoy Savov (Clinic Director, Orthosports)</p>
              </div>
            </div>
          </div>
        </div> 

        <div className="item">
          <div className="testimonial_content_inner">
            <div className="testimonial_title_holder">
              <h5>I highly recommend them</h5>
            </div>
            <div className="testimonial_rating_holder">
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
            </div>
            <div className="testimonial_text_holder">
              <div className="testimonial_text_inner" >
                <p>I appreciate the timely response whenever I need technical support or changes, they always respond with excellent knowledge. I am satisfied with their support and I highly recommend them.</p>
                <p className="testimonial_author" style={{fontweight: '500',color: '#be1522',fontsize: '13px'}}>- Khurram Shehzad (Software Developer, Property Monitor)</p>
              </div>
            </div>
          </div>
        </div>  

         <div className="item">
          <div className="testimonial_content_inner">
            <div className="testimonial_title_holder">
              <h5>I highly recommend them</h5>
            </div>
            <div className="testimonial_rating_holder">
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
            </div>
            <div className="testimonial_text_holder">
              <div className="testimonial_text_inner" >
                <p>I appreciate the timely response whenever I need technical support or changes, they always respond with excellent knowledge. I am satisfied with their support and I highly recommend them.</p>
                <p className="testimonial_author" style={{fontweight: '500',color: '#be1522',fontsize: '13px'}}>- Khurram Shehzad (Software Developer, Property Monitor)</p>
              </div>
            </div>
          </div>
        </div> 


         <div className="item">
          <div className="testimonial_content_inner">
            <div className="testimonial_title_holder">
              <h5>I highly recommend them</h5>
            </div>
            <div className="testimonial_rating_holder">
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
            </div>
            <div className="testimonial_text_holder">
              <div className="testimonial_text_inner" >
                <p>I appreciate the timely response whenever I need technical support or changes, they always respond with excellent knowledge. I am satisfied with their support and I highly recommend them.</p>
                <p className="testimonial_author" style={{fontweight: '500',color: '#be1522',fontsize: '13px'}}>- Khurram Shehzad (Software Developer, Property Monitor)</p>
              </div>
            </div>
          </div>
        </div> 

         <div className="item">
          <div className="testimonial_content_inner">
            <div className="testimonial_title_holder">
              <h5>I highly recommend them</h5>
            </div>
            <div className="testimonial_rating_holder">
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="testimonial_star_holder">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
            </div>
            <div className="testimonial_text_holder">
              <div className="testimonial_text_inner" >
                <p>I appreciate the timely response whenever I need technical support or changes, they always respond with excellent knowledge. I am satisfied with their support and I highly recommend them.</p>
                <p className="testimonial_author" style={{fontweight: '500',color: '#be1522',fontsize: '13px'}}>- Khurram Shehzad (Software Developer, Property Monitor)</p>
              </div>
            </div>
          </div>
        </div> 
        </OwlCarousel>
        ) : null}
        
      </div>
    </div>
  </div>

  <footer className="footer-section">
    <div className="footer-set">
        <div className="container">
          <div className="copy-right">
            <p>©2020 Unified Microsystems</p>
          </div>
        </div>
    </div>
  </footer>
  </Layout>
)

export default SecondPage
