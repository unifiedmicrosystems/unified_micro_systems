import React from "react"
import { Link } from "gatsby"
import ReactDOM from "react-dom";
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/Unified-Logo-2-2.png"
import OwlCarousel from 'react-owl-carousel';
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

const hosted_solutions = () => (
  <Layout>
    <SEO title="hosted solutions" /> 
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
          <h1><span>HOSTED SOLUTIONS</span></h1>
        </div>
      </div>
    </div>
  </div>

  <div className="it-support-services">
    <div className="container">
      <div className="empty-space-100">&nbsp;</div> 
      <div className="it-services">         
        <div className="row">
          <div className="col-sm-12 col-md-6 services-support-left">
            <div className="pr-image">
              <img src="../../Managed-Services.png" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 services-support-right">
            <div className="pr-content">
              <h3 className="align-left">Global Capability with Local Service</h3>
              <div className="empty-space-25">&nbsp;</div>
              <div className="content-phr">
                  <p className="aligne-left">Unified Microsystems provides shared web hosting services, dedicated server solutions, VPS cloud server solutions from our UAE and Philippines based data-centres, along with services worldwide from Azure (as a Microsoft Cloud Solution Provider).</p>
                  <ul className="gl-service">
                    <li>Application Hosting</li>
                    <li>Web Hosting</li>
                    <li>Cloud Services</li>
                    <li>Cloud Migration</li>
                    <li>Disaster Recovery Backup Targets</li>
                    <li>Business Continuity Sites</li>
                    <li>Dedicated Servers</li>
                    <li>Virtual Private Servers</li>
                    <li>VPS Hosting</li>
                    <li>Shared Servers (cPanel/Plesk)</li>
                    <li>Colocation</li>
                    <li>IP Transit</li>
                    <li>Hosting solutions</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>          
      </div>
      <div className="empty-space-100">&nbsp;</div>
    </div>
  </div>

  <div className="systems-we-support">
    <div className="container">
      <div className="empty-space-100">&nbsp;</div>
      <h3 className="aline-center">Infrastructure Designed for Reliability</h3>
      <div className="empty-space-25">&nbsp;</div>
      <h4 className="aligne-left">Resilient power, cooling and connectivity, with 24/7/365 monitoring and support.</h4>
      <div className="empty-space-25">&nbsp;</div>
      <div className="systems-cut"> 
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <div className="systems-inner">
              <div className="systems-inner-cut">  
                <div className="empty-space-50">&nbsp;</div>
                <div className="systems_holder">
                  <ul className="systems_inner">
                    <li className="systems_title_holder background_color_type">
                      <div className="systems_title_inner">
                        <div className="systems_title_inner2">
                          <h5 className="service_title">Network</h5>
                          <i className="qode_icon_font_awesome fa fa-code fa-3x"></i>
                        </div>
                      </div>
                    </li>
                    <li className="systems-content"><p></p>
                      <ul>
                        <li>Multi-route BGP redundancy for active network equipment.</li>
                        <li>Worldwide low-latency fibre interconnects</li>
                        <li>FLAG Reliance, GBI, EIG, FALCON connectivity</li>
                        <li>Segregated public and private networks per customer</li>
                      </ul>
                      <p></p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> 

          <div className="col-sm-6 col-md-3">
            <div className="systems-inner">
              <div className="systems-inner-cut">  
                <div className="empty-space-50">&nbsp;</div>
                <div className="systems_holder">
                  <ul className="systems_inner">
                    <li className="systems_title_holder background_color_type">
                      <div className="systems_title_inner">
                        <div className="systems_title_inner2">
                          <h5 className="service_title">Protection</h5>
                          <i className="qode_icon_font_awesome fa fa-lock fa-3x"></i>
                        </div>
                      </div>
                    </li>
                    <li className="systems-content"><p></p>
                      <ul>
                        <li>Single entrance, man trap and full height in and out turnstiles</li>
                        <li>Dedicated on-site security 24/7/365</li>
                        <li>CCTV, biometric access and alarm system.</li>
                        <li>Multi-zoned gas suppression system</li>
                      </ul>
                      <p></p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> 

          <div className="col-sm-6 col-md-3">
            <div className="systems-inner">
              <div className="systems-inner-cut">  
                <div className="empty-space-50">&nbsp;</div>
                <div className="systems_holder">
                  <ul className="systems_inner">
                    <li className="systems_title_holder background_color_type">
                      <div className="systems_title_inner">
                        <div className="systems_title_inner2">
                          <h5 className="service_title">Power & Cooling</h5>
                          <i className="qode_icon_font_awesome fa fa-compress fa-3x"></i>
                        </div>
                      </div>
                    </li>
                    <li className="systems-content"><p></p>
                      <ul>
                        <li>N+1 distributed redundant UPS</li>
                        <li>6MW utility supply (6 feeds)</li>
                        <li>4 x 1.6 MW generators (N+1)</li>
                        <li>1.35 kW/m² Cooling Capacity (N+1)</li>
                        <li>Heavy duty anti-static raised floor</li>
                      </ul>
                      <p></p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> 
           <div className="col-sm-6 col-md-3">
            <div className="systems-inner">
              <div className="systems-inner-cut">  
                <div className="empty-space-50">&nbsp;</div>
                <div className="systems_holder">
                  <ul className="systems_inner">
                    <li className="systems_title_holder background_color_type">
                      <div className="systems_title_inner">
                        <div className="systems_title_inner2">
                          <h5 className="service_title">Compliance</h5>
                          <i className="qode_icon_font_awesome fa fa-database fa-3x"></i>
                        </div>
                      </div>
                    </li>
                    <li className="systems-content"><p></p>
                      <ul>
                        <li>ISO 27001</li>
                        <li>ISO 9001:2015</li>
                        <li>OHSAS 18001</li>
                        <li>PCI DSS</li>
                        <li>SOC 1 Type II</li>
                        <li>SOC 2 Type II</li>
                      </ul>
                      <p></p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> 
        </div>

      <div className="empty-space-100">&nbsp;</div>
    </div>
  </div>
  </div>

  <div className="it-support-services network-operations">
    <div className="container">
      <div className="empty-space-100">&nbsp;</div> 
      <div className="it-services">         
        <div className="row">
          <div className="col-sm-12 col-md-6 services-support-left">
            <div className="pr-image">
              <img src="../../Managed-Services.png" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 services-support-right">
            <div className="pr-content">
              <h3 className="align-left">Global Capability with Local Service</h3>
              <div className="empty-space-25">&nbsp;</div>
              <div className="content-phr">
                  <p className="aligne-left">Unified Microsystems provides shared web hosting services, dedicated server solutions, VPS cloud server solutions from our UAE and Philippines based data-centres, along with services worldwide from Azure (as a Microsoft Cloud Solution Provider).</p>
                  <ul className="gl-service">
                    <li>Application Hosting</li>
                    <li>Web Hosting</li>
                    <li>Cloud Services</li>
                    <li>Cloud Migration</li>
                    <li>Disaster Recovery Backup Targets</li>
                    <li>Business Continuity Sites</li>
                    <li>Dedicated Servers</li>
                    <li>Virtual Private Servers</li>
                    <li>VPS Hosting</li>
                    <li>Shared Servers (cPanel/Plesk)</li>
                    <li>Colocation</li>
                    <li>IP Transit</li>
                    <li>Hosting solutions</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>          
      </div>
      <div className="empty-space-100">&nbsp;</div>
    </div>
  </div>

  <div className="our-locations">
    <div className="container">
      <div className="empty-space-100">&nbsp;</div>
      <h3 className="aline-center">Our Locations</h3>
      <div className="empty-space-25">&nbsp;</div>
      <h4 className="aline-center">Data Centres in Dubai, Manila and Across the Globe.</h4>
      <div className="empty-space-50">&nbsp;</div>
      <div className="data-center">
        <div className="row">
          <div className="col-md-3 data-loaction">
            <div className="icon-view">
              <i className="qode_icon_font_awesome fa fa-map-marker qode-ili-icon-holder transparent"></i>
              <p>Equinix DX1 in Dubai, UAE</p>
            </div>
            <div className="map-loaction">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14460.89730768163!2d55.1868599!3d25.0264601!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x232ca42a8fcd5a7e!2sEquinix+DX1!5e0!3m2!1sen!2sae!4v1539353999428" width="100%" height="350" frameborder="0" style={{border: '0px'}} allowfullscreen=""></iframe>
            </div>
          </div> 

          <div className="col-md-3 data-loaction">
            <div className="icon-view">
              <i className="qode_icon_font_awesome fa fa-map-marker qode-ili-icon-holder transparent"></i>
              <p>NTT in Manila, Philippines</p>
            </div>
            <div className="map-loaction">
              <iframe src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.6062068022807!2d121.02019315045897!3d14.564497689775573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9a80b5437d3%3A0x726d908d1079ce55!2sVITRO+Makati!5e0!3m2!1sen!2sae!4v1541490777591" width="100%" height="350" frameborder="0" style={{border: '0px'}} allowfullscreen=""></iframe>
            </div>
          </div> 

          <div className="col-md-3  data-loaction">
            <div className="icon-view">
              <i className="qode_icon_font_awesome fa fa-map-marker qode-ili-icon-holder transparent"></i>
              <p>NTT in Clark, Philippines</p>
            </div>
            <div className="map-loaction">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.571236868078!2d120.52752235046637!3d15.181873889382565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396ed53641fb2e1%3A0xab8b9c99219ae41a!2sVITRO+Clark!5e0!3m2!1sen!2sae!4v1541490692259" width="100%" height="350" frameborder="0" style={{border: '0px'}} allowfullscreen=""></iframe>
            </div>
          </div> 

          <div className="col-md-3  data-loaction">
            <div className="icon-view">
              <i className="qode_icon_font_awesome fa fa-map-marker qode-ili-icon-holder transparent"></i>
              <p>Microsoft Azure (worldwide)</p>
            </div>
            <div className="map-loaction">
            <iframe src="https://www.google.com/maps/d/embed?mid=1DxuVZpESlJMVJM5PoqeEmQvrUQ4" width="100%" height="350" frameborder="0" style={{border: '0px'}} allowfullscreen=""></iframe>
            </div>
          </div> 

        </div>
      </div>
      <div className="empty-space-100">&nbsp;</div>
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
                <p className="testimonial_author" style={{fontweight: '500',color: '#be1522',fontsize: '13px',}}>- Debbie&nbsp;Rogers (Owner,&nbsp;CoffeCakesAndRunning.com)</p>
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
export default hosted_solutions