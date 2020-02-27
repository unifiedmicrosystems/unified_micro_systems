import React from "react"
import { Link } from "gatsby"
import ReactDOM from "react-dom";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
 
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/Unified-Logo-2-2.png"
import OwlCarousel from 'react-owl-carousel';
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
const options = {
      responsiveRefreshRate: 200,
      responsive:{
          0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
      }
    };

const careers = () => (
 <Layout>
   <SEO title="careers" />
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
               <h1><span>CAREERS</span></h1>
            </div>
         </div>
      </div>
   </div>
   <div className="take-your-career">
      <div className="empty-space-75">&nbsp;</div>
      <div className="container">
         <div className="your-career">
            <div className="your-career-wrapper">
               <h3>Take your Career to the next level with Unified Microsystems</h3>
               <div className="empty-space-25">&nbsp;</div>
               <h4>Please ask yourself the following questions:</h4>
               <div className="empty-space-25">&nbsp;</div>
               <div className="career-wrapper">
                  <h4>Are you confident meeting new people?</h4>
                  <h4>Do you love technology?</h4>
                  <h4>Are you a fast and active learner?</h4>
                  <h4>Do you take pride in your work?</h4>
               </div>
               <div className="empty-space-25">&nbsp;</div>
               <div className="career-wrapper">
                  <h4>If you answered yes to all of the above, we want to hear from you because as we continue to build our successful team we would like to consider you being part of it.</h4>
               </div>
               <div className="empty-space-25">&nbsp;</div>
               <div className="career-wrapper">
                  <p>We are a team of talented professionals who are serious and passionate about changing the way IT and systems integration is delivered, where we view everyone as a member, and not an employee.</p>
                  <p>No matter the position from junior to senior each position is key, we expect the best from our members and in return look to give our best to them with outstanding opportunities to grow and training benefits – should you feel you will fit in with our team, please feel free to apply below.</p>
               </div>
            </div>
            <div className="empty-space-50">&nbsp;</div>
            <div className="col-md-12 padding-zero careers-accordion">
               <div className="accordion-container">
                  <Accordion>
                     <div className="set">
                        <AccordionItem>
                           <AccordionItemHeading>
                              <AccordionItemButton><span className="qode_icon_font_awesome fa fa-users "></span> <span className="fq-name">Infrastructure Manager (Manila and Dubai)</span> </AccordionItemButton>
                           </AccordionItemHeading>
                           <AccordionItemPanel>
                              <div className="content">
                                 <p>We are looking for an experienced infrastructure manager with a DevOps affinity to join our growing team.</p>
                                 <div className="content-box">
                                    <h4 id="Skills-required">Skills required</h4>
                                    <ul>
                                       <li>Degree qualified in computer science with at least 5 years of experience running sophisticated infrastructure and hand-on approach.</li>
                                       <li>Proven ability to learn, work in self-sufficient manner, problem solve and apply new concepts.</li>
                                       <li>Strong DevOps mindset with configuration as code and scripts (PowerShell and Bash), with extensive use of source control and documentation.</li>
                                       <li>Implementation of Network monitoring systems (Zabbix etc).</li>
                                       <li>Creates scripts with batch script, PowerShell, Ruby and C#.</li>
                                       <li>Enterprise architecture of network switching (VLAN/STP), BGP/OSPF routing (both internal and with external IP transit providers)</li>
                                       <li>Firewall Management&nbsp;(preferably Fortinet) with application control, SSL inspection, Data Leak Prevention, and Intrusion Detection/Prevention</li>
                                       <li>Handles all escalated L3 and infrastructure issues, works with server engineers for delegation of other tasks.</li>
                                       <li>Responsible for infrastructure availability, future planning, security, management of incident response and war room scenarios.</li>
                                       <li>Professional certifications with at least 3 of Microsoft, Mile2 or EC-Council, Fortinet, Linux Enterprise Professional and Cisco required.</li>
                                    </ul>
                                    <h4 id="Benefits">Benefits</h4>
                                    <ul>
                                       <li>Work with the latest technologies and concepts.</li>
                                       <li>Develop interesting solutions.</li>
                                       <li>Options to work from home and telecommute.</li>
                                       <li>Flexible working hours.</li>
                                    </ul>
                                 </div>
                              </div>
                           </AccordionItemPanel>
                        </AccordionItem>
                     </div>
                     <div className="set">
                        <AccordionItem>
                           <AccordionItemHeading>
                              <AccordionItemButton><span className="qode_icon_font_awesome fa fa-users "></span><span className="fq-name">  Server Engineer (Manila and Dubai)</span> </AccordionItemButton>
                           </AccordionItemHeading>
                           <AccordionItemPanel>
                              <div className="content">
                                 <div className="content-box">
                                    <p>We are looking for an experienced server engineer to join our growing team.</p>
                                    <p>Provides second and third line support for server issues, primarily resolving issues themselves as the lead escalation engineer, or as escalating (to vendors as required) within the agreed service level agreement.</p>
                                 </div>
                                 <div className="content-box">
                                    <h4 id="Skills-required">Skills required</h4>
                                    <ul>
                                       <li>Handles tickets with customers, including escalated Linux and Windows server issues.</li>
                                       <li>Responsible for Hyper-V and VMware clusters (including underlying iSCSI SAN storage).</li>
                                       <li>Proven ability to learn, work in self-sufficient manner, problem solve and apply new concepts.</li>
                                       <li>Administration of Active Directory (on-premise), Active Directory (Azure AD) and Ubuntu/CentOS/Windows Servers.</li>
                                       <li>Administration of applications such as MySQL, MariaDB, Microsoft SQL, Nginx, Apache, PHP and IIS.</li>
                                       <li>Creates scripts with batch script and PowerShell.</li>
                                       <li>Proactively maintains and patches servers.</li>
                                       <li>Configures apache, nginx, MySQL, load balancers, clusters and advanced server configurations.</li>
                                       <li>Can perform root cause analysis for slow sites (viewing access logs, cache hit rations etc) and server performance in general.</li>
                                       <li>Manages Veeam backup and repositories.</li>
                                       <li>Configures network switches (including VLANS), routers (including BGP) and VPNs.</li>
                                       <li>Works with Mikrotik, Cisco and Fortinet Firewalls, and with HP and Cisco switches.</li>
                                    </ul>
                                    <h4 id="Benefits">Benefits</h4>
                                    <ul>
                                       <li>Work with the latest technologies and concepts.</li>
                                       <li>Develop interesting solutions.</li>
                                       <li>Options to work from home and telecommute.</li>
                                       <li>Flexible working hours.</li>
                                    </ul>
                                 </div>
                              </div>
                           </AccordionItemPanel>
                        </AccordionItem>
                     </div>
                     <div className="set">
                        <AccordionItem>
                           <AccordionItemHeading>
                              <AccordionItemButton><span className="qode_icon_font_awesome fa fa-users "></span> <span className="fq-name">Remote Desktop Support Engineer (Manila) </span> </AccordionItemButton>
                           </AccordionItemHeading>
                           <AccordionItemPanel>
                              <div className="content">
                                 <div className="content-box">
                                    <p>We are looking for an experienced support desk engineer to join our growing team.</p>
                                    <p>Provides first line support to customers, resolving issues or escalating (to 2<sup>nd</sup> line support) within the agreed service level agreement.</p>
                                 </div>
                                 <div className="content-box">
                                    <h4 id="Skills-required">Skills required</h4>
                                    <ul>
                                       <li>First response for desktop and connectivity issues.</li>
                                       <li>Research and identify solutions to software and hardware issues</li>
                                       <li>Diagnose and troubleshoot technical issues, including account setup and network configuration</li>
                                       <li>Works with servers and telephone systems from time to time.</li>
                                       <li>Resolves issues by use of remote access control software (TeamViewer, Remote Desktop etc)</li>
                                       <li>Refer to internal database or external resources to provide accurate tech solutions</li>
                                       <li>Ensure all issues are accurately logged</li>
                                       <li>Prioritize and manage several open issues at one time</li>
                                       <li>Follow up with clients to ensure their IT systems are fully functional after troubleshooting</li>
                                       <li>Troubleshoots independently aiming for first time resolution every time, knowing when to escalate when required to ensure consistent work velocity.</li>
                                       <li>Provides detailed information on steps taken on all escalations.</li>
                                       <li>Has experience dealing with challenging and high-tempo scenarios from time to time.</li>
                                       <li>Has outstanding communication skills in English in call center environment and is confident on the phone interacting with customers.</li>
                                    </ul>
                                    <h4 id="Benefits">Benefits</h4>
                                    <ul>
                                       <li>Work with the latest technologies and concepts.</li>
                                       <li>Develop interesting solutions.</li>
                                       <li>Flexible working hours.</li>
                                    </ul>
                                 </div>
                              </div>
                           </AccordionItemPanel>
                        </AccordionItem>
                     </div>
                     <div className="set">
                        <AccordionItem>
                           <AccordionItemHeading>
                              <AccordionItemButton><span className="qode_icon_font_awesome fa fa-users "></span><span className="fq-name"> Project Manager (Manila)</span> </AccordionItemButton>
                           </AccordionItemHeading>
                           <AccordionItemPanel>
                              <div className="content">
                                 <div className="content-box">
                                    <p>We are looking for an experienced project manager to join our growing team.</p>
                                 </div>
                                 <div className="content-box">
                                    <h4 id="Skills-required">Skills required</h4>
                                    <ul>
                                       <li>Degree qualified in electronic engineering, electrical engineering or computer science with at least 3 years of experience of project management in MEP, interior fit out or system integration.</li>
                                       <li>Proven ability to learn, work in self-sufficient manner, problem solve and apply new concepts.</li>
                                       <li>Thorough documentation capabilities.</li>
                                       <li>Proven ability to deliver quality work on projects on time and on budget.</li>
                                       <li>Plans projects, manpower, timing, schedules and costs.</li>
                                       <li>Liaises with customers and technical team.</li>
                                       <li>Leads daily and weekly site progress meetings.</li>
                                       <li>Works with MEP contractors and system integrators.</li>
                                       <li>PRINCE2 or PMP certified.</li>
                                       <li>Oversees project managers and foremen.</li>
                                       <li>Driving license required.</li>
                                    </ul>
                                    <h4 id="Benefits">Benefits</h4>
                                    <ul>
                                       <li>Work with the latest technologies and concepts.</li>
                                       <li>Develop strong career experience.</li>
                                       <li>Flexible working hours.</li>
                                    </ul>
                                 </div>
                              </div>
                           </AccordionItemPanel>
                        </AccordionItem>
                     </div>
                     <div className="set">
                        <AccordionItem>
                           <AccordionItemHeading>
                              <AccordionItemButton><span className="qode_icon_font_awesome fa fa-users "></span> <span className="fq-name">Sales Engineer (Manila and Dubai)</span> </AccordionItemButton>
                           </AccordionItemHeading>
                           <AccordionItemPanel>
                              <div className="content">
                                 <div className="content-box">
                                    <p>We are looking for an experienced project manager to join our growing team.</p>
                                 </div>
                                 <div className="content-box">
                                    <h4 id="Skills-required">Skills required</h4>
                                    <ul>
                                       <li>Ability to listen to customer requirements and asking appropriate questions to gather information.</li>
                                       <li>Ability to select correct products and present benefits appropriately.</li>
                                       <li>Maintain and develop relationships with existing customers, distributors and vendors.</li>
                                       <li>Networking through referrals and contacts to generate new business.</li>
                                       <li>Proven history of closed business and ability to meet sales targets.</li>
                                       <li>Driving license required.</li>
                                    </ul>
                                    <h4 id="Benefits">Benefits</h4>
                                    <ul>
                                       <li>Excellent commission package.</li>
                                       <li>Ability to grow with the business.</li>
                                       <li>Car provided.</li>
                                    </ul>
                                 </div>
                              </div>
                           </AccordionItemPanel>
                        </AccordionItem>
                     </div>
                     <div className="set">
                        <AccordionItem>
                           <AccordionItemHeading>
                              <AccordionItemButton><span className="qode_icon_font_awesome fa fa-users "></span><span className="fq-name"> Senior BMS Engineer (Manila) </span> </AccordionItemButton>
                           </AccordionItemHeading>
                           <AccordionItemPanel>
                              <div className="content">
                                 <div className="content-box">
                                    <p>We require a talented Senior BMS engineer to join our growing team with the following capabilities:</p>
                                 </div>
                                 <div className="content-box">
                                    <h4 id="Skills-required">Skills required</h4>
                                    <ul>
                                       <li>Electrical or Electronic and Computer Engineering Degree, with at least 10 years in Building Management and Automation.</li>
                                       <li>Certifications with either Tridium Niagara or Schneider Electric EcoStruxure.</li>
                                       <li>Extensive integration capability with VFD, VAV, valves, pumps, actuators, switches and other field devices and plant.</li>
                                       <li>Knowledge of HVAC systems with the variety of failure modes and subsequent manifestation on baseline performance and readings.</li>
                                       <li>Produces high-level single line, and detailed panel by panel BMS system designs.</li>
                                       <li>Manages a team of BMS engineers for implementation of code and commissioning.</li>
                                       <li>Designs highly reliable integration solutions with mechanical/solid-state relays, opto-isolators, isolated supplies, prevention of earth loops etc.</li>
                                       <li>Works with AutoCAD and assists with take offs, sequence of operation, shop drawings and as-built drawings as required.</li>
                                    </ul>
                                    <h4 id="Benefits">Benefits</h4>
                                    <ul>
                                       <li>Work with the latest technologies and concepts.</li>
                                       <li>Develop strong career experience.</li>
                                       <li>Flexible working hours.</li>
                                    </ul>
                                 </div>
                              </div>
                           </AccordionItemPanel>
                        </AccordionItem>
                     </div>
                     <div className="set">
                        <AccordionItem>
                           <AccordionItemHeading>
                              <AccordionItemButton><span className="qode_icon_font_awesome fa fa-users "></span><span className="fq-name"> Software Engineer (Manila)</span> </AccordionItemButton>
                           </AccordionItemHeading>
                           <AccordionItemPanel>
                              <div className="content">
                                 <div className="content-box">
                                    <p>We are looking for a talented software engineer to develop exciting database systems, line of business applications and website applications. You will get to work with the latest Microsoft technologies with C#, ASP, .NET Core, WebAPI, MVC and other technologies such as communication and front-end SPA frameworks.</p>
                                 </div>
                                 <div className="content-box">
                                    <h4 id="Skills-required">Skills required</h4>
                                    <ul>
                                       <li>A degree in software engineering or computer science is not mandatory, candidates will be judged on software engineering capability.</li>
                                       <li>Proven ability to learn, work in self-sufficient manner, problem solve and apply new concepts.</li>
                                       <li>Implementation of code to specifications using standard design constructs.</li>
                                       <li>Thorough documentation and sprint planning capabilities.</li>
                                       <li>Use of source control with GIT and Visual Studio.</li>
                                       <li>Writes Web Services with security protection via JWT and OAuth 2.0</li>
                                       <li>Some knowledge of Angular and JavaScript (TypeScript preferred but not mandatory)</li>
                                       <li>Strong knowledge of concepts such as object orientated architecture, domain driven design, unit testing, SOLID and dependency injection.</li>
                                       <li>Preferred cross platform development with .NET Core, IoT Devices such as Raspberry Pi running .NET Core and Ubuntu</li>
                                       <li>Messaging and Communication Applications with use of Message Bus, TCP/IP sockets, protocol buffers, gRPC and MQTT.</li>
                                       <li>Although preferred, experience with C# is not mandatory as cross training (i.e. from Java) will be provided to the right candidate with aptitude to learn.</li>
                                    </ul>
                                    <h4 id="Benefits">Benefits</h4>
                                    <ul>
                                       <li>Work with the latest technologies and concepts.</li>
                                       <li>Develop interesting solutions.</li>
                                       <li>Options to work from home and telecommute.</li>
                                       <li>Flexible working hours.</li>
                                    </ul>
                                 </div>
                              </div>
                           </AccordionItemPanel>
                        </AccordionItem>
                     </div>
                  </Accordion>
               </div>
            </div>
         </div>
         <div className="empty-space-50">&nbsp;</div>
         <div className="application-form">
            <h3>Application Form</h3>
            <div className="application-form-contact">
               <form name="application_form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                  <input type="hidden" name="form-name" value="application_form" />                
                  <input type="hidden" name="bot-field" />
                  <p>
                     <label>Name*<br />
                     <span className="your-name"><input type="text" name="your-name" size="40" className="" /></span> 
                     </label>
                  </p>
                  <p>
                     <label>Email*<br />
                     <span className="your-email"><input type="email" name="your-email" size="40" className="" /></span> 
                     </label>
                  </p>
                  <p>
                     <label>Number*<br />
                     <span className="Number"><input type="tel" name="Number" size="40" className="" /></span> 
                     </label>
                  </p>
                  <p>
                     <label>City<br />
                     <span className="City"><input type="text" name="City" size="40" className="" /></span> </label>
                  </p>
                  <p>
                     <label>
                        Country<br />
                        <span className="country comn-select">
                           <select name="country" className="form-select" aria-invalid="false">
                              <option value="-----">-----</option>
                              <option value="Afghanistan">Afghanistan</option>
                              <option value="Albania">Albania</option>
                              <option value="Algeria">Algeria</option>
                              <option value="American Samoa">American Samoa</option>
                              <option value="Andorra">Andorra</option>
                              <option value="Angola">Angola</option>
                              <option value="Anguilla">Anguilla</option>
                              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                              <option value="Argentina">Argentina</option>
                              <option value="Armenia">Armenia</option>
                              <option value="Armenia">Armenia</option>
                              <option value="Aruba">Aruba</option>
                              <option value="Australia">Australia</option>
                              <option value="Austria">Austria</option>
                              <option value="Azerbaijan">Azerbaijan</option>
                              <option value="Azerbaijan">Azerbaijan</option>
                              <option value="Bahamas">Bahamas</option>
                              <option value="Bahrain">Bahrain</option>
                              <option value="Bangladesh">Bangladesh</option>
                              <option value="Barbados">Barbados</option>
                              <option value="Belarus">Belarus</option>
                              <option value="Belgium">Belgium</option>
                              <option value="Belize">Belize</option>
                              <option value="Benin">Benin</option>
                              <option value="Bermuda">Bermuda</option>
                              <option value="Bhutan">Bhutan</option>
                              <option value="Bolivia">Bolivia</option>
                              <option value="Bonaire">Bonaire</option>
                              <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                              <option value="Botswana">Botswana</option>
                              <option value="Bouvet Island (Bouvetoya)">Bouvet Island (Bouvetoya)</option>
                              <option value="Brazil">Brazil</option>
                           </select>
                        </span>
                     </label>
                  </p>
                  <p>
                     <label>Portfolio URL<br />
                     <span className="portfolio-url"><input type="text" name="portfolio-url" size="40" className="" /></span> </label>
                  </p>
                  <p>
                     <label>Job role interested in<br />
                     <span className="job-interested"><input type="text" name="job-interested" size="40" className="" /></span> </label>
                  </p>
                  <p>
                     <label>
                        Notice period<br />
                        <span className="notice-period comn-select">
                           <select name="notice-period" className="wpcf7-form-control wpcf7-select" aria-invalid=  "false">
                              <option value="Immediate">Immediate</option>
                              <option value="2 weeks">2 weeks</option>
                              <option value="1 month">1 month</option>
                              <option value="3 months">3 months</option>
                           </select>
                        </span>
                     </label>
                  </p>
                  <p className="cv-doc">
                     <label> CV (.pdf, .doc, .docx)<br />
                     <span className="CV"><input type="file" name="CV" size="40" className="" accept=".pdf,.doc,.docx" aria-required="true" aria-invalid="false" /></span> </label>
                  </p>
                  <p><input type="submit" value="Send" className="qbutton" /><span className="ajax-loader"></span>
                  </p>
               </form>
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
            <OwlCarousel className="owl-carousel owl-theme test" items= {3} rewind= {true} autoplay={true} slideBy= {1} dots= {true} options={options}>
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
                        <div className="testimonial_text_inner" >
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
                        <div className="testimonial_text_inner" >
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
export default careers
