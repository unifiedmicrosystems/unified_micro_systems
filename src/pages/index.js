import React from "react"
import { Link } from "gatsby"
import ReactDOM from "react-dom";
import Layout from "../components/layout"
import SEO from "../components/seo"
import OwlCarousel from 'react-owl-carousel';
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import Img from "gatsby-image"
//const webpack = require('webpack');
//const module = typeof window !== `undefined` ? require("module") : null

const SecondPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
          
  <div className="banner-section">
    <div id="demo" className="carousel slide" data-ride="carousel">
      <div className="home-slide carousel-inner">
      {(typeof window !== 'undefined') ? (
      <OwlCarousel className="owl-theme" loop items={1} autoplay={true} autoplayTimeout={2000} >
        <div className="item">
          <img src="https://www.unifiedmicro.systems/wp-content/uploads/2018/10/home-banner-1.1.jpg" alt="Los Angeles" width="1100" height="500" />
          <div className="banner-content"> 
            <div className="full-section">
              <div className="form-view" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-mirror="true" data-aos-once="false">
                <h3 className="bn-head">MANAGED SERVICES</h3>
                <p>Let us manage your systems, giving you peace of mind <br /> and time to concentrate on running your business. </p>
                <div className="read-more"> 
                  <Link to="/managed_services_uae_phillippines">Read More </Link>
                </div>
              </div>  
            </div>
        </div>
        </div>
        <div className="item">
          <img src="https://www.unifiedmicro.systems/wp-content/uploads/2018/10/home-banner-3.1.jpg" alt="Chicago" width="1100" height="500" />
          <div className="banner-content"> 
            <div className="full-section">
                <div className="form-view" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-delay="500">
                  <h3 className="bn-head">NETWORK & ENDPOINT SECURITY </h3>
                  <p>Next generation security appliances and software, <br /> enabling faster and safer communications.</p>
                  <div className="read-more"> 
                    <Link to="/network_end_point_security">Read More </Link>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="https://www.unifiedmicro.systems/wp-content/uploads/2018/10/home-banner-2.1.jpg" alt="New York" width="1100" height="500" />
          <div className="banner-content"> 
            <div className="full-section">
              <div className="form-view" data-aos-duration="1000" data-aos-offset="100" data-aos-easing="ease-in-sine">
                <h3 className="bn-head">UNIFIED <br /> COMMUNICATIONS   </h3>
                <p>Communicate without limits, with voice <br /> video and meeting collaboration solutions. </p>
                <div className="read-more"> 
                  <Link to="/unified_communications">Read More </Link>
                </div>
              </div> 
            </div>
          </div>
        </div>
        </OwlCarousel>
           ) : null}
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
            <div className="col-sm-12 col-md-3 service-delivery md-comn">
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
                        <td style={{textAlign: 'left', fontWeight: '400', fontSize: '15px'}}>
                          <Link to="/managed_services_uae_phillippines">Managed Services in UAE &amp; Philippines</Link>
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
                        <td style={{textAlign: 'left', fontWeight: '400', fontSize: '15px'}}>
                          <Link to="/hosted_solutions"> Hosted Solutions</Link>
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
                        <td style={{textAlign: 'left', fontWeight: '400', fontSize: '15px'}}><Link to="/disaster_recovery_business_continuity"> Disaster Recovery &amp; Business Continuity </Link></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="empty_space" style={{height: '40px'}}>&nbsp;</div>
            </div>
            <div className="col-sm-12 col-md-3 consultancy md-comn">
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
                        <td style={{textAlign: 'left', fontWeight: '400', fontSize: '15px'}}>
                          <Link to="/strategic_it_planning_architecture"> Strategic IT Planning &amp; Architecture</Link>
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
                        <td style={{textAlign: 'left', fontWeight: '400', fontSize: '15px'}}>
                          <Link to="/network_end_point_security"> Network &amp; End-Point Security</Link>
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
                        <td style={{textAlign: 'left', fontWeight: '400', fontSize: '15px'}}><Link to="/software_development"> Software Development</Link></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="empty_space" style={{height: '40px'}}>&nbsp;</div>
            </div>

            <div className="col-sm-12 col-md-3 Infrastructure md-comn">
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
                        <td style={{textAlign: 'left', fontWeight: '400', fontSize: '15px'}}>
                          <Link to="/it_office_setup_uae_phillippines"> IT Office Setup in UAE &amp; Philippines</Link>
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
                        <td style={{textAlign: 'left', fontWeight: '400', fontSize: '15px'}}>
                          <Link to="/smart_building_home_automation"> Smart Building &amp; Home Automation</Link>
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
                        <td style={{textAlign: 'left', fontWeight: '400', fontSize: '15px'}}><Link to="/structured_cabling_wireless"> Structured Cabling &amp; Wireless</Link></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="empty_space" style={{height: '40px'}}>&nbsp;</div>
            </div>

            <div className="col-sm-12 col-md-3 Communications md-comn">
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
                        <td style={{textAlign: 'left', fontWeight: '400', fontSize: '15px'}}>
                          <Link to="/unified_communications"> Unified Communications</Link>
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
                        <td style={{textAlign: 'left', fontWeight: '400', fontSize: '15px'}}>
                          <Link to="/contact_centers"> Contact Centres</Link>
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
                        <td style={{textAlign: 'left', fontWeight: '400', fontSize: '15px'}}><Link to="/hold_music_ivr_voice_recording"> Hold Music &amp; IVR Voice Recording</Link></td>
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
                  <Link to="/our-story/" itemProp="url" target="_self" className="qbutton">OUR STORY</Link>
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
      <h3 style={{textAlign: 'center'}}>Latest From Our Blog</h3>
      <div className="blog-post"> 
        <div className="container-fluid">
          <div className="row">
            {
          data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="col-sm-12 col-md-4">
              <div className="blog-art">
                <div className="blog-post-img">
                    <a itemProp="url" href="https://www.unifiedmicro.systems/articles/reality-check-on-unlimited-web-hosting/" target="_self">
                     <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} className="attachment-full" alt="strategy" />
                    </a>
                </div>
                <div className="blog-post-text">
                  <h5 itemProp="name" className="blog_title">
                    <div key={node.id}><Link to={node.fields.slug}>{node.frontmatter.title}{" "}</Link></div>
                  </h5>
                  <p className="blog-description">{node.excerpt}</p>
                  <div className="post_info">
                    <span itemProp="dateCreated" className="time entry_date updated">{node.frontmatter.date}</span> / <a itemProp="url" className="post_comments" href="https://www.unifiedmicro.systems/articles/reality-check-on-unlimited-web-hosting/#respond">No comment</a></div>
                </div>
              </div>  
            </div>
            ))}
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
            <Link to="/careers" itemProp="url" target="_self" className="qbutton">VIEW AVAILABLE CAREERS</Link>
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
      <OwlCarousel className="owl-theme" loop margin={10} items={5} autoplay={true} autoplayTimeout={2000} >
      
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
      <OwlCarousel className="owl-carousel owl-theme" loop margin={10} items={3} autoplay={true} autoplayTimeout={2000} >
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
                <p className="testimonial_author" style={{fontWeight: '500',color: '#be1522',fontSize: '13px'}}>- Debbie&nbsp;Rogers (Owner,&nbsp;CoffeCakesAndRunning.com)</p>
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
                <p className="testimonial_author" style={{fontWeight: '500',color: '#be1522',fontSize: '13px'}}>- Brian Ballinger (General Manager, Heidi Chef Solutions LLC)</p>
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
                <p className="testimonial_author" style={{fontWeight: '500',color: '#be1522',fontSize: '13px'}}>- Paul Loke (Regional Director, Edmundson Electrical)</p>
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
                <p className="testimonial_author" style={{fontWeight: '500',color: '#be1522',fontSize: '13px'}}>- Blagoy Savov (Clinic Director, Orthosports)</p>
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
                <p className="testimonial_author" style={{fontWeight: '500',color: '#be1522',fontSize: '13px'}}>- Khurram Shehzad (Software Developer, Property Monitor)</p>
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
                <p className="testimonial_author" style={{fontWeight: '500',color: '#be1522',fontSize: '13px'}}>- Khurram Shehzad (Software Developer, Property Monitor)</p>
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
                <p className="testimonial_author" style={{fontWeight: '500',color: '#be1522',fontSize: '13px'}}>- Khurram Shehzad (Software Developer, Property Monitor)</p>
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
                <p className="testimonial_author" style={{fontWeight: '500',color: '#be1522',fontSize: '13px'}}>- Khurram Shehzad (Software Developer, Property Monitor)</p>
              </div>
            </div>
          </div>
        </div> 
        </OwlCarousel>
        ) : null}
        
      </div>
    </div>
  </div>

  </Layout>
)

export default SecondPage
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "DD MMMM, YYYY")
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
          excerpt
        }
      }
    }
  }`
