"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useFormik } from "formik";

const Form = () => {
  const [isLoading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: async (values, formikHelpers) => {
      const { name, email, subject, message } = values;

      if (!name || !email || !subject || !message) {
        toast.error("All fields are required!");
        return false;
      }

      formikHelpers.resetForm();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="form-control grid grid-cols-1 gap-3"
    >
      <input
        type="text"
        placeholder="Name"
        name="name"
        className="input input-sm input-bordered rounded w-full focus:outline-0"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        className="input input-sm input-bordered rounded w-full focus:outline-0"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <input
        type="text"
        placeholder="Subject"
        name="subject"
        className="input input-sm input-bordered rounded w-full focus:outline-0"
        value={formik.values.subject}
        onChange={formik.handleChange}
      />
      <textarea
        rows={5}
        placeholder="Write your message"
        name="message"
        className="textarea textarea-sm textarea-bordered rounded w-full leading-relaxed focus:outline-0 resize-none"
        value={formik.values.message}
        onChange={formik.handleChange}
      />
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
