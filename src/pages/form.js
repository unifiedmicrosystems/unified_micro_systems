// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ youremail: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.youremail) {
          errors.youremail = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.youremail)
        ) {
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
        <Form name="contact-form1" action="thank-you" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact-form1" />
            <input type="hidden" name="bot-field" />
        <p><label> Your Name (required)<br />
                <span className="wpcf7-form-control-wrap your-name">
          <Field type="email" name="youremail" />

          <ErrorMessage name="youremail" component="div" /></span></label></p>
          <p><label> Your password (required)<br />
                <span className="wpcf7-form-control-wrap your-name">
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" /></span></label></p>
          <p><label> Your Message<br />
            <span className="wpcf7-form-control-wrap your-message"><Field type="textarea" name="yourmessage" cols="40" rows="10" className="textarea" aria-invalid="false"></Field><ErrorMessage name="youremail" component="div" /></span> </label>
          </p>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;