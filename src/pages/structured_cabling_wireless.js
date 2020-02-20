import React from "react"
import { Link } from "gatsby"
import ReactDOM from "react-dom";
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/Unified-Logo-2-2.png"
import OwlCarousel from 'react-owl-carousel';
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';


const structured_cabling_wireless = () => (
  <Layout>
    <SEO title="structured cabling wireless" />
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
                <i className="qode_icon_font_awesome fa fa-search "></i> 
              </a>
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
          <h1><span>STRUCTURED CABLING & WIRELESS</span></h1>
        </div>
      </div>
    </div>
  </div>
  <div className="fiber-stk">

    <div className="it-support-services copper-fibre-networks">
      <div className="container">
        <div className="empty-space-100">&nbsp;</div> 
        <div className="it-services">         
          <div className="row">
            <div className="col-sm-12 col-md-12 services-support-left">
              <div className="pr-image">
                <img src="../../Network-Cabling-Wireless.png" />
              </div>
            </div>
            <div className="empty-space-50">&nbsp;</div>
            <div className="col-sm-12 col-md-12 services-support-right">
              <div className="pr-content">
                <h3 className="aline-center">Copper & Fibre Networks</h3>
                <div className="empty-space-25">&nbsp;</div>
                <h4 className="aline-center">Unified solution through full-stack verification, from underlying copper or fibre-optic cabling through to all performance and security aspects of active design.</h4>
                <div className="empty-space-50">&nbsp;</div>
              </div>
            </div>
            <div className="empty-space-50">&nbsp;</div>
            <div className="structured-cabling">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <p>Structured cabling from small to large multi-building deployments:</p>
                  <ul className="check-service">
                    <li> <i className="fa fa-check"></i> <span>Cat6 and Cat7 Copper Structured Cabling</span></li>
                    <li> <i className="fa fa-check"></i> <span>Multi-mode and Single-mode Fibre-Optic</span></li>
                    <li> <i className="fa fa-check"></i> <span>Fusion Splicing</span></li>
                    <li> <i className="fa fa-check"></i> <span>10Gbps and higher backbone</span></li>
                    <li> <i className="fa fa-check"></i> <span>Audio visual over copper and fibre networks</span></li>
                  </ul>
                </div>

                <div className="col-sm-12 col-md-6">
                  <p>We provide multi-faceted turnkey design with:</p>
                  <ul className="check-service">
                    <li> <i className="fa fa-check"></i> <span>Full passive cabling design with redundant paths</span></li>
                    <li> <i className="fa fa-check"></i> <span>Top of rack switching at data centre through distribution and access ports</span></li>
                    <li> <i className="fa fa-check"></i> <span>Cross-cutting concerns of active security components, with physical and logical VLAN security</span></li>
                    <li> <i className="fa fa-check"></i> <span>Backbone for converged unified communications, security and building management networks</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>          
        </div>
        <div className="empty-space-100">&nbsp;</div>
      </div>
    </div>

    <div className="best-of-breed">
      <div className="empty-space-100">&nbsp;</div>
      <div className="container">  
        <div className="breed-structured">
          <h3 className="aline-center">Best of Breed Structured Cabling Systems</h3>
          <div className="empty-space-50">&nbsp;</div>
          <h4 className="aline-center">Proudly partnering with the market leaders in structured cabling systems.</h4>
          <div className="empty-space-25">&nbsp;</div>
          <div className="breed-crousel">
            <div id="our-crousel-owl" className="owl-carousel owl-theme">
                {(typeof window !== 'undefined') ? (
                <OwlCarousel className="owl-carousel owl-theme test" loop margin={10} items={3} autoplay={true} autoplayTimeout={2000}>
              <div className="item">
                <img itemprop="image" src="../../systimax-1.png" alt="carousel image" />
              </div>
              <div className="item">
                <img itemprop="image" src="../../techlogiks_logo-1.png" alt="carousel image" />
              </div>
              <div className="item">
                <img itemprop="image" src="../../Legrand.png" alt="carousel image" />
              </div>
              <div className="item">
                <img itemprop="image" src="../../3m-logo-1.png" alt="carousel image" />
              </div>
              <div className="item">
                <img itemprop="image" src="../../Panduit-1.png" alt="carousel image" />
              </div>
              <div className="item">
                <img itemprop="image" src="../../belden-1.png" alt="carousel image" />
              </div>
              <div className="item">
                <img itemprop="image" src="../../premium-line-1.png" alt="carousel image" />
              </div>
              <div className="item">
                <img itemprop="image" src="../../Schneider-Electric-logo-1.png" alt="carousel image" />
              </div>
            </OwlCarousel>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="empty-space-75">&nbsp;</div>
    </div>

    <div className="intelligent-patching">
      <div className="empty-space-100">&nbsp;</div>
      <div className="container">
        <div className="patch-ing">
          <h3 className="aline-center">Intelligent Patching</h3>
          <div className="empty-space-25">&nbsp;</div>
          <h4 className="aline-center">Take control of your network – reduce management overhead, save time with instant visibility, increase security and reduce operational risk.</h4>
          <div className="empty-space-50">&nbsp;</div>
          <div className="wrp-txt">
            <p className="aline-center">Change tracking – stored as-built drawings and diagrams automatically update to a central repository without any manual intervention.</p>
            <p className="aline-center">Schedule work orders – details required connectivity changes with visual guidance to the field technician(s) through the required steps.</p>
            <p className="aline-center">Round the clock security – instant alerts when physical patching changes, with ability to physically disable port for unauthorised changes.</p>
          </div>
        </div>
      </div>
      <div className="empty-space-100">&nbsp;</div>
    </div>

    <div className="intelligent-wireless">
      <div className="empty-space-100">&nbsp;</div>
      <div className="container">
        <div className="wireless-solution">
          <h3 className="aline-center">Intelligent Wireless Solutions</h3> 
          <div className="empty-space-25">&nbsp;</div>
          <h4 className="aline-center">Centrally managed wireless solutions with on-premise and cloud based controllers.</h4>
          <div className="empty-space-50">&nbsp;</div>
          <div className="structured-cabling">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <p>Turnkey wireless design, consisting of:</p>
                  <ul className="check-service">
                    <li> <i className="fa fa-check"></i> <span>Access points placement (heat map optimisation)</span></li>
                    <li> <i className="fa fa-check"></i> <span>Firewalls for wireless traffic and control back-plane</span></li>
                    <li> <i className="fa fa-check"></i> <span>Structured cabling design</span></li>
                    <li> <i className="fa fa-check"></i> <span>Centralised configuration, management and auto-optimisation</span></li>
                    <li> <i className="fa fa-check"></i> <span>Multiple SSID for voice, private and guest network VLANs</span></li>
                    <li> <i className="fa fa-check"></i> <span>Automatic hand-off and control of all devices</span></li>
                  </ul>
                </div>

                <div className="col-sm-12 col-md-6">
                  <p>We offer a range of vendors and devices, and these can be:</p>
                  <ul className="check-service">
                    <li> <i className="fa fa-check"></i> <span>Standalone</span></li>
                    <li> <i className="fa fa-check"></i> <span>On-premise access points with virtual controller (built in to one of the access points)</span></li>
                    <li> <i className="fa fa-check"></i> <span>On-premise access points with dedicated controller</span></li>
                    <li> <i className="fa fa-check"></i> <span>On-remise access points with cloud management and control (cloud-based controller)</span></li>
                    <li> <i className="fa fa-check"></i> <span>Remote connections to on-premise controllers on central offices</span></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="empty-space-100">&nbsp;</div>
    </div>

    <div className="our-wireless-partners">
      <div className="empty-space-100">&nbsp;</div>
      <div className="container">
        <div className="wireless-partners">
          <h3 className="aline-center">Our Wireless Partners</h3>
          <div className="empty-space-50">&nbsp;</div>
          <h4 className="aline-center">Proudly partnering with the market leaders in wireless.</h4>
          <div className="empty-space-25">&nbsp;</div>
          <div className="wireless-crousel">
            <div id="our-wireless-owl" className="owl-carousel owl-theme">
              {(typeof window !== 'undefined') ? (
      <OwlCarousel className="owl-carousel owl-theme test" loop margin={10} items={3} autoplay={true} autoplayTimeout={2000}>
              <div className="item">
                <img itemprop="image" src="../../Fortinet.png" alt="carousel image" />
              </div>
              <div className="item">
                <img itemprop="image" src="../../cisco.png" alt="carousel image" />
              </div>
              <div className="item">
                <img itemprop="image" src="../../cisco-m.png" alt="carousel image" />
              </div>
              <div className="item">
                <img itemprop="image" src="../../Mikrotik.png" alt="carousel image" />
              </div>
              <div className="item">
                <img itemprop="image" src="../../aruba.png" alt="carousel image" />
              </div>
              <div className="item">
                <img itemprop="image" src="../../Ruckus.png" alt="carousel image" />
              </div>
            </OwlCarousel>
            ) : null}
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
</div>
   </Layout>
)
export default structured_cabling_wireless