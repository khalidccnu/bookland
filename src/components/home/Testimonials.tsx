"use client";

import { IKImage } from "imagekitio-react";
import { BsQuote } from "react-icons/bs";
import useTestimonials from "@/hooks/useTestimonials";

interface testimonial {
  _id: string;
  name: string;
  profession: string;
  comment: string;
  image: string;
}

const Testimonials = () => {
  const { isLoading, testimonials } = useTestimonials();

  return (
    <section className={`py-16`}>
      <div className="container">
        <div className={`mb-10`}>
          <h2 className={`font-bold text-2xl`}>Testimonials</h2>
          <p className={`max-w-sm text-gray-500`}>
            We shared our past customers review that describes how our books or
            service helped them.
          </p>
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8`}>
          {testimonials.map((testimonial: testimonial) => {
            return (
              <div
                key={testimonial._id}
                className="flex flex-col bg-white text-center rounded overflow-hidden"
              >
                <div className="relative px-8 py-12 text-gray-500">
                  <span
                    className={`absolute top-1 left-1 text-5xl text-gray-200`}
                  >
                    <BsQuote />
                  </span>
                  <p className={`relative`}>{testimonial.comment}</p>
                </div>
                <div className="relative px-8 pt-12 pb-6 mt-auto bg-blue-cetacean text-white">
                  <figure className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-yellow-indian rounded-full overflow-hidden">
                    <IKImage
                      path={testimonial.image}
                      className={`w-full h-full`}
                    />
                  </figure>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <h5 className={`text-yellow-indian`}>
                    {testimonial.profession}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
