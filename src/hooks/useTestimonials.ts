import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) =>
  axios.get(url).then((response) => response.data);

const useTestimonials = () => {
  const { isLoading, data: testimonials = [] } = useSWR(
    "/apis/testimonials",
    fetcher,
  );

  return {
    isLoading,
    testimonials,
  };
};

export default useTestimonials;
