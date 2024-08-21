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
      query: (searchParams) =>
        `${CONTACTS_URL}${searchParams ? searchParams : ""}`,
      providesTags: ["contacts"],
    }),
    fetchContact: builder.query({
      query: (id) => `${CONTACTS_URL}/${id}`,
    }),
    createContact: builder.mutation({
      query: (contact) => ({
        url: CONTACTS_URL,
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["contacts"],
    }),
    updateContact: builder.mutation({
      query: (contact) => ({
        url: `${CONTACTS_URL}/${contact.id}`,
        method: "PATCH",
        body: contact,
      }),
      invalidatesTags: ["contacts"],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `${CONTACTS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contacts"],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
  useFetchContactQuery,
} = contactApi;

export default contactApi;
