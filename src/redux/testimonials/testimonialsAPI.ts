import baseAPI from "@/redux/baseAPI";

interface gtResultType {
  _id: string;
  name: string;
  profession: string;
  comment: string;
  image: string;
}

const testimonialsAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getTestimonials: build.query<gtResultType[], void>({
      query: () => `/testimonials`,
    }),
  }),
});

export const { useGetTestimonialsQuery } = testimonialsAPI;
