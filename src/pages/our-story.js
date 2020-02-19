import React from "react"
import { Link } from "gatsby"
import ReactDOM from "react-dom";
import Layout from "../components/layout"
import SEO from "../components/seo"
import improvement from "../images/improvement-1.png"
import experience from "../images/experience-1-1.png"
import Unified from "../images/Unified-1.png"
import results from "../images/results-1-1.png"
import circlelogo from "../images/circle-logo-1.png"
import OnTimeBrandPromise from "../images/On-Time-Brand-Promise-300x83.png"
import microsoft from "../images/microsoft.png"
import Fortinet from "../images/Fortinet.png"
import avaya from "../images/avaya.png"
import cisco from "../images/cisco.png"
import OwlCarousel from 'react-owl-carousel';
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

const ThirdPage = () => (
	<Layout>
    <SEO title="Page two" />
    
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
                <input type="text" name="s" className="search_field" autoComplete="off" />
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
          <h1><span>OUR STORY</span></h1>
        </div>
      </div>
    </div>
  </div>
  <div className="we-are"> 
     <div className="empty-space-100">&nbsp;</div>
    <div className="container">
      <div className="unified">
        <h3 className="aline-center">We are Unified Microsystems</h3>
        <div className="empty-space-15">&nbsp;</div> 
        <div className="unified-wrapper">
          <h4 className="aline-center">Our team, approach, integration and technology are Unified in every respect.</h4>
        </div>
        <div className="work-flow">
          <span className="main-line"></span>
          <div className="qode-workflow-item">
            <span className="line"></span>
            <div className="qode-workflow-item-inner ">
              <div className="qode-workflow-image right">
                <img width="193" height="120" src={improvement} className="attachment-full size-full" alt="" />        
              </div>
              <div className="qode-workflow-text">
                <span className="circle"></span>
                <h3>Continuous Improvement</h3>
                <h6 className="qode-workflow-subtitle">Learning from the past for the future</h6>
                <p className="text">Embedded within our DNA is the philosophy of continuous improvement, to improve ourselves everyday one step at a time.</p>
              </div>
            </div>
          </div>
          <div className="qode-workflow-item">
            <span className="line"></span>
            <div className="qode-workflow-item-inner reverse">
              <div className="qode-workflow-image left">
                  <img width="193" height="120" src={experience} className="attachment-full size-full" alt="" />        
              </div>
              <div className="qode-workflow-text">
                <span className="circle"></span>
                <h3>Customer Experience</h3>
                <h6 className="qode-workflow-subtitle">Formed in 2008 with a team of 100+ years of experience</h6>
                <p className="text">Our vastly experienced and talented team are passionate about delivering excellence since 2008.</p>
              </div>
            </div>
          </div>
          <div className="qode-workflow-item">
            <span className="line"></span>
            <div className="qode-workflow-item-inner">
              <div className="qode-workflow-image right">
                <img width="193" height="120" src={Unified} className="attachment-full size-full" alt="" />        
              </div>
              <div className="qode-workflow-text">
                <span className="circle"></span>
                <h3>Peace of Mind</h3>
                <h6 className="qode-workflow-subtitle">Through technology, expertise and service</h6>
                <p className="text">We enable customers to increase efficiency, reduce stress and deliver a measurable positive impact on the bottom line.</p>
              </div>
            </div>
          </div>
          <div className="qode-workflow-item">
            <span className="line"></span>
            <div className="qode-workflow-item-inner reverse">
              <div className="qode-workflow-image left">
                  <img width="193" height="120" src={results} className="attachment-full size-full" alt="" />        
              </div>
              <div className="qode-workflow-text">
                <span className="circle"></span>
                <h3>Teamwork</h3>
                <h6 className="qode-workflow-subtitle">Enhanced with processes and systems</h6>
                <p className="text">We form a single cohesive team, working together to ensure the delivery of quality and repeatable results.</p>
              </div>
            </div>
          </div>
          <div className="qode-workflow-item">
            <span className="line"></span>
            <div className="qode-workflow-item-inner">
              <div className="qode-workflow-image right">
                <img width="193" height="120" src={circlelogo} className="attachment-full size-full" alt="" />        
              </div>
              <div className="qode-workflow-text">
                <span className="circle"></span>
                <h3>Unified Integration</h3>
                <h6 className="qode-workflow-subtitle">Seamlessly Connected</h6>
                <p className="text">Our core belief of integration is in our staff, process, technology and branding. In everything we do, we are Unified.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
     <div className="empty-space-100">&nbsp;</div>
  </div>

   <div className="our-difference-rest">
    <div className="empty-space-75">&nbsp;</div>
    <div className="container">
      <h3 className="aline-center">Our Difference from the Rest</h3>
      <div className="empty-space-50">&nbsp;</div>
      <div className="delivery-management unified-approach">
        <div className="delivery-service"> 
          <div className="empty-space-25">&nbsp;</div>
          <ul className="delivery-circles-holder four_columns with_line">
            <li className="delivery-circle-outer">
              <span className="delivery-circle-inner">
                <span className="delivery-circle-inner2">
                  <i className="fa fa-sitemap fa-3x" style={{color: '#be1522'}}></i>
                </span>
              </span>
              <div className="q_circle_text_holder">
                <h5 className="q_circle_title">01. Fresh Outlook</h5>
                <p className="q_circle_text">Since 2008 we have challenged the conventional approach of management, consultancy and service delivery. As a result, we strong believe provide best in className, client-centric solutions, using reliable quality products, great service and honest pricing.</p>
              </div>
            </li>

            <li className="delivery-circle-outer">
              <span className="delivery-circle-inner">
                <span className="delivery-circle-inner2">
                  <i className="fa fa-laptop fa-3x" style={{color: '#be1522'}}></i>
                </span>
              </span>
              <div className="q_circle_text_holder">
                <h5 className="q_circle_title">02. Trust</h5>
                <p className="q_circle_text">We know first-hand the power of IT systems, and the importance to keep them working reliably. We give our customers peace of mind as trusted IT partner for support, and enable transformation through our design and delivery of projects.</p>
              </div>
            </li>

            <li className="delivery-circle-outer">
              <span className="delivery-circle-inner">
                <span className="delivery-circle-inner2">
                  <i className="fa fa-users fa-3x" style={{color: '#be1522'}}></i>
                </span>
              </span>
              <div className="q_circle_text_holder">
                <h5 className="q_circle_title">03. Transformation</h5>
                <p className="q_circle_text">We enable organisations to benefit from the technologies and opportunities of the connected world. By increasing competitiveness, lowering operational costs, reducing risks and increasing revenue, we deliver measurable results to the bottom line.</p>
              </div>
            </li>

            <li className="delivery-circle-outer">
              <span className="delivery-circle-inner">
                <span className="delivery-circle-inner2" >
                  <i className="fa fa-globe fa-3x" style={{color: '#be1522'}}></i>
                </span>
              </span>
              <div className="q_circle_text_holder">
                <h5 className="q_circle_title">04. Global Reach</h5>
                <p className="q_circle_text">Combining strong business insight with technical edge, we provide innovative solutions for all types of businesses. Working in the UK, UAE, Philippines, and remotely in the cloud, we have an international capability with local approach and understanding.</p>
              </div>
            </li>

            <li className="delivery-circle-outer">
              <span className="delivery-circle-inner">
                <span className="delivery-circle-inner2">
                  <i className="fa fa-circle-o-notch fa-3x" style={{color: '#be1522'}}></i>
                </span>
              </span>
              <div className="q_circle_text_holder">
                <h5 className="q_circle_title">05. Expertise</h5>
                <p className="q_circle_text">Our expertise covers the entire IT life-cycle. In alignment with business strategy and infrastructure, we segment your technological needs into individual components that form the core of an integrated, seamless road map with expert support at every step.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="empty-space-100">&nbsp;</div>
        <div className="we-are-on">
          <h3 className="aline-center">We are On Time, First Time, Every Time</h3> 
          <div className="empty-space-25">&nbsp;</div>
          <h4 className="aline-center">Best of breed technologies alongside our IT governance model delivers solutions of exceptional quality and value for money, aligned to your business strategy.</h4>
          <div className="empty-space-50">&nbsp;</div>
          <div className="tim-st-image">
            <img src={OnTimeBrandPromise} />
          </div>          
        </div>
      </div>
    </div>
    <div className="empty-space-75">&nbsp;</div>
  </div> 


  <div className="enabling-capability">
    <div className="empty-space-75">&nbsp;</div>
    <div className="container">
      <div className="capability-through">
        <h3 className="aline-center">Enabling Capability Through Knowledge</h3>
        <div className="empty-space-25">&nbsp;</div>
        <h4 className="aline-center">Over 100 years of combined engineering experience backed with training and certifications.</h4>
        <div className="empty-space-15">&nbsp;</div>
        <div className="through-knowledge">
          <ul>
            <li><img src={microsoft} /></li>
            <li><img src={Fortinet} /></li>
            <li><img src={avaya} /></li>
            <li><img src={cisco} /></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div className="where-we-work">
    <div className="empty-space-75">&nbsp;</div>
    <div className="container">
      <div className="work-through">
        <h3 className="aline-center">Where we Work</h3>
        <div className="empty-space-25">&nbsp;</div>
        <h4 className="aline-center">Tried and tested quality solutions for a range of industries.</h4>
        <div className="empty-space-75">&nbsp;</div>
        <div className="work-section">
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="title-with-content">
                <div className="title-ico">
                    <i className="qode_icon_font_awesome fa fa-building qode_iwt_icon_element fa-2x"></i>
                </div>
                <div className="ico-content">
                    <h5 className="icon_title">High-End Residential</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="title-with-content">
                <div className="title-ico">
                    <i className="qode_icon_font_awesome fa fa-briefcase qode_iwt_icon_element fa-2x"></i>
                </div>
                <div className="ico-content">
                    <h5 className="icon_title">Commercial Office Fit Out</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="title-with-content">
                <div className="title-ico">
                    <i className="qode_icon_font_awesome fa fa-home qode_iwt_icon_element fa-2x"></i>
                </div>
                <div className="ico-content">
                    <h5 className="icon_title">Hospitality</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="title-with-content">
                <div className="title-ico">
                    <i className="qode_icon_font_awesome fa fa-graduation-cap qode_iwt_icon_element fa-2x"></i>
                </div>
                <div className="ico-content">
                    <h5 className="icon_title">Education</h5>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row">
          <div className="empty-space-50">&nbsp;</div>
            <div className="col-sm-6 col-md-3">
              <div className="title-with-content">
                <div className="title-ico">
                    <i className="qode_icon_font_awesome fa fa-ambulance qode_iwt_icon_element fa-2x"></i>
                </div>
                <div className="ico-content">
                    <h5 className="icon_title">Healthcare</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="title-with-content">
                <div className="title-ico">
                    <i className="qode_icon_font_awesome fa fa-bar-chart qode_iwt_icon_element fa-2x"></i>
                </div>
                <div className="ico-content">
                    <h5 className="icon_title">Legal</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="title-with-content">
                <div className="title-ico">
                    <i className="qode_icon_font_awesome fa fa-cc-visa qode_iwt_icon_element fa-2x"></i>
                </div>
                <div className="ico-content">
                    <h5 className="icon_title">Financial</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="title-with-content">
                <div className="title-ico">
                    <i className="qode_icon_font_awesome fa fa-shopping-bag qode_iwt_icon_element fa-2x"></i>
                </div>
                <div className="ico-content">
                    <h5 className="icon_title">Retail</h5>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
     <div className="empty-space-100">&nbsp;</div>
  </div>


  <div className="delivery-management unified-approach">
    <div className="empty-space-75">&nbsp;</div>
    <div className="container">
      <div className="delivery-service"> 
          <h3 className="aline-center">The Unified Approach</h3>
          <div className="empty-space-40">&nbsp;</div>
          <ul className="delivery-circles-holder four_columns with_line">
            <li className="delivery-circle-outer">
              <span className="delivery-circle-inner">
                <span className="delivery-circle-inner2">
                  <i className="fa fa-area-chart fa-3x" style={{color: '#be1522'}}></i>
                </span>
              </span>
              <div className="q_circle_text_holder">
                <h5 className="q_circle_title">01. Requirements Analysis</h5>
                <p className="q_circle_text">Requirements capture and alignment with business strategy, mapping business needs through to technological implementation options.</p>
              </div>
            </li>

            <li className="delivery-circle-outer">
              <span className="delivery-circle-inner">
                <span className="delivery-circle-inner2">
                  <i className="fa fa-bar-chart fa-3x" style={{color: '#be1522'}}></i>
                </span>
              </span>
              <div className="q_circle_text_holder">
                <h5 className="q_circle_title">02. Planning and Development</h5>
                <p className="q_circle_text">Ensure all angles are accounted for. Plan and script changes in advance, using simulated environments where possible.</p>
              </div>
            </li>

            <li className="delivery-circle-outer">
              <span className="delivery-circle-inner">
                <span className="delivery-circle-inner2">
                  <i className="fa fa-black-tie fa-3x" style={{color: '#be1522'}}></i>
                </span>
              </span>
              <div className="q_circle_text_holder">
                <h5 className="q_circle_title">03. Execution and Management</h5>
                <p className="q_circle_text">Execute scripted playbook, constant liaison between engineers and project managers with continuous item level tracking.</p>
              </div>
            </li>

            <li className="delivery-circle-outer">
              <span className="delivery-circle-inner">
                <span className="delivery-circle-inner2">
                  <i className="fa fa-users fa-3x" style={{color: '#be1522'}}></i>
                </span>
              </span>
              <div className="q_circle_text_holder">
                <h5 className="q_circle_title">04. Project Go-Live Support</h5>
                <p className="q_circle_text">Delivery of amazing after service with warranty, extended warranty and comprehensive reactive and preventative maintenance support options.</p>
              </div>
            </li>

            <li className="delivery-circle-outer">
              <span className="delivery-circle-inner">
                <span className="delivery-circle-inner2">
                  <i className="fa fa-comments fa-3x" style={{color: '#be1522'}}></i>
                </span>
              </span>
              <div className="q_circle_text_holder">
                <h5 className="q_circle_title">05. Continuous Feedback</h5>
                <p className="q_circle_text">Feedback loop at every step to ensure processes continually evolve and improve from lessons learnt. Review, learn, implement change.</p>
              </div>
            </li>
          </ul>
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
                <p className="testimonial_author" style={{fontweight: '500', color: '#be1522',fontsize: '13px'}}>- Khurram Shehzad (Software Developer, Property Monitor)</p>
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
export default ThirdPage