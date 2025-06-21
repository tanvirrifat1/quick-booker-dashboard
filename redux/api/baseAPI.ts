import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),

  tagTypes: [
    "User",
    "Session",
    "Story",
    "Blog",
    "MsPost",
    "Donation",
    "Profile",
    "Privacy",
    "AboutUs",
    "Settings",
    "Court",
  ],
  endpoints: () => ({}),
});

export default baseApi;
