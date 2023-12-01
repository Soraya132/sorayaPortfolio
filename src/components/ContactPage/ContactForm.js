"use client"
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const formSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().required("Required"),
  })

const ContactForm = () => {
    const [serverState, setServerState] = useState();
    const handleServerResponse = (ok, msg) => {
      setServerState({ ok, msg });
      setTimeout(() => {
        setServerState(null);
      }, 3000);
    };
    const handleOnSubmit = (values, actions) => {
      axios({
        method: "POST",
        url: "https://formspree.io/f/mvojjdee",
        data: values,
      })
        .then((response) => {
          actions.setSubmitting(false);
          actions.resetForm();
          handleServerResponse(true,"Thanks for your message! We'll be in touch soon.");
        })
        .catch((error) => {
          actions.setSubmitting(false);
          handleServerResponse(false,"There was an error");
        });
    };
  
  return (
    <Formik
            initialValues={{ name: "", email: "", message: "" }}
            onSubmit={handleOnSubmit}
            validationSchema={formSchema}
          >
            {({ isSubmitting }) => (
              <Form id="fs-frm" noValidate className="grid  gap-5 ">
                <div className="grid lg:grid-cols-2 gap-5 ">
                  <div>
                    <label htmlFor="name"></label>
                    <Field
                      id="name"
                      type="text"
                      name="name"
                      placeholder="name"
                      className="get__in_touch "
                    />
                    <ErrorMessage
                      name="name"
                      className="errorMsg"
                      component="p"
                    />
                  </div>
                  <div>
                    <label htmlFor="email"></label>
                    <Field
                      id="email"
                      type="email"
                      name="email"
                      placeholder="email"
                      className="get__in_touch "
                    />
                    <ErrorMessage
                      name="email"
                      className="errorMsg"
                      component="p"
                    />
                  </div>
                </div>

                <label htmlFor="message"></label>
                <Field
                  id="message"
                  name="message"
                  component="textarea"
                  placeholder="message"
                  className="get__in_touch resize-none lg:h-32"
                />
                <ErrorMessage
                  name="message"
                  className="errorMsg"
                  component="p"
                />
                <button
                  className="button text-white w-[40%]"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
                {serverState && (
                  <p className={!serverState.ok ? "errorMsg" : ""}>
                    {serverState.msg}
                  </p>
                )}
              </Form>
            )}
          </Formik>
  )
}

export default ContactForm