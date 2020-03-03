import React from "react"
import { Link } from "gatsby"
import ReactDOM from "react-dom";
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/Unified-Logo-2-2.png"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import OwlCarousel from 'react-owl-carousel';
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
const software_development = () => (
  <Layout>
    <SEO title="software development" /> 
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
          <h1><span>SOFTWARE DEVELOPMENT</span></h1>
        </div>
      </div>
    </div>
  </div>

  <div className="it-support-services software-development">
    <div className="container">
      <div className="empty-space-100">&nbsp;</div> 
      <div className="it-services">         
        <div className="row">
          <div className="col-sm-12 col-md-6 services-support-left">
            <div className="pr-image">
              <img src="../../software-development.png" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 services-support-right">
            <div className="pr-content">
              <h3 className="align-left">Expert Advice</h3>
              <div className="empty-space-25">&nbsp;</div>
              <div className="content-phr">
                <p className="aligne-left">IT software development for internal business processes is at the core of our strategy and success. Recognizing the needs that we have come across in other organizations, we offer the following areas of expertise on a consultancy basis:</p>
                <ul className="gl-service">
                  <li>Distributed systems</li>
                  <li>Domain Driven Design</li>
                  <li>Event-sourced Systems</li>
                  <li>Continuous Integration</li>
                  <li>Continuous Deployment</li>
                  <li>Source Control</li>
                  <li>Design for Scale and Reliability</li>
                  <li>Troubleshooting of slow running software in production</li>
                  <li>Optimization of web and database servers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>          
      </div>
      <div className="empty-space-100">&nbsp;</div>
    </div>
  </div>

  <div className="expertise-with-leading">
    <div className="empty-space-100">&nbsp;</div>
    <div className="container">
      <div className="leading-development">
        <h3 className="aline-center">Expertise with Leading Development Technologies</h3>
        <div className="empty-space-25">&nbsp;</div>
        <div className="leading-tech">
          <div className="row">
            <div className="col-sm-6 col-md-3 tech-logo">
              <img src="../../Node.png" />
            </div>
            <div className="col-sm-6 col-md-3 tech-logo">
              <img src="../../Docker.png" />
            </div>
            <div className="col-sm-6 col-md-3 tech-logo">
              <img src="../../ubuntu.png" />
            </div>
            <div className="col-sm-6 col-md-3 tech-logo">
              <img src="../../visualstudio.png" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-3 tech-logo">
              <img src="../../Angular.png" />
            </div>
            <div className="col-sm-6 col-md-3 tech-logo">
              <img src="../../eventstore.png" />
            </div>
            <div className="col-sm-6 col-md-3 tech-logo">
              <img src="../../NGINX.png" />
            </div>
            <div className="col-sm-6 col-md-3 tech-logo">
              <img src="../../Visual-Studio-Team-Services.png" />
            </div>
          </div>
          <div className="row">
            <div className="link-pre">
              <div className="empty-space-50">&nbsp;</div>
              <a itemprop="url" href="/open_source_software" target="_self" className="qbutton">View Our Open Source Libaries</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="empty-space-100">&nbsp;</div>
  </div> 

  <div className="business-partner-enquiry consultancy-enquiry"> 
    <div className="empty-space-100">&nbsp;</div>
    <div className="container">
      <div className="partner-enquiry">
      <h3>Consultancy Enquiry</h3>
        <div className="row">            
            <div className="col-sm-12 col-md-6">
              <div className="partner-content">                
                <div className="empty-space-25">&nbsp;</div>
                <div className="partner-wrapper">
                  <p>We work with your development team to optimise your business software development goals and release pipelines. From source control and continuous integration, through to container and docker deployment, including advanced methodologies such as serverless application design.</p>
                  <p>Build applications quicker, and release faster than ever before both in test and production environments. Deploy to server infrastructure with cloud services or private cloud environments, across multiple platforms from Windows to Linux.</p> 
                </div>
              </div>
            </div> 
            <div className="col-sm-12 col-md-6">
              <div className="empty-space-25">&nbsp;</div>
              <div className="partner-content">
              <Formik
      initialValues={{ youremail: '', yourname: '', yourmessage: '', yourlastname: '', yournumber:'' }}
      validate={values => {
        const errors = {};
        if (!values.youremail) {
          errors.youremail = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.youremail)
        ) {
          errors.youremail = 'Invalid email address';
        }
        if (!values.yourname) {
          errors.yourname = 'Required';
        } 
        if (!values.yourmessage)
        {
          errors.yourmessage = 'Required';
        }
        if (!values.yourlastname)
        {
          errors.yourlastname = 'Required';
        }
        if (!values.yournumber)
        {
          errors.yournumber = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, actions) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "software_development_contact", ...values })
        })
        .then(() => {
          alert('Success');
          actions.resetForm()
        })
        .catch(() => {
          alert('Error');
        })
        .finally(() => actions.setSubmitting(false))
      }}
    >
      {({ isSubmitting }) => (
            <Form name="software_development_contact" action="thank-you" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="software_development_contact" />
            <input type="hidden" name="bot-field" />
        
                <p><label> Your Name *<br />
                  <span className="wpcf7-form-control-wrap your-name"><Field type="text" name="yourname" size="40" className="" aria-required="true" aria-invalid="false" />                
                  <ErrorMessage name="yourname" component="div" /></span> </label>
                </p>
                <p><label>Last Name *<br />
                  <span className="wpcf7-form-control-wrap your-email"><Field type="text" name="yourlastname" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false"/>
                  <ErrorMessage name="yourlastname" component="div" /></span> </label>
                </p>
                <p><label> Your Email *<br />
                  <span className="wpcf7-form-control-wrap your-name">
                  <Field type="email" name="youremail" />
                  <ErrorMessage name="youremail" component="div" /></span></label>
                </p>
                <p><label>Number *<br />
                  <span className="wpcf7-form-control-wrap your-email"><Field type="Number" name="yournumber" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false"/>
                  <ErrorMessage name="yournumber" component="div" /></span> </label>
                </p>
                <p><label> Your Message *<br />
                  <span className="wpcf7-form-control-wrap your-message"><Field type="textarea" name="yourmessage" cols="40" rows="10" className="textarea" aria-invalid="false"></Field><ErrorMessage name="yourmessage" component="div" /></span> </label>
                </p>
          <button type="submit" disabled={isSubmitting} class="qbutton">
            Submit
          </button>
        </Form>
      )}
    </Formik>
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
export default software_development
