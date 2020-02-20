import React from "react"
import { Link } from "gatsby"
import ReactDOM from "react-dom";
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/Unified-Logo-2-2.png"
import OwlCarousel from 'react-owl-carousel';
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';


const unified_communications = () => (
  <Layout>
    <SEO title="unified communications" />
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
          <h1><span>UNIFIED COMMUNICATIONS</span></h1>
        </div>
      </div>
    </div>
  </div>

  <div className="it-support-services communicate-without-limits">
    <div className="container">
      <div className="empty-space-100">&nbsp;</div> 
      <div className="it-services">         
        <div className="row">
          <div className="col-sm-12 col-md-6 services-support-left">
            <div className="pr-image">
              <img src="../../Unified-Communications.png" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 services-support-right">
            <div className="pr-content">
              <h3 className="align-left">Communicate without Limits</h3>
              <div className="empty-space-25">&nbsp;</div>
              <div className="content-phr">
                <p>We offer a range of Unified Communication solutions from fully fledged contact centres, offices or hotels with telephony requirements, through to collaboration tools for meeting rooms. Regardless of the requirement, Unified Communication systems has a vast plethora of solutions to meet your requirements and budget.</p>
                <ul className="check-service">
                  <li> <i className="fa fa-check"></i> <span>Communicate across branch offices</span></li>
                  <li> <i className="fa fa-check"></i> <span>Reduce cabling costs by 50% by using phone switch ports and VLANs</span></li>
                  <li> <i className="fa fa-check"></i> <span>Increase employee efficiency with seamless communication and collaboration</span></li>
                  <li> <i className="fa fa-check"></i> <span>Meeting room systems for teleconference (video and audio)</span></li>
                  <li> <i className="fa fa-check"></i> <span>Collaborative meeting room software</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>          
      </div>
      <div className="empty-space-100">&nbsp;</div>
    </div>
  </div>

  <div className="unified-uommunications">
    <div className="empty-space-100">&nbsp;</div>
    <div className="container">
      <div className="setup-services">         
        <h3 className="aline-center">Our Unified Communications Partners</h3>
        <div className="empty-space-25">&nbsp;</div>
        <h4 className="aline-center">Proudly partnering with the market leaders in unified communications</h4>
        <div className="empty-space-50">&nbsp;</div>
        <div className="market-leaders">
          <div className="row">
            <div className="col-sm-4 col-md-4 iocn-with-text">
              <img src="../../microsoft.png" />
            </div>
            <div className="col-sm-4 col-md-4 iocn-with-text">
              <img src="../../cisco.png" />  
            </div>

            <div className="col-sm-4 col-md-4 iocn-with-text">
              <img src="../../Asterisk-1.png" />    
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4 col-md-4 iocn-with-text">
              <img src="../../avaya.png" />
            </div>
            <div className="col-sm-4 col-md-4 iocn-with-text">
              <img src="../../Polycom-1.png" />  
            </div>
            <div className="col-sm-4 col-md-4 iocn-with-text">
              <img src="../../digium.png" />    
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="empty-space-100">&nbsp;</div>
  </div>

  <div className="telephony-services">
    <div className="container">
      <div className="collaboration-st">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="empty-space-100">&nbsp;</div>
            <div className="sv-ico-text">
              <span className="fa-3x"><i className="font-awesome-icon fa fa-phone qode_icon_element"></i></span>
              <div className="empty-space-25">&nbsp;</div>
              <h3>IP Telephony</h3>
              <div className="empty-space-25">&nbsp;</div>
              <div className="content-phr">
                <p>Working with multiple vendors, we supply cost effective and future-proof telephony solutions across all verticals, from offices, clinics, hospitals, retail, hotels, through to high-end residential.</p>
                <p>Centrally powered, using IP communications yields further benefits with reduction in structured cabling costs by up to 50%, ability to use a range of trunk line options (analog, BRI, PRI and SIP including site to site H323 and SIP links), and&nbsp; for retrofit installations capability to mix and match IP, digital and analog phones.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="empty-space-100">&nbsp;</div>
            <div className="sv-ico-text">
              <span className="fa-3x"><i className="font-awesome-icon fa fa-play-circle qode_icon_element"></i></span>
              <div className="empty-space-25">&nbsp;</div>
              <h3>Video Collaboration</h3>
              <div className="empty-space-25">&nbsp;</div>
              <div className="content-phr">
                <p>Often people jump straight to request face to face meetings due to their bad experience in the past of setting up a conference all that didn’t work, failed to make the required impact, or was hard to use.</p>
                <p>By using video and document sharing, travelling to meetings can be reduced as the same results and more can be achieved in the fraction of the time and cost with a simple collaborative meeting, using the latest technologies from Microsoft and Polycom.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6">
            <div className="empty-space-100">&nbsp;</div>
            <div className="sv-ico-text">
              <span className="fa-3x"><i className="font-awesome-icon fa fa-microphone qode_icon_element"></i></span>
              <div className="empty-space-25">&nbsp;</div>
              <h3>Voice Recording</h3>
              <div className="empty-space-25">&nbsp;</div>
              <div className="content-phr">
                <p>Listening to call audio allows companies to gain deep insight and actionable intelligence in a way that reporting alone cannot. Allow users to quickly search and listen to call recordings, assign custom categories, view extensive call metric data and download recordings as MP3 files.</p>
                <p>Benefits include ability to categorise recordings for the production of&nbsp;training material, compliance with regulatory requirements and company standards, and validation of any claims of misconduct or disputes.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6">
            <div className="empty-space-100">&nbsp;</div>
            <div className="sv-ico-text">
              <span className="fa-3x"><i className="font-awesome-icon fa fa-line-chart qode_icon_element"></i></span>
              <div className="empty-space-25">&nbsp;</div>
              <h3>Call Accounting</h3>
              <div className="empty-space-25">&nbsp;</div>
              <div className="content-phr">
                <p>Call accounting enables customers to increase productivity, gain new business insights and lower costs. From fraud detection, increasing sales productivity to dynamic staff allocation during peak call flow, reporting will have a measurable impact to the bottom line.</p>
                <p>Extensive automated graphical and spreadsheet reporting allows details on all outbound, inbound and inter-office calls, reconciliation for bills from carriers, allocation of phone expenses, optimisation calls, monitoring of sales and customer service productivity.</p>
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
export default unified_communications