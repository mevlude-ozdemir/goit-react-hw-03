import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required('Required'),
        number: Yup.string().required('Required'),
      })}
      onSubmit={(values, { resetForm }) => {
        onAdd(values);
        resetForm();
      }}
    >
      <Form style={{ marginBottom: 20 }}>
        <div>
          <Field name="name" placeholder="Name" />
          <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
        </div>
        <div>
          <Field name="number" placeholder="Phone Number" />
          <ErrorMessage name="number" component="div" style={{ color: 'red' }} />
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
