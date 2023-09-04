import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) =>
  axios.get(url).then((response) => response.data);

const useFeaturedBooks = () => {
  const { isLoading, data: featuredBooks = [] } = useSWR(
    "/apis/books/featured",
    fetcher,
  );

  return {
    isLoading,
    featuredBooks,
  };
};

export default useFeaturedBooks;
