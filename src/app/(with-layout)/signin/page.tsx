"use client";

import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
import { FaGoogle } from "react-icons/fa6";

interface FormikValuesTypes {
  email: string;
  password: string;
}

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const SignIn = () => {
  const formik = useFormik<FormikValuesTypes>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {},
  });

  return (
    <section className="py-16">
      <div className="container">
        <div className="card max-w-sm mx-auto bg-white rounded">
          <div className="card-body">
            <div>
              <h3 className="font-bold text-lg">Sign In</h3>
              <p className="text-gray-500">Access to your account.</p>
            </div>
            <form
              className="form-control gap-y-4 mt-5"
              onSubmit={formik.handleSubmit}
            >
              <div className="flex flex-col gap-1">
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
              <div className="flex flex-col gap-1">
                <input
                  type="password"
                  placeholder="Password"
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
              <button
                type="submit"
                className="btn btn-sm w-full bg-blue-cetacean hover:bg-transparent text-white hover:text-blue-cetacean !border-blue-cetacean rounded normal-case"
              >
                Sign In
              </button>
              <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-2">
                <span>New to BookLand?</span>
                <Link
                  href={`/signup`}
                  className="text-yellow-indian hover:text-yellow-indian/70 w-fit cursor-pointer transition-colors duration-500"
                >
                  Create New Account
                </Link>
              </div>
              <div className="divider">or</div>
              <div className="btn btn-sm w-full bg-transparent hover:bg-blue-cetacean text-blue-cetacean hover:text-white !border-blue-cetacean rounded">
                <FaGoogle className="text-2xl" />
                <span>Continue with Google</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
