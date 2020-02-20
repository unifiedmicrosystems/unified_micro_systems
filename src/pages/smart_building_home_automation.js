import React from "react"
import { Link } from "gatsby"
import ReactDOM from "react-dom";
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/Unified-Logo-2-2.png"
import OwlCarousel from 'react-owl-carousel';
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';


const smart_building_home_automation = () => (
  <Layout>
    <SEO title="smart building home automation" />
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
          <h1><span>SMART BUILDING, OFFICE & HOME AUTOMATION SOLUTIONS</span></h1>
        </div>
      </div>
    </div>
  </div>

  <div className="it-support-services turnkey-IT-office">
    <div className="container">
      <div className="empty-space-100">&nbsp;</div> 
      <div className="it-services">         
        <div className="row">
          <div className="col-sm-12 col-md-6 services-support-left">
            <div className="pr-image">
              <img src="../../Smart-Building-Home-Automation.png" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 services-support-right">
            <div className="pr-content">
              <h3 className="align-left">The Internet of Things (IoT)</h3>
              <div className="empty-space-25">&nbsp;</div>
              <div className="content-phr">
                <h4 className="aligne-left">Pushing intelligence from the core to the edge lowers costs, saves energy and increases tenant comfort.</h4>
                <div className="content-phr">
                  <p className="aligne-left">Unified Microsystems offer complete building management solutions, to create environments that are smarter, more efficient, safer, lower operational costs, greener to the environment and deliver measurable and sustainable return on investment.</p>
                  <p className="aligne-left">From control of HVAC, power and lighting, along with monitoring of auxilary systems, our smart building management solutions enable total control, monitoring and management of every aspect of your smart building.</p>
               </div>
              </div>
            </div>
          </div>
        </div>          
      </div>
      <div className="empty-space-100">&nbsp;</div>
    </div>
  </div>

  <div className="integrated-solutions">
    <div className="empty-space-100">&nbsp;</div> 
    <div className="container">
      <div className="solutions-mounted"> 
        <div className="row">
          <div className="col-sm-6 col-md-3 st-solutions">
            <div className="solutions-st-mounted">
              <div className="solutions-img"> 
                  <img src="../../Lighting-Control-150x150.jpg" />
              </div>
              <div className="empty-space-25">&nbsp;</div>
              <div className="title-content">
                <h4><span>Lighting</span></h4>
                <p>&nbsp;</p>
                <p>Integrated solutions via BMS (building management systems) or for smaller deployments direct lighting controllers.</p>
                <div className="empty-space-25">&nbsp;</div>
                <ul className="check-service">
                  <li> <i className="fa fa-check"></i> <span>Standalone Controllers to full BMS integration</span></li>
                  <li> <i className="fa fa-check"></i> <span>High Density RGB/RGBW Strips</span></li>
                  <li> <i className="fa fa-check"></i> <span>230V LED to 24V Power Supplies</span></li>
                  <li> <i className="fa fa-check"></i> <span>DMX to RGB/RGBW Drivers</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 st-solutions">
            <div className="solutions-st-mounted">
              <div className="solutions-img"> 
                  <img src="../../Audio-Systems-150x150.png" />
              </div>
              <div className="empty-space-25">&nbsp;</div>
              <div className="title-content">
                <h4><span>Audio Systems</span></h4>
                <p>&nbsp;</p>
                <p>Mounted speakers for background music and public announcement, reputable brands that are cost effective and sound amazing.</p>
                <div className="empty-space-25">&nbsp;</div>
                <ul className="check-service">
                  <li> <i className="fa fa-check"></i> <span>Bose</span></li>
                  <li> <i className="fa fa-check"></i> <span>Australian Monitor</span></li>
                  <li> <i className="fa fa-check"></i> <span>Crown Audio</span></li>
                  <li> <i className="fa fa-check"></i> <span>Multi-zone ChromeCast and Sonos Streaming</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 st-solutions">
            <div className="solutions-st-mounted">
              <div className="solutions-img"> 
                  <img src="../../IP-AV-150x150.png" />
              </div>
              <div className="empty-space-25">&nbsp;</div>
              <div className="title-content">
                <h4><span>IP-AV Systems</span></h4>
                <p>&nbsp;</p>
                <p>Distribute 1080P and 2K content over traditional Cat6 networks with quality IP-AV encoders and decoders.</p>
                <div className="empty-space-25">&nbsp;</div>
                <ul className="check-service">
                  <li> <i className="fa fa-check"></i> <span>HDMI over IP Distribution</span></li>
                  <li> <i className="fa fa-check"></i> <span>1080P</span></li>
                  <li> <i className="fa fa-check"></i> <span>4K</span></li>
                  <li> <i className="fa fa-check"></i> <span>Dolby Digital Audio</span></li>
                  <li> <i className="fa fa-check"></i> <span>PoE+ Powered</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 st-solutions">
            <div className="solutions-st-mounted">
              <div className="solutions-img"> 
                  <img src="../../Physical-Security-150x150.png" />
              </div>
              <div className="empty-space-25">&nbsp;</div>
              <div className="title-content">
                <h4><span>Security</span></h4>
                <p>&nbsp;</p>
                <p>IP PoE+ cameras and access control from trusted brands for homes through to commercial applications.</p>
                <div className="empty-space-25">&nbsp;</div>
                <ul className="check-service">
                  <li> <i className="fa fa-check"></i> <span>IP Network Video Recorders</span></li>
                  <li> <i className="fa fa-check"></i> <span>Bullet and 360 fish-eye IP cameras</span></li>
                  <li> <i className="fa fa-check"></i> <span>Access Control</span></li>
                  <li> <i className="fa fa-check"></i> <span>Time and Attendance</span></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div className="empty-space-100">&nbsp;</div> 
  </div>

  <div className="home-solutions">
    <div className="empty-space-100">&nbsp;</div> 
    <div className="container">
      <div className="smart-home">
        <div className="row">
          <div className="col-sm-6 col-md-3 smart-home-solutions">
            <div className="solutions-serv">
              <h4>Smart Home Solutions</h4>
              <div className="empty-space-25">&nbsp;</div>
              <div className="content-phr">
                <p>Consisting of the Google Home portfolio, including air conditioning, entertainment (movies and audio), heating, security alarms and lighting control.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 smart-home-solutions">
            <div className="solution-images">
              <img src="../../smart-building-1.png" />
            </div>
          </div>

          <div className="col-sm-6 col-md-3 smart-home-solutions">
            <div className="solution-images">
              <img src="../../smart-building-3.png" />
            </div>
          </div>

          <div className="col-sm-6 col-md-3 smart-home-solutions">
            <div className="solution-images">
              <img src="../../smart-building-2.png" />
            </div>
          </div>

        </div>
      </div>
    </div>
    <div className="empty-space-100">&nbsp;</div> 
  </div>

  <div className="management-systems">
    <div className="empty-space-100">&nbsp;</div> 
    <div className="container">
      <div className="building-management">
        <h3 className="aline-left">Building Management Systems</h3>
        <div className="empty-space-25">&nbsp;</div>
        <h4 className="aline-left">Smart solutions allow for a return of investment typically within 2 years, both for retrofit and greenfield projects.</h4>
        <div className="empty-space-50">&nbsp;</div>
        <div className="systems-typically">
          <p>Buildings without building management systems typically waste large amounts of energy attempting to control temperature, air quality or lighting on a room by room basis. Centralising all environmental data allows overall optimisation, eliminating wastage allowing large amounts of energy to be saved.</p>
          <p>Carbon dioxide, humidity, dust and other pollutants adversely affect the productivity and health of tenants, resulting in dissatisfaction and lost man-hours due to sickness. Managing sub systems 24/7/365, air quality issues can be alerted and resolved before they become a problem.</p>
          <p>Unified Microsystems offer smart building control solutions&nbsp; and smart home automation solutions by providing modern, flexible and cost effective Building Management Systems (BMS) that continuously monitor and manage pumps, fans, fresh-air circulation, motion sensors, lighting systems and HVAC, along with integration to auxiliary systems such as Security,&nbsp;Elevators and Fire Detection and Alarm Systems (FDAS).</p>
        </div>
      </div>
      <div className="empty-space-100">&nbsp;</div> 
      <div className="benifits-of-working">
          <div className="working-benifits">      
            <div className="row">
              <div className="col-sm-12 col-md-6 working-left">
                <div className="empty-space-50">&nbsp;</div>
                <div className="working-support">
                  <h3 className="aline-left"><span>BMS Benefits</span></h3>
                  <div className="empty-space-25">&nbsp;</div>
                  <div className="working-content">
                    <p>Having learnt from the limitations of other systems, our building operating system solution has been redesigned from the ground up using time saving techniques such as tagging, data modelling, query framework and templates.</p>
                    <p>Thanks to a modern customisable HTML user interface, operations are context sensitive so the system already knows the user’s intention, presenting the right options at the right time all automatically.</p>
                    <p>Multi-vendor, open protocol with IoT standards eliminates vendor tie-in, with options from a large pool of hardware manufacturers. Return on investment is assured for both retrofit and greenfield projects.</p>
                  </div>
                </div> 
              </div>
              <div className="col-sm-12 col-md-6 working-right">
                <div className="empty-space-50">&nbsp;</div>
                <div className="">
                    <div className="qode-int-icon-showcase qode-autoplay qode-appeared" data-interval="3000">
                      <div className="qode-int-icon-showcase-inner">
                        <div className="qode-showcase-item-holder qode-showcase-active">
                          <div className="qode-showcase-icon">
                            <span className="qode-icon-holder qode-icon-circle">
                              <i className="qode_icon_font_awesome fa fa-search-plus qode-icon-element"></i></span>
                          </div>
                          <div className="qode-showcase-content">
                            <div className="qode-showcase-content-table">
                              <div className="qode-showcase-content-cell">
                                <h5>Seamless efficiency and overview</h5>
                                <div className="qode-showcase-content-inner">
                                  <p className="aline-center">Utilise information from different systems to enable more efficient facility management. </p> </div>
                                </div>
                            </div>
                          </div>
                        </div>
                      <div className="qode-showcase-item-holder">
                        <div className="qode-showcase-icon">
                          <span className="qode-icon-holder qode-icon-circle">
                            <i className="qode_icon_font_awesome fa fa-money qode-icon-element"></i>    </span>
                        </div>
                        <div className="qode-showcase-content">
                          <div className="qode-showcase-content-table">
                            <div className="qode-showcase-content-cell">
                              <h5>Return on investment typically within 2 years</h5>
                              <div className="qode-showcase-content-inner">
                                <p className="aline-center">From savings in energy, plant maintenance and extended life-time from lower duty cycles.</p>         
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="qode-showcase-item-holder">
                        <div className="qode-showcase-icon">
                          <span className="qode-icon-holder qode-icon-circle">
                            <i className="qode_icon_font_awesome fa fa-smile-o qode-icon-element"></i>   </span>
                        </div>
                        <div className="qode-showcase-content">
                          <div className="qode-showcase-content-table">
                            <div className="qode-showcase-content-cell">
                              <h5>Increased tenant satisfaction</h5>
                              <div className="qode-showcase-content-inner">
                                <p className="aline-center">Cleaner air flow and improved occupant health, reduces occupant complaints with proactive alerts and alarms.</p>         
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="qode-showcase-item-holder">
                        <div className="qode-showcase-icon">
                          <span className="qode-icon-holder qode-icon-circle">
                            <i className="qode_icon_font_awesome fa fa-pagelines qode-icon-element"></i>    </span>
                        </div>
                        <div className="qode-showcase-content">
                          <div className="qode-showcase-content-table">
                            <div className="qode-showcase-content-cell">
                              <h5>Green technology</h5>
                              <div className="qode-showcase-content-inner">
                                <p className="aline-center">Lighting and cooling with scheduling and motion detection with auto-shutoff.</p>          
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="qode-showcase-item-holder">
                        <div className="qode-showcase-icon">
                          <span className="qode-icon-holder qode-icon-circle">
                            <i className="qode_icon_font_awesome fa fa-envelope-open qode-icon-element"></i>   </span>
                        </div>
                        <div className="qode-showcase-content">
                          <div className="qode-showcase-content-table">
                            <div className="qode-showcase-content-cell">
                              <h5>Eliminate vendor tie-in</h5>
                              <div className="qode-showcase-content-inner">
                                <p className="aline-center">Work with standards and inter-operable systems from multiple vendors eliminating propriety vendor tie in. </p>        
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="qode-showcase-item-holder">
                        <div className="qode-showcase-icon">
                          <span className="qode-icon-holder qode-icon-circle">
                            <i className="qode_icon_font_awesome fa fa-tachometer qode-icon-element"></i>    </span>
                        </div>
                        <div className="qode-showcase-content">
                          <div className="qode-showcase-content-table">
                            <div className="qode-showcase-content-cell">
                              <h5>Retain and future-proof existing investments</h5>
                              <div className="qode-showcase-content-inner">
                                <p className="aline-center">Retain and integrate existing investments with new technologies. </p> </div>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="qode-showcase-item-holder">
                        <div className="qode-showcase-icon">
                          <span className="qode-icon-holder qode-icon-circle">
                            <i className="qode_icon_font_awesome fa fa-plug qode-icon-element"></i>   </span>
                        </div>
                        <div className="qode-showcase-content">
                          <div className="qode-showcase-content-table">
                            <div className="qode-showcase-content-cell">
                              <h5>Open Standards</h5>
                              <div className="qode-showcase-content-inner">
                                <p className="aline-center">Streamline working with data IoT (Internet of Things) devices by using standard data formats such as the Haystack open standard,</p>          
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="qode-showcase-item-holder">
                        <div className="qode-showcase-icon">
                          <span className="qode-icon-holder qode-icon-circle">
                            <i className="qode_icon_font_awesome fa fa-building qode-icon-element"></i>   </span>
                        </div>
                        <div className="qode-showcase-content">
                          <div className="qode-showcase-content-table">
                            <div className="qode-showcase-content-cell">
                              <h5>Simplified building operation and workflows</h5>
                                <div className="qode-showcase-content-inner">
                                  <p className="aline-center">Improve facilities management efficiency with built-in maintenance manual library.</p>         
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="qode-int-icon-circle"></div></div>
                </div>
              </div>
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

   </Layout>
)
export default smart_building_home_automation