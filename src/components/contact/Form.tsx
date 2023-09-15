"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "Name should be of minimum 3 characters length")
    .required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  subject: yup
    .string()
    .min(3, "Subject should be of minimum 3 characters length")
    .required("Subject is required"),
  message: yup
    .string()
    .min(15, "Message should be of minimum 15 characters length")
    .required("Message is required"),
});

const Form = () => {
  const [isLoading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, formikHelpers) => {
      formikHelpers.resetForm();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="form-control grid grid-cols-1 gap-3"
    >
      <div className="flex flex-col gap-0.5">
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="input input-sm input-bordered rounded w-full focus:outline-0"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && Boolean(formik.errors.name) ? (
          <small className="text-red-600 ml-0.5">
            {formik.touched.name && formik.errors.name}
          </small>
        ) : null}
      </div>
      <div className="flex flex-col gap-0.5">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="input input-sm input-bordered rounded w-full focus:outline-0"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && Boolean(formik.errors.email) ? (
          <small className="text-red-600 ml-0.5">
            {formik.touched.email && formik.errors.email}
          </small>
        ) : null}
      </div>
      <div className="flex flex-col gap-0.5">
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          className="input input-sm input-bordered rounded w-full focus:outline-0"
          value={formik.values.subject}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.subject && Boolean(formik.errors.subject) ? (
          <small className="text-red-600 ml-0.5">
            {formik.touched.subject && formik.errors.subject}
          </small>
        ) : null}
      </div>
      <div className="flex flex-col gap-0.5">
        <textarea
          rows={5}
          placeholder="Write your message"
          name="message"
          className="textarea textarea-sm textarea-bordered rounded w-full leading-relaxed focus:outline-0 resize-none"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.message && Boolean(formik.errors.message) ? (
          <small className="text-red-600 ml-0.5">
            {formik.touched.message && formik.errors.message}
          </small>
        ) : null}
      </div>
      <button type="submit" className="btn-blue-cetacean">
        <span>Send</span>
        {isLoading ? (
          <span
            className="inline-block h-4 w-4 border-2 border-white border-r-transparent rounded-full animate-spin"
            role="status"
          ></span>
        ) : null}
      </button>
    </form>
  );
};

export default Form;
