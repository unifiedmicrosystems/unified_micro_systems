import React from "react"
import { Link } from "gatsby"
import ReactDOM from "react-dom";
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/Unified-Logo-2-2.png"
import OwlCarousel from 'react-owl-carousel';
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';


const contact_centers = () => (
  <Layout>
    <SEO title="contact centers" />
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
          <h1><span>CONTACT CENTERS</span></h1>
        </div>
      </div>
    </div>
  </div>

  <div className="it-support-services your-customers">
    <div className="container">
      <div className="empty-space-100">&nbsp;</div> 
      <div className="it-services">         
        <div className="row">
          <div className="col-sm-12 col-md-6 services-support-left">
            <div className="pr-image">
              <img src="../../call-center.png" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 services-support-right">
            <div className="pr-content">
              <h3 className="align-left">Put Your Customers First</h3>
              <div className="empty-space-25">&nbsp;</div>
              <div className="content-phr">
                <p>The traditional call center, rows of agents in headsets answering calls, is being overtaken by customers demanding more reactive communication methods.</p>
                <p>Phone calls are no longer just enough, customers want to reach you via email, instant messaging and social media. And simply taking calls isn’t enough to keep customers loyal, you need to proactively reach out to build relationships, upsell, and solve problems before they become deal-breakers.</p>
                <p>Combining all features of call accounting, contact center CRM integration, voice recording, and IVR flows, Unified Microsystems contact centre solutions focus on putting your customer first whilst lowering costs and complexity.</p>
                <p>Both single location on-premise solutions, through to multi-site, distributed and work-from-home setups, our consultants can architect the right call center CRM integration solutions for your business objectives and vertical.</p>
              </div>
            </div>
          </div>
        </div>          
      </div>
      <div className="empty-space-100">&nbsp;</div>
    </div>
  </div>

  <div className="crm-integration">
    <div className="empty-space-100">&nbsp;</div>
    <div className="container">
      <div className="inte-gration">
        <h3 className="aline-center">CRM Integration</h3>
        <div className="empty-space-25">&nbsp;</div>
        <div className="content-phr">
          <p className="aline-center">To stand out from the competition, customer service becomes a key differentiator. By presenting existing and repeat customer information instantly every time the customer calls in, the agent taking the call can be well informed and more helpful. A well-organized call center CRM system thus makes every customer feel more valued when you greet them by name and get to help them faster, saving both agent and customer time in the process:</p>
        </div>
        <div className="empty-space-50">&nbsp;</div>
        <div className="integration-queries">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="ico-txt">
                <div className="service-ico">
                  <i className="fa fa-info fa-2x"></i>
                </div>
                <div className="service-txt">
                  <h5 className="icon_title">Configurable</h5>
                  <p>Supervisor can pick and choose what information is displayed to the agent.</p>
                </div>
              </div>
              <div className="separator-line">&nbsp;</div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="ico-txt">
                <div className="service-ico">
                  <i className="fa fa-database fa-2x"></i>
                </div>
                <div className="service-txt">
                  <h5 className="icon_title">Data Updates</h5>
                  <p>Agent can update the displayed information and save to database.</p>
                </div>
              </div>
              <div className="separator-line">&nbsp;</div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="ico-txt">
                <div className="service-ico">
                  <i className="fa fa-plug fa-2x"></i>
                </div>
                <div className="service-txt">
                  <h5 className="icon_title">Instant Setup</h5>
                  <p>Plug and play built-in integration with Salesforce.com and Microsoft CRM.</p>
                </div>
              </div>
              <div className="separator-line">&nbsp;</div>
            </div>
          </div>

           <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="ico-txt">
                <div className="service-ico">
                  <i className="fa fa-square fa-2x"></i>
                </div>
                <div className="service-txt">
                  <h5 className="icon_title">Open Integration</h5>
                  <p>Compatible with most other CRM via web services and SQL queries.</p>
                </div>
              </div>
              <div className="separator-line">&nbsp;</div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="ico-txt">
                <div className="service-ico">
                  <i className="fa fa-mobile fa-2x"></i>
                </div>
                <div className="service-txt">
                  <h5 className="icon_title">Customer Information</h5>
                  <p>Know who is calling and history, even before you answer.</p>
                </div>
              </div>
              <div className="separator-line">&nbsp;</div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="ico-txt">
                <div className="service-ico">
                  <i className="fa fa-phone fa-2x"></i>
                </div>
                <div className="service-txt">
                  <h5 className="icon_title">Personalised Greeting</h5>
                  <p>Show your customers you value them by personalizing each phone call.</p>
                </div>
              </div>
              <div className="separator-line">&nbsp;</div>
            </div>
          </div>
           <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="ico-txt">
                <div className="service-ico">
                  <i className="fa fa-male fa-2x"></i>
                </div>
                <div className="service-txt">
                  <h5 className="icon_title">Full History</h5>
                  <p>View customer’s history instantly instead of requesting each detail.</p>
                </div>
              </div>
              <div className="separator-line">&nbsp;</div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="ico-txt">
                <div className="service-ico">
                  <i className="fa fa-clipboard fa-2x"></i>
                </div>
                <div className="service-txt">
                  <h5 className="icon_title">Increase Efficiency</h5>
                  <p>Avoid slow manual searches by having information automatically displayed.</p>
                </div>
              </div>
              <div className="separator-line">&nbsp;</div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="ico-txt">
                <div className="service-ico">
                  <i className="fa fa-check fa-2x"></i>
                </div>
                <div className="service-txt">
                  <h5 className="icon_title">Save Time</h5>
                  <p>Save time everywhere, happier customers and more efficient agents.</p>
                </div>
              </div>
              <div className="separator-line">&nbsp;</div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div className="empty-space-100">&nbsp;</div>
  </div>

  <div className="leading-business">
    <div className="empty-space-100">&nbsp;</div>
    <div className="container">
      <div className="business-intelligence">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="status-dashboard">
              <img src="../../call-status-dashboard-1.png" /> 
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="leading-intelligence">
              <h3 className="aline-left">Leading Business Intelligence</h3>
              <div className="empty-space-15">&nbsp;</div>
              <div className="content-phr">
                <p>From dashboards and reports, detailed analytics on call response times, call recording and customer satisfaction – An effective contact center CRM system quickly and easily enables business agility like never before.</p>
                <p>Handle complaints swiftly, generate reporting on department or agent level with drill down capability, monitor response times of agents to ensure optimal efficiency and call handling for peak-call flow during busy times.</p>
                <p>Constantly monitor service level agreements with pro-active alerts for breaches or warning levels exceeded for answer time, handle time or missed opportunities.</p>
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
export default contact_centers