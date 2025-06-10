import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from './ContactForm.module.css';

const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, "Minimum 3 karakter olmalı")
          .max(50, "Maksimum 50 karakter olabilir")
          .required("Bu alan zorunludur"),
        number: Yup.string()
          .min(3, "Minimum 3 karakter olmalı")
          .max(50, "Maksimum 50 karakter olabilir")
          .required("Bu alan zorunludur"),
      })}
      onSubmit={(values, { resetForm }) => {
        onAdd(values);
        resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.fieldWrapper}>
          <Field name="name" placeholder="Name" className={css.input}/>
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>
        <div className={css.fieldWrapper}>
          <Field name="number" placeholder="Phone Number" className={css.input}/>
          <ErrorMessage
            name="number"
            component="div"
            style={{ color: "red" }}
          className={css.error}/>
        </div>
        <button type="submit" className={css.button}>Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
