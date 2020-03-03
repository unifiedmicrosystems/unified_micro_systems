// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ youremail: '', yourname: '' }}
      validate={values => {
        const errors = {};
        if (!values.yourname) {
          errors.yourname = 'Required';
        } else if (!values.youremail) {
          errors.youremail = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.youremail)
        )if (!values.youremail) {
          errors.youremail = 'Required';
        } 
        {
          errors.youremail = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
            <form name="contact-form" action="thank-you" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact-form" />
                <input type="hidden" name="bot-field" />
                <p><label> Your Name (required)<br />
                <span className="wpcf7-form-control-wrap your-name"><Field type="text" name="yourname" size="40" className="" aria-required="true" aria-invalid="false" />                
                <ErrorMessage name="yourname" component="div" /></span> </label></p>
                
                <p><label> Your Email (required)<br />
                  <span className="wpcf7-form-control-wrap your-email"><Field type="email" name="youremail" size="40" className="email" aria-required="true" aria-invalid="false" /><ErrorMessage name="youremail" component="div" /></span> </label>
                </p>
                <p><label> Your Message<br />
                  <span className="wpcf7-form-control-wrap your-message"><Field type="textarea" name="yourmessage" cols="40" rows="10" className="textarea" aria-invalid="false"></Field></span> </label>
                </p>
                <p><button type="submit" className="qbutton" disabled={isSubmitting}>
            Submit
          </button></p>  

            </form>
             )}
    </Formik>
  </div>
);

export default Basic;