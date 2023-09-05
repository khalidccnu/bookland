import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseAPI = createApi({
  reducerPath: "baseAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "/apis" }),
  endpoints: () => ({}),
});

export default baseAPI;
