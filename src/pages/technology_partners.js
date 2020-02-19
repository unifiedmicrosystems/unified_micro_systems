import React from "react"
import { Link } from "gatsby"
import ReactDOM from "react-dom";
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/Unified-Logo-2-2.png"
import OwlCarousel from 'react-owl-carousel';
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';


const Technology_partners_Page = () => (
  <Layout>
    <SEO title="Technology partners" />
<header className="page_header">
        <div className="header_inner">
        <form role="search" id="searchform" action="#" className="qode_search_form" method="get">
          <div className="container">
            <div className="container_inner clearfix">
              <i className="qode_icon_font_awesome fa fa-search qode_icon_in_search"></i>            
              <input type="text" placeholder="Search" name="s" className="qode_search_field" autocomplete="off" />
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
                                        <a href="javascript:void(0)" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0)" target="_blank"><i className="fa fa-linkedin"></i></a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0)" target="_blank"><i className="fa fa-youtube"></i></a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0)" target="_blank"><i className="fa fa-instagram"></i></a>
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
                        <a itemprop="url" href="tel:+97142432025" target="_self" className="call-to-action-button">Call Now: +971 4 243 2025</a>
                        <a itemprop="url" href="contact.html" target="_self" className="call-to-quote">Request A Quote</a>
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
                    <div className="logos"><a href="index.html"><img src={logo} /></a></div>
                  </div>
                  <div className="d-flex justify-content-end col-sm-1 col-md-9 menu-lg">
                      <ul className="menus">
                        <li><a href="index.html" className=""><i className="menu_icon blank fa"></i><span>Home</span><span className="plus"></span></a></li>
                        <li className="menu-item">
                          <a href="javascript:void(0)" className="current"><i className="menu_icon blank fa"></i><span>About</span><span className="plus"></span></a>
                          <div className="second">
                            <div className="inner">
                              <ul>
                                <li className="sub-menu-item"><a href="our-story.html" className=""><i className="menu_icon blank fa"></i><span>Our Story</span></a></li>
                                <li className="sub-menu-item"><a href="technology-partners.html" className=""><i className="menu_icon blank fa"></i><span>Technology Partners</span></a></li>
                                <li className="sub-menu-item"><a href="resellers-business-partners.html" className=""><i className="menu_icon blank fa"></i><span>Resellers &amp; Business Partners</span></a></li>
                                <li className="sub-menu-item"><a href="terms-and-conditions.html" className=""><i className="menu_icon blank fa"></i><span>Terms and Conditions</span></a></li>
                               <li className="sub-menu-item"><a href="careers.html" className=""><i className="menu_icon blank fa"></i><span>Careers</span></a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="menu-item wide">
                          <a href="javascript:void(0)" className=""><i className="menu_icon blank fa"></i><span>Solutions</span><span className="plus"></span></a>
                           <div className="second">
                            <div className="inner">
                              <ul>
                                <li className="sub-menu-item"><a href="javascript:void(0)" className=" no_link"><i className="menu_icon blank fa"></i><span>Service Delivery</span></a>
                                  <ul>
                                    <li className="sub-menu-item"><a href="managed-services-uae-philippines.html" className=""><i className="menu_icon blank fa"></i><span>Managed Services in UAE &amp; Philippines</span></a></li>
                                    <li className="sub-menu-item"><a href="hosted-solutions.html" className=""><i className="menu_icon blank fa"></i><span>Hosted Solutions</span></a></li>
                                    <li className="sub-menu-item"><a href="disaster-recovery-business-continuity.html" className=""><i className="menu_icon blank fa"></i><span>Disaster Recovery &amp; Business Continuity</span></a></li>
                                  </ul>
                                </li>
                                <li className="sub-menu-item">
                                  <a href="javascript:void(0)" className="no_link"><i className="menu_icon blank fa"></i><span>Consultancy</span></a>
                                  <ul>
                                    <li className="sub-menu-item"><a href="strategic-it-planning-architecture.html" className=""><i className="menu_icon blank fa"></i><span>Strategic IT Planning &amp; Architecture</span><span className="plus"></span></a></li>
                                    <li className="sub-menu-item"><a href="network-end-point-security.html" className=""><i className="menu_icon blank fa"></i><span>Network &amp; End-Point Security Solutions</span><span className="plus"></span></a></li>
                                    <li className="sub-menu-item"><a href="software-development.html" className=""><i className="menu_icon blank fa"></i><span>Software Development</span></a></li>
                                  </ul>
                                </li>
                                <li className="sub-menu-item">
                                  <a href="javascript:void(0)" className="no_link"><i className="menu_icon blank fa"></i><span>Infrastructure</span></a>
                                  <ul>
                                    <li className="sub-menu-item"><a href="it-office-setup-uae-philippines.html" className=""><i className="menu_icon blank fa"></i><span>IT Office Setup in UAE &amp; Philippines</span></a></li>
                                    <li className="sub-menu-item"><a href="smart-building-home-automation.html" className=""><i className="menu_icon blank fa"></i><span>Smart Building, Office &amp; Home Automation Solutions</span></a></li>
                                    <li className="sub-menu-item"><a href="structured-cabling-wireless.html" className=""><i className="menu_icon blank fa"></i><span>Structured Cabling &amp; Wireless</span></a></li>
                                  </ul>
                                </li>
                                <li className="sub-menu-item">
                                  <a href="javascript:void(0)" className=" no_link" style={{cursor: 'default'}} onclick="JavaScript: return false;"><i className="menu_icon blank fa"></i><span>Communications</span></a>
                                  <ul>
                                    <li className="sub-menu-item"><a href="unified-communications.html" className=""><i className="menu_icon blank fa"></i><span>Unified Communications</span><span className="plus"></span></a></li>
                                    <li className="sub-menu-item"><a href="contact-centers.html" className=""><i className="menu_icon blank fa"></i><span>Contact Centers</span><span className="plus"></span></a></li>
                                    <li className="sub-menu-item"><a href="hold-music-ivr-voice-recording.html" className=""><i className="menu_icon blank fa"></i><span>Hold Music &amp; IVR Voice Recording</span></a></li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div> 
                        </li>
                        <li className="menu-item">
                          <a href="javascript:void(0)" className=""><i className="menu_icon blank fa"></i><span>Resources</span><span className="plus"></span></a>
                          <div className="second">
                            <div className="inner">
                              <ul>
                                <li className="sub-menu-item"><a href="articles.html" className=""><i className="menu_icon blank fa"></i><span>Articles</span><span className="plus"></span></a></li>
                                <li className="sub-menu-item"><a href="open-source-software.html" className=""><i className="menu_icon blank fa"></i><span>Open Source Software</span></a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="menu-item"><a href="contact.html" className=""><i className="menu_icon blank fa"></i><span>Contact</span></a></li>

                        <li className="search">
                          <div className="header_inner_right">
                            <div className="side_menu_button">
                              <a className="search_button fullscreen_search normal" href="javascript:void(0)">
                                <i className="qode_icon_font_awesome fa fa-search "></i>  
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="mobile-menu"> 
                        <ul className="menu-main-menu">
                          <li className="menu-item">
                            <a href="javascript:void(0)" className=" current "><span>Home</span></a>
                          </li>
                          <li className="menu-item has-sub-menu open_sub">
                            <a href="javascript:void(0)" className="current"><span>About</span></a>
                            <ul className="sub_menu">
                              <li className="menu-item">
                                <a href="our-story.html" className=""><span>Our Story</span></a>
                              </li>
                              <li className="menu-item">
                                <a href="technology-partners.html" className=""><span>Technology Partners</span></a>
                              </li>
                              <li className="menu-item">
                                <a href="resellers-business-partners.html" className="">
                                  <span>Resellers &amp; Business Partners</span>
                                </a>
                              </li>
                              <li className="menu-item">
                                <a href="terms-and-conditions.html" className=""><span>Terms and Conditions</span></a>
                              </li>
                              <li className="menu-item">
                                <a href="careers.html" className=""><span>Careers</span></a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item has-sub-menu open_sub">
                            <a href="javascript:void(0)" className=""><span>Solutions</span></a>
                              <ul className="sub_menu">
                              <li className="menu-item menu-item-has-children has_sub open_sub"><h3><span>Service Delivery</span></h3>
                                <ul className="sub_menu">
                                  <li className="menu-item"><a href="managed-services-uae-philippines.html" className=""><span>Managed Services in UAE &amp; Philippines</span></a></li>
                                  <li className="menu-item"><a href="hosted-solutions.html" className=""><span>Hosted Solutions</span></a></li>
                                  <li className="menu-item"><a href="disaster-recovery-business-continuity.html" className=""><span>Disaster Recovery &amp; Business Continuity</span></a></li>
                                </ul>
                              </li>
                              <li className="menu-item has-sub-menu"><h3><span>Consultancy</span></h3>
                                <ul className="sub_menu">
                                  <li className="menu-item"><a href="strategic-it-planning-architecture.html" className=""><span>Strategic IT Planning &amp; Architecture</span></a></li>
                                  <li className="menu-item"><a href="network-end-point-security.html" className=""><span>Network &amp; End-Point Security Solutions</span></a></li>
                                  <li className="menu-item"><a href="software-development.html" className=""><span>Software Development</span></a></li>
                                </ul>
                              </li>
                              <li className="menu-item menu-item-has-children has-sub-menu"><h3><span>Infrastructure</span></h3>
                                <ul className="sub_menu">
                                  <li className="menu-item"><a href="it-office-setup-uae-philippines.html" className=""><span>IT Office Setup in UAE &amp; Philippines</span></a></li>
                                  <li className="menu-item"><a href="smart-building-home-automation.html" className=""><span>Smart Building, Office &amp; Home Automation Solutions</span></a></li>
                                  <li className="menu-item"><a href="structured-cabling-wireless.html" className=""><span>Structured Cabling &amp; Wireless</span></a></li>
                                </ul>
                              </li>
                              <li className="menu-item menu-item-has-children has-sub-menu"><h3><span>Communications</span></h3>
                                <ul className="sub_menu">
                                  <li className="menu-item"><a href="unified-communications.html" className=""><span>Unified Communications</span></a></li>
                                  <li className="menu-item"><a href="contact-centers.html" className=""><span>Contact Centers</span></a></li>
                                  <li className="menu-item"><a href="hold-music-ivr-voice-recording.html" className=""><span>Hold Music &amp; IVR Voice Recording</span></a></li>
                                </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-has-children  has-sub-menu"><a href="javascript:void(0)" className=""><span>Resources</span></a>
                          <ul className="sub_menu">
                            <li className="menu-item"><a href="articles.html" className=""><span>Articles</span></a></li>
                            <li className="menu-item"><a href="open-source-software.html" className=""><span>Open Source Software</span></a></li>
                          </ul>
                        </li>
                        <li className="menu-item"><a href="contact.html" className=""><span>Contact</span></a></li>
                      </ul>
                    </div>

                  </div>
              </div>
            </div>
          </div>     
        </div>
    </div>
  </header>
  <div className="fullscreen_search_holder fade">
    <div className="close_container">
      <div className="container">
        <div className="container_inner clearfix">
            <div className="search_close_holder">
              <div className="side_menu_button">
                <a className="fullscreen_search_close" href="javascript:void(0)">
                  <i className="qode_icon_font_awesome fa fa-times "></i>
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div className="fullscreen_search_table">
      <div className="fullscreen_search_cell">
        <div className="fullscreen_search_inner">
          <form role="search" action="#" className="fullscreen_search_form" method="get">
            <div className="form_holder">
              <span className="search_label">Search:</span>
              <div className="field_holder">
                <input type="text" name="s" className="search_field" autocomplete="off" />
                <div className="line"></div>
              </div>
              <a className="qode_search_submit search_submit" href="javascript:void(0)">
                <i className="qode_icon_font_awesome fa fa-search "></i>              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div className="banner-with-title">
    <div className="bn-title">
      <div className="container">
        <div className="main-st">
          <h1><span>TECHNOLOGY PARTNERS</span></h1>
        </div>
      </div>
    </div>
  </div>

  <div className="breed-technologies"> 
     <div className="empty-space-100">&nbsp;</div>
    <div className="container">
      <div className="technologies">
        <h3 className="aline-center">Best of Breed Technologies, One Unified Solution</h3>
        <div className="empty-space-50">&nbsp;</div> 
        <div className="unified-solution">
            <ul className="unified-listing">
              <li className="technologies-lisitng-view">
                <div className="technologies-breed"> 
                  <img src="../../Cisco-150x118.png" />
                </div>
              </li> 
              <li className="technologies-lisitng-view">
                <div className="technologies-breed"> 
                  <img src="../../Avaya-150x118.png" />
                </div>
              </li> 
              <li className="technologies-lisitng-view">
                <div className="technologies-breed"> 
                  <img src="../../Fortinet-150x118.png" />
                </div>
              </li> 
              <li className="technologies-lisitng-view">
                <div className="technologies-breed"> 
                  <img src="../../Microsoft-150x118.png" />
                </div>
              </li> 
              <li className="technologies-lisitng-view">
                <div className="technologies-breed"> 
                  <img src="../../aruba-150x118.png" />
                </div>
              </li> 
              <li className="technologies-lisitng-view">
                <div className="technologies-breed"> 
                  <img src="../../dell-150x118.png" />
                </div>
              </li> 

              <li className="technologies-lisitng-view">
                <div className="technologies-breed"> 
                  <img src="../../Digium-150x118.png" />
                </div>
              </li> 
              <li className="technologies-lisitng-view">
                <div className="technologies-breed"> 
                  <img src="../../EasyIO-150x118.png" />
                </div>
              </li> 
              <li className="technologies-lisitng-view">
                <div className="technologies-breed"> 
                  <img src="../../hp-150x118.png" />
                </div>
              </li> 
              <li className="technologies-lisitng-view">
                <div className="technologies-breed"> 
                  <img src="../../Legrand-150x118.png" />
                </div>
              </li> 
              <li className="technologies-lisitng-view">
                <div className="technologies-breed"> 
                  <img src="../../lenovo-150x118.png" />
                </div>
              </li> 
              <li className="technologies-lisitng-view">
                <div className="technologies-breed"> 
                  <img src="../../Mikrotik-150x118.png" />
                </div>
              </li> 

              <li className="technologies-lisitng-view">
                <div className="technologies-breed"> 
                  <img src="../../Ruckus-150x118.png" />
                </div>
              </li> 
              <li className="technologies-lisitng-view">
                <div className="technologies-breed"> 
                  <img src="../../sophos-150x118.png" />
                </div>
              </li> 
              <li className="technologies-lisitng-view">
                <div className="technologies-breed"> 
                  <img src="../../Tridium-150x118.png" />
                </div>
              </li> 
              <li className="technologies-lisitng-view">
                <div className="technologies-breed"> 
                  <img src="../../veeam-150x118.png" />
                </div>
              </li> 
              <li className="technologies-lisitng-view">
                <div className="technologies-breed"> 
                  <img src="../../techlogiks_logo-1-150x150.png" />
                </div>
              </li> 
              <li className="technologies-lisitng-view">
                <div className="technologies-breed"> 
                  <img src="../../systimax-1-150x150.png" />
                </div>
              </li> 

              <li className="technologies-lisitng-view">
                <div className="technologies-breed"> 
                  <img src="../../Schneider-Electric-logo-1-150x150.png" />
                </div>
              </li> 
              <li className="technologies-lisitng-view">
                <div className="technologies-breed"> 
                  <img src="../../premium-line-1-150x150.png" />
                </div>
              </li> 
              <li className="technologies-lisitng-view">
                <div className="technologies-breed"> 
                  <img src="../../Panduit-1-150x150.png" />
                </div>
              </li> 
              <li className="technologies-lisitng-view">
                <div className="technologies-breed"> 
                  <img src="../../belden-1-150x150.png" />
                </div>
              </li> 
              <li className="technologies-lisitng-view">
                <div className="technologies-breed"> 
                  <img src="../../3m-logo-1-150x150.png" />
                </div>
              </li> 
              <li className="technologies-lisitng-view">
                <div className="technologies-breed"> 
                  <img src="../../Asterisk-1-150x150.png" />
                </div>
              </li> 

              <li className="technologies-lisitng-view">
                <div className="technologies-breed"> 
                  <img src="../../Polycom-1-150x150.png" />
                </div>
              </li> 
              <li className="technologies-lisitng-view">
                <div className="technologies-breed"> 
                  <img src="../../cisco-m-150x150.png" />
                </div>
              </li> 

            </ul> 
          </div>
        </div>  
      </div>
    </div>
     <div className="empty-space-100">&nbsp;</div>
 

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
              <div className="testimonial_text_inner">
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
              <div className="testimonial_text_inner">
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
              <div className="testimonial_text_inner">
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
              <div className="testimonial_text_inner">
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
              <div className="testimonial_text_inner">
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
              <div className="testimonial_text_inner">
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
              <div className="testimonial_text_inner">
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
              <div className="testimonial_text_inner">
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
export default Technology_partners_Page