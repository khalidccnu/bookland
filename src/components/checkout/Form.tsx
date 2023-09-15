"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { StripeCardElement } from "@stripe/stripe-js";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  getAllDivision,
  getAllDistrict,
  getAllUpazila,
  getAllUnion,
  // @ts-ignore
} from "bd-divisions-to-unions";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearCart } from "@/redux/cart/cartSlice";
import { getCart } from "@/redux/cart/cartThunks";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  name: yup
    .string()
    .min(3, "Name should be of minimum 3 characters length")
    .required("Name is required"),
  division: yup.string().required("Division is required"),
  district: yup.string().required("District is required"),
  upazilla: yup.string().required("Upazilla is required"),
  union: yup.string().required("Union is required"),
  postal: yup
    .string()
    .matches(/^\d{4}$/, "Postal should be a 4-digit number")
    .required("Postal is required"),
});

const Form = () => {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const { cart, cartCalculation } = useAppSelector((store) => store.cartSlice);
  const dispatch = useAppDispatch();
  const [isOrderProcess, setOrderProcess] = useState(false);
  const [districts, setDistricts] = useState([]);
  const [upazillas, setUpazillas] = useState([]);
  const [unions, setUnions] = useState([]);
  const [stripeError, setStripeError] = useState<undefined | null | string>(
    null,
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      street: "",
      union: "",
      upazilla: "",
      district: "",
      division: "",
      postal: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setStripeError(null);
      setOrderProcess(true);

      axios
        .post(`/apis/stripe/create-payment-intent`, {
          paidBalance: cartCalculation.grandTotal,
        })
        .then(async (clientSecret) => {
          const card = elements?.getElement(CardElement) as StripeCardElement;

          const { error: cpmError, paymentMethod } =
            (await stripe?.createPaymentMethod({
              type: "card",
              card,
            })) ?? {};

          if (cpmError) {
            setStripeError(cpmError.message);
            setOrderProcess(false);
            return false;
          }

          const { error: ccpError, paymentIntent } =
            (await stripe?.confirmCardPayment(clientSecret.data.secret, {
              payment_method: {
                card: card,
                billing_details: {
                  name: values.name,
                  email: values.email,
                },
              },
            })) ?? {};

          if (ccpError) {
            setStripeError(ccpError.message);
            setOrderProcess(false);
            return false;
          }

          if (paymentIntent?.status === "succeeded") {
            router.push("/complete-order");
            dispatch(clearCart());
          }
        });
    },
  });

  useEffect(() => {
    if (cart) {
      dispatch(getCart({ cart }));
    }
  }, [cart]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="form-control grid grid-cols-1 gap-y-4"
    >
      <div className={`space-y-3`}>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h3 className="font-semibold">Contact Information</h3>
          <div className="space-x-2">
            <span className="text-gray-500">Already have an account?</span>
            <Link href="/signin" className="text-yellow-indian">
              Sign In
            </Link>
          </div>
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
      </div>
      <div className={`grid grid-cols-2 gap-3`}>
        <h3 className="col-span-full font-semibold">Shipping Address</h3>
        <div className="col-span-full flex flex-col gap-0.5">
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
          <select
            name="division"
            className="select select-sm select-bordered border-blue-cetacean rounded w-full focus:outline-0 text-blue-cetacean"
            value={formik.values.division}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="" disabled>
              Division
            </option>
            {getAllDivision("en").map(
              (division: { title: string; value: number }) => (
                <option
                  key={division.value}
                  value={division.title}
                  onClick={() =>
                    setDistricts(getAllDistrict("en")[division.value])
                  }
                >
                  {division.title}
                </option>
              ),
            )}
          </select>
          {formik.touched.division && Boolean(formik.errors.division) ? (
            <small className="text-red-600 ml-0.5">
              {formik.touched.division && formik.errors.division}
            </small>
          ) : null}
        </div>
        <div className="flex flex-col gap-0.5">
          <select
            name="district"
            className="select select-sm select-bordered border-blue-cetacean rounded w-full focus:outline-0 text-blue-cetacean"
            value={formik.values.district}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="" disabled>
              District
            </option>
            {districts.map((district: { title: string; value: number }) => (
              <option
                key={district.value}
                value={district.title}
                onClick={() =>
                  setUpazillas(getAllUpazila("en")[district.value])
                }
              >
                {district.title}
              </option>
            ))}
          </select>
          {formik.touched.district && Boolean(formik.errors.district) ? (
            <small className="text-red-600 ml-0.5">
              {formik.touched.district && formik.errors.district}
            </small>
          ) : null}
        </div>
        <div className="flex flex-col gap-0.5">
          <select
            name="upazilla"
            className="select select-sm select-bordered border-blue-cetacean rounded w-full focus:outline-0 text-blue-cetacean"
            value={formik.values.upazilla}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="" disabled>
              Upazilla
            </option>
            {upazillas.map((upazilla: { title: string; value: number }) => (
              <option
                key={upazilla.value}
                value={upazilla.title}
                onClick={() => setUnions(getAllUnion("en")[upazilla.value])}
              >
                {upazilla.title}
              </option>
            ))}
          </select>
          {formik.touched.upazilla && Boolean(formik.errors.upazilla) ? (
            <small className="text-red-600 ml-0.5">
              {formik.touched.upazilla && formik.errors.upazilla}
            </small>
          ) : null}
        </div>
        <div className="flex flex-col gap-0.5">
          <select
            name="union"
            className="select select-sm select-bordered border-blue-cetacean rounded w-full focus:outline-0 text-blue-cetacean"
            value={formik.values.union}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="" disabled>
              Union
            </option>
            {unions.map((union: { title: string; value: number }) => (
              <option key={union.value} value={union.title}>
                {union.title}
              </option>
            ))}
          </select>
          {formik.touched.union && Boolean(formik.errors.union) ? (
            <small className="text-red-600 ml-0.5">
              {formik.touched.union && formik.errors.union}
            </small>
          ) : null}
        </div>
        <div className="flex flex-col gap-0.5">
          <input
            type="text"
            placeholder="Street address"
            name="street"
            className="input input-sm input-bordered border-blue-cetacean rounded w-full focus:outline-0 text-blue-cetacean"
            value={formik.values.street}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.street && Boolean(formik.errors.street) ? (
            <small className="text-red-600 ml-0.5">
              {formik.touched.street && formik.errors.street}
            </small>
          ) : null}
        </div>
        <div className="flex flex-col gap-0.5">
          <input
            type="text"
            placeholder="Postal code"
            name="postal"
            className="input input-sm input-bordered border-blue-cetacean rounded w-full focus:outline-0 text-blue-cetacean"
            value={formik.values.postal}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.postal && Boolean(formik.errors.postal) ? (
            <small className="text-red-600 ml-0.5">
              {formik.touched.postal && formik.errors.postal}
            </small>
          ) : null}
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="font-semibold">Payment</h3>
        <div className={`flex flex-col gap-0.5`}>
          <CardElement />
          {stripeError ? (
            <small className="text-red-600 ml-0.5">{stripeError}</small>
          ) : null}
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-sm bg-blue-cetacean hover:bg-transparent text-white hover:text-blue-cetacean !border-blue-cetacean rounded normal-case"
        disabled={!stripe || !elements}
      >
        <span>Complete Order</span>
        {isOrderProcess ? (
          <span
            className="inline-block h-4 w-4 border-2 border-current border-r-transparent rounded-full animate-spin"
            role="status"
          ></span>
        ) : null}
      </button>
    </form>
  );
};

export default Form;
