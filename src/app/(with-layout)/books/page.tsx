"use client";

import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Rings } from "react-loader-spinner";
import {
  useGetBooksCountQuery,
  useGetBooksQuery,
} from "@/redux/books/booksAPI";
import PageTitle from "@/components/PageTitle";
import BookCard from "@/components/books/BookCard";

interface Book {
  _id: string;
  title: string;
  price: number;
  discountPrice: number;
  image: {
    path: string;
  };
  discount: boolean;
  discountPercentage: number;
  rating: number;
}

const Books = () => {
  const { data: totalBooks } = useGetBooksCountQuery();
  const [booksPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const { isLoading, data: books } = useGetBooksQuery({
    page: currentPage,
    limit: booksPerPage,
  });

  const handlePageClick = ({ selected: page }: { selected: number }) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (totalBooks) {
      setPageCount(Math.ceil(totalBooks.total / booksPerPage));
    }
  }, [booksPerPage, totalBooks]);

  return (
    <>
      <PageTitle title="Books" />
      <section className={`py-16`}>
        <div className="container">
          {!isLoading ? (
            <>
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8`}
              >
                {books?.map((book: Book) => (
                  <BookCard key={book._id} book={book} />
                ))}
              </div>
              <div className={`flex justify-center mt-12`}>
                <ReactPaginate
                  containerClassName="join"
                  pageLinkClassName="join-item btn btn-sm"
                  activeLinkClassName="btn-active text-yellow-indian"
                  disabledLinkClassName="btn-disabled"
                  previousLinkClassName="join-item btn btn-sm"
                  nextLinkClassName="join-item btn btn-sm"
                  breakLinkClassName="join-item btn btn-sm"
                  previousLabel="<"
                  nextLabel=">"
                  breakLabel="..."
                  pageCount={pageCount}
                  pageRangeDisplayed={2}
                  marginPagesDisplayed={2}
                  onPageChange={handlePageClick}
                  renderOnZeroPageCount={null}
                />
              </div>
            </>
          ) : (
            <Rings
              width="50"
              height="50"
              color="#eba552"
              wrapperClass="justify-center"
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Books;
