
import { useParams} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import './page.css';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function Page() {
  let params = useParams();

  return (
    <div>
      <h1>{params.pageId}</h1>

      <Formik
        initialValues={{ firstName: '', lastName: '', email: '' }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 10 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 10 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
        })}
        onSubmit={(values, { setSubmitting, setFieldValue, resetForm }) => {
          console.log("ff", values, { setSubmitting })
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            resetForm('')
            setSubmitting(false);

          }, 400);

        }}
      >
        <div className='formik'>


          <Form >
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" />
            <br></br>

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" />
            <ErrorMessage name="email"></ErrorMessage>
            <br></br>

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" />
            <br></br>
            <button type="submit">Submit</button>
          </Form>
        </div>
      </Formik>


    </div>
  );
};

export default Page
