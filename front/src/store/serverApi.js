import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serverApi = createApi({
  baseQuery: fetchBaseQuery({
    // eslint-disable-next-line no-undef
    baseUrl: process.env.REACT_APP_BASE_URL,
    // prepareHeaders: (headers) => {
    //   if (localStorage.getItem("token")) {
    //     headers.set("Authorization", "Bearer " + localStorage.getItem("token"));
    //   }
    //   return headers;
    // },
  }),
  reducerPath: "serverApi",
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
