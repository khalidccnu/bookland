"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { FaUpload } from "react-icons/fa";
import imgAvatar from "@/assets/avatar.png";

interface FormikValuesTypes {
  name: string;
  email: string;
  password: string;
  userImg: File | null;
}

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "Name should be of minimum 3 characters length")
    .required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  userImg: yup
    .mixed()
    .required("Photo is required")
    .test("photoSize", "Photo size is too large (>2MB)", (value) => {
      if (value instanceof File) {
        return value.size <= 2000000;
      }

      return true;
    }),
});

const SignUp = () => {
  const [userImgPrev, setUserImgPrev] = useState<null | string | ArrayBuffer>(
    null,
  );

  const formik = useFormik<FormikValuesTypes>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      userImg: null,
    },
    validationSchema,
    onSubmit: (values) => {},
  });

  useEffect(() => {
    if (formik.values.userImg) {
      const reader = new FileReader();

      reader.onload = () => setUserImgPrev(reader.result);
      reader.readAsDataURL(formik.values.userImg);
    }
  }, [formik.values.userImg]);

  return (
    <section className="py-16">
      <div className="container">
        <div className="card max-w-sm mx-auto bg-white rounded">
          <div className="card-body">
            <div className={`flex justify-between items-center`}>
              <div>
                <h3 className="font-bold text-lg">Sign Up</h3>
                <p className="text-gray-500">It's quick and easy.</p>
              </div>
              <Link
                href={`/signin`}
                className={`text-2xl hover:text-yellow-indian transition-colors duration-500`}
              >
                <BsFillArrowLeftSquareFill />
              </Link>
            </div>
            <div className={`mt-5 mb-4`}>
              <figure className={`w-24 h-24 mx-auto rounded overflow-hidden`}>
                {typeof userImgPrev === "string" ? (
                  <img src={userImgPrev} alt="" className={`w-full h-full`} />
                ) : (
                  <img src={imgAvatar.src} alt="" className={`w-full h-full`} />
                )}
              </figure>
            </div>
            <form
              onSubmit={formik.handleSubmit}
              className="form-control grid grid-cols-1 gap-y-4"
            >
              <div className="flex flex-col gap-0.5">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-sm input-bordered border-blue-cetacean rounded w-full focus:outline-0 text-blue-cetacean"
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
                  className="input input-sm input-bordered border-blue-cetacean rounded w-full focus:outline-0 text-blue-cetacean"
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
                  type="password"
                  placeholder="New password"
                  name="password"
                  className="input input-sm input-bordered border-blue-cetacean rounded w-full focus:outline-0 text-blue-cetacean"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && Boolean(formik.errors.password) ? (
                  <small className="text-red-600 ml-0.5">
                    {formik.touched.password && formik.errors.password}
                  </small>
                ) : null}
              </div>
              <div>
                <label className="relative btn btn-sm w-full bg-transparent hover:bg-blue-cetacean text-blue-cetacean hover:text-white !border-blue-cetacean rounded normal-case">
                  {formik.values.userImg ? (
                    formik.values.userImg.name.substring(
                      0,
                      formik.values.userImg.name.lastIndexOf("."),
                    )
                  ) : (
                    <>
                      <span>Choose profile photo</span>
                      <FaUpload />
                    </>
                  )}
                  <input
                    type="file"
                    name="userImg"
                    className="absolute left-0 top-0 w-0 h-0 overflow-hidden"
                    accept="image/*"
                    onChange={(e) =>
                      formik.setFieldValue(
                        "userImg",
                        e.currentTarget.files?.[0] || null,
                      )
                    }
                    onBlur={formik.handleBlur}
                  />
                </label>
                {formik.touched.userImg && Boolean(formik.errors.userImg) ? (
                  <small className="text-red-600 ml-0.5">
                    {formik.touched.userImg && formik.errors.userImg}
                  </small>
                ) : null}
              </div>
              <button
                type="submit"
                className="btn btn-sm w-full bg-blue-cetacean hover:bg-transparent text-white hover:text-blue-cetacean !border-blue-cetacean rounded normal-case"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
