import React from "react"
import { Link } from "gatsby"
import ReactDOM from "react-dom";
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/Unified-Logo-2-2.png"
import OwlCarousel from 'react-owl-carousel';
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

const disaster_recovery_business_continuity = () => (
  <Layout>
    <SEO title="disaster recovery business continuity" /> 
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
          <h1><span>DISASTER RECOVERY & BUSINESS CONTINUITY</span></h1>
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
              <img src="../../Disaster-Recovery-Business-Continuity-1.png" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 services-support-right">
            <div className="pr-content">
              <h3 className="align-left">Ensure Success by Planning to Fail</h3>
              <div className="empty-space-25">&nbsp;</div>
              <div className="content-phr">
                <p className="aligne-left">Murphy’s Law states that ‘Whatever can go wrong, will go wrong’, and when it eventually does, there is a good chance it will be at the worst possible time.</p>

                <p className="aligne-left">Loss of data or unplanned downtime can cripple any business – the risks and losses are multifaceted, from revenue, productivity, customer goodwill, reputation, assets (such as accounts receivable or intellectual property) through to contractual liabilities, in extreme cases the cost of loss can be so great the business is forced to close.</p>

                <p className="aligne-left">Unified Microsystems provides tailor-made IT Disaster recovery plans and Business Continuity Solutions that protect your data and insulate you from longer downtime that could otherwise have catastrophic impacts on revenue, liability and reputation.</p>
                  
              </div>
            </div>
          </div>
        </div>          
      </div>
      <div className="empty-space-100">&nbsp;</div>
    </div>
  </div>

   <div className="cost-of-downtime">
    <div className="container">
      <div className="empty-space-100">&nbsp;</div> 
      <div className="downtime-cost">
        <h3 className="aline-center">Cost of Downtime</h3>
        <p className="aline-center">Cost of downtime can be calculated below (all figures in AED).</p>
      </div>
      <div className="empty-space-25">&nbsp;</div> 
      <div className="down-form">
        <div className="row">
          <div className="col-sm-12 col-md-5">  
            <div className="cl-form">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <label> Annual Revenue *<br />
                  <input className="form-control" data-val="true" data-bind="largeNumber: revenue" id="Revenue" name="Revenue" type="text" /> /</label>
                </div>

                <div className="col-sm-12 col-md-6">
                  <label> Hours of Downtime *<br />
                  <input className="form-control" data-val="true" data-bind="largeNumber: downtime" id="Downtime" name="Email" type="text" /> </label>
                </div>

                <div className="col-sm-12 col-md-6">
                  <label> Number of Employees *<br />
                  <input className="form-control" id="Employees" name="Employees" data-bind="largeNumber: employees" type="text" /> </label>
                </div>

                <div className="col-sm-12 col-md-6">
                  <label> Avg. Employee Salary *<br />
                  <input className="form-control" data-val="true" data-bind="largeNumber: averageMonthlySalary" id="AvgSalary" name="AvgSalary" type="text" /> </label>
                </div>

                <div className="col-sm-12 col-md-6">
                  <label> Cost of Downtime<br />
                  <input className="form-control" data-val="true" data-bind="largeNumber: cost" id="Cost" name="AvgSalary" type="text" disabled="disabled" style={{cursor:'default', backgroundcolor: 'white'}} /> </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-1 col-md-1">  
            &nbsp;
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="downtime-content">
              <p><em>Assumes 75% of employees and 33% of revenue is affected when downtime occurs. Staff costs assumed to be an average of 12,000dhs per month plus overheads calculated as salary plus 33% (for gratuity, holidays, rent etc).</em></p>
              <div className="empty-space-25">&nbsp;</div>
              <p>Please note that the above table is used to illustrate workers being unable to work and lost manpower. It also assumes that your data is recoverable, and no data loss has occurred after backup restoration. If data loss occurs the figures will be magnitudes higher – the costs to recreate the data or liabilities due to loss could mean that some companies may not even survive.</p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
      <div className="empty-space-100">&nbsp;</div> 
    </div>
  </div>

  <div className="disaster-section">
    <div className="section-inner">
      <div className="empty-space-100">&nbsp;</div> 
      <div className="container">
        <div className="business-section">
          <div className="row">
            <div className="col-md-6">
              <div className="disaster-business">
                <span data-type="normal" className="q_font_awsome_icon fa-4x">
                  <i className="qode_icon_font_awesome fa fa-ambulance qode_icon_element"></i>
                </span>
                <h3>Disaster Recovery</h3>
                <div className="content-disaster">
                  <p>We seamlessly replicate your on-premise server(s) to our secure data centre storage vault over a military-grade encrypted secure link every 5 minutes, ensuring we meet your data sovereignty requirements.</p>
                  <p>Unlike pure cloud backup providers, we can physically bring your data to your doorstep in case of an emergency anywhere within your country (UAE and Philippines).</p>
                  <p>With some additional networking prerequisites, we can also run your systems remotely as fail-over on our cloud platform.</p>
                  <p>We provide recovery point (how far back in time data snapshots go) and recovery time (how fast a selected recovery point can be rendered fully operational) objectives according to your business needs.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="disaster-business">
                <span data-type="normal" className="q_font_awsome_icon fa-4x">
                  <i className="qode_icon_font_awesome fa fa-briefcase qode_icon_element"></i>
                </span>
                <h3>Business Continuity</h3> 
                <div className="content-disaster">
                  <p>Due to their nature, disaster recovery solutions inherently take time to restore previous versions. To eliminate interruption entirely, we also offer It Business Continuity plans with high availability at the application layer.</p>
                  <p>Business Continuity solutions are achieved by creating continuous copies of data at the application layer across a number of live running systems, thus providing high availability in number (as opposed to single server) scale-out.</p>
                  <p>Our solutions continuously replicate file and database level data from your on-premise server(s) to your BCP site running at our data centre (located in United Arab Emirates, Philippines or Microsoft Azure USA, Europe or Asia, depending on your business data sovereignty requirements).</p>
                </div>
              </div>
            </div>
            <div className="empty-space-75">&nbsp;</div> 
          </div>          
          <div className="separator-line">&nbsp;</div>
          <div className="empty-space-75">&nbsp;</div> 
          <div className="continuity-plan">
            <h3 className="aline-left">Business Continuity Plan IT Components</h3>
            <div className="empty-space-25">&nbsp;</div>
            <h4 className="aline-left">Every aspect is designed for seamless ease of use and high availability.</h4>
            <div className="empty-space-25">&nbsp;</div>
            <div className="content-disaster">
              <p className="aline-left">In addition to BCP use, these replicas form an integral part of your day to day IT infrastructure minimising operational risk of outages. For instance, if a head office domain controller, file or database server fails, then the equivalent remote server can pick up requests without the end user noticing.</p>
              <p className="aline-left">This seamless high-availability happens automatically and is orchestrated by the servers knowing who is online and closest to who, replicating data continuously, distributing and load balancing traffic automatically when servers go offline and come back online.</p>
            </div>
            <div className="empty-space-50">&nbsp;</div>
            <div className="aspect-design">
              <div className="row">
                <div className="col-sm-12 col-md-2 aspect-design-list">
                  <div className="sm-heading">
                    <p><strong>IPSEC Tunnel</strong></p>
                  </div>
                  <div className="separator-line">&nbsp;</div>
                  <div className="section-wrap">
                    <p>A secure fully encrypted site to site VPN over which all traffic runs. Trust is established with static IP addresses, certificates and shared keys that are only known to the firewalls.</p>
                  </div>
                </div>

                <div className="col-sm-12 col-md-2 aspect-design-list">
                  <div className="sm-heading">
                    <p><strong>Next-Gen Firewall</strong></p>
                  </div>
                  <div className="separator-line">&nbsp;</div>
                  <div className="section-wrap">
                    <p>Deep level packet inspection is in place to protect all ingress and egress traffic. In addition, OSPF runs to allow failover of local subnets to remote datacentre (for disaster recover failover).</p>
                  </div>
                </div>

                <div className="col-sm-12 col-md-2 aspect-design-list">
                  <div className="sm-heading">
                    <p><strong>SSL VPN</strong></p>
                  </div>
                  <div className="separator-line">&nbsp;</div>
                  <div className="section-wrap">
                    <p>Users can connect remotely via SSL VPN, secured via password and multi-factor authentication (token or app on mobile phone). Only once connected on the VPN will they have access to the servers.</p>
                  </div>
                </div>

                <div className="col-sm-12 col-md-2 aspect-design-list">
                  <div className="sm-heading">
                    <p><strong>Active Directory</strong></p>
                  </div>
                  <div className="separator-line">&nbsp;</div>
                  <div className="section-wrap">
                    <p>DC running from the datacentre provide a second copy of critical AD infrastructure data. The domain controller located at the BCP site can also serve requests from the head office (and vice versa).</p>
                  </div>
                </div>

                <div className="col-sm-12 col-md-2 aspect-design-list">
                  <div className="sm-heading">
                    <p><strong>Data Storage</strong></p>
                  </div>
                  <div className="separator-line">&nbsp;</div>
                  <div className="section-wrap">
                    <p>Data stored on your local file/database server(s) is replicated to the remote datacentre and vice versa. SQL Replication and Distributed File System with Replication (DFS/R) gives highly availability distributed across multiple servers.</p>
                  </div>
                </div>

                <div className="col-sm-12 col-md-2 aspect-design-list">
                  <div className="sm-heading">
                    <p><strong>Terminal Services</strong></p>
                  </div>
                  <div className="separator-line">&nbsp;</div>
                  <div className="section-wrap">
                    <p>Users can log in remotely from any computer (once connected securely via VPN with multi-factor authentication) and access all files and applications just as if they were sat in front of their workstation in the office.</p>
                  </div>
                </div>

              </div>
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
export default disaster_recovery_business_continuity