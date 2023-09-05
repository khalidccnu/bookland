import baseAPI from "@/redux/baseAPI";

interface gbcResultType {
  total: number;
}

interface gbResultType {
  _id: string;
  title: string;
  subtitle: string;
  isbn13: string;
  price: number;
  discountPrice: number;
  image: {
    id: string;
    path: string;
  };
  featured: boolean;
  discount: boolean;
  discountPercentage: number;
  rating: number;
}

interface gbQueryArg {
  page: number;
  limit: number;
}

const booksAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getBooksCount: build.query<gbcResultType, void>({
      query: () => `/books?count=true`,
    }),
    getBooks: build.query<gbResultType[], gbQueryArg>({
      query: ({ page, limit }) => `/books?page=${page}&limit=${limit}`,
    }),
  }),
});

export const { useGetBooksCountQuery, useGetBooksQuery } = booksAPI;
