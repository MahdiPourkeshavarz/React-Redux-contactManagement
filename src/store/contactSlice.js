/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, CONTACTS_URL } from "../constants/url";

const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["contacts"],
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => CONTACTS_URL,
      providesTags: ["contacts"],
    }),
  }),
});

export const { useFetchContactsQuery } = contactApi;

export default contactApi;
