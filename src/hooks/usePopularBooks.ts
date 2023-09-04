import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) =>
  axios.get(url).then((response) => response.data);

const usePopularBooks = () => {
  const { isLoading, data: popularBooks = [] } = useSWR(
    "/apis/books/popular",
    fetcher,
  );

  return {
    isLoading,
    popularBooks,
  };
};

export default usePopularBooks;
