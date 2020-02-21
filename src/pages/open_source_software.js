import React from "react"
import { Link } from "gatsby"
import ReactDOM from "react-dom";
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/Unified-Logo-2-2.png"
import OwlCarousel from 'react-owl-carousel';
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

const open_source_software = () => (
  <Layout>
    <SEO title="open source software" /> 
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
                <i className="qode_icon_font_awesome fa fa-search "></i> </a>
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
          <h1><span>OPEN SOURCE SOFTWARE</span></h1>
        </div>
      </div>
    </div>
  </div>

  <div className="open-source-tools"> 
    <div className="empty-space-75">&nbsp;</div>
    <div className="container">
      <div className="source-tools">
        <div className="tools-wrapper">
          <h3>Tools for IoT, Cloud Connectivity, Automation and System Integration</h3>
          <h4>Developed by Our Engineers with Source Code for Free</h4>
          <div className="empty-space-25">&nbsp;</div>
          <p><strong>Important note:</strong> Use of these resources is contingent on agreement with the license terms which are available for each package. No warranty or support of any kind is provided.</p>
          <div className="empty-space-50">&nbsp;</div>
          <div className="source-tools-wrapper">
            <h3>Unified.Mqtt.Pattern</h3>
            <h5>For Internet of Things (IoT), Building Automation and System Integration</h5>
            <hr />
            <p>Message bus software is typically used in <strong>system integration</strong>, <strong>building automation</strong> and specifically <strong>IoT (internet of things)</strong> technologies with field based microcontroller integration to backend enterprise systems, this library is C# port of&nbsp;<a href="https://github.com/RangerMauve/mqtt-pattern">RangerMauve’s mqtt-pattern</a>, a fast library for matching MQTT patterns with named wildcards to extract data from topics.</p>
            <p>Our engineers developed this library for building automation, remote management and energy monitoring solutions that have been actively deployed in Dubai (United Arab Emirates) and Manila (Philippines).</p>
            <ul>
            <li><a href="https://github.com/unifiedmicrosystems/Unified.Mqtt.Pattern" target="_blank" rel="noopener noreferrer">https://github.com/unifiedmicrosystems/Unified.Mqtt.Pattern</a></li>
            <li><a href="https://www.nuget.org/packages/Unified.Mqtt.Pattern/" target="_blank" rel="noopener noreferrer">https://www.nuget.org/packages/Unified.Mqtt.Pattern/</a></li>
            </ul>
          </div>
        </div>        
      </div>       
    </div>
    <div className="empty-space-100">&nbsp;</div>
  </div>
    

  <div className="client-testimonials">
    <div className="container">
      <div className="testimonials-service">
        <h3 className="aline-center">Testimonials</h3>
      </div>
      <div className="empty-space-50">&nbsp;</div>
      <div id="client-testimonials-owl" className="owl-carousel owl-theme">
        {(typeof window !== 'undefined') ? (
      <OwlCarousel classNameName="owl-carousel owl-theme test" loop margin={10} items={3} autoplay={true} autoplayTimeout={2000}>
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
  </Layout>
)
export default open_source_software