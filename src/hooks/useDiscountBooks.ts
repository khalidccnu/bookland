import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) =>
  axios.get(url).then((response) => response.data);

const useDiscountBooks = () => {
  const { isLoading, data: discountBooks = [] } = useSWR(
    "/apis/books/discount",
    fetcher,
  );

  return {
    isLoading,
    discountBooks,
  };
};

export default useDiscountBooks;
