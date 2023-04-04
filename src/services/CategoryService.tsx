import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICategory, INewCategory } from "../models/ICategory";

export const categoryAPI = createApi({
  reducerPath: "categoryAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://ecommerce.icedev.uz/" }),
  tagTypes: ["Category"],
  endpoints: (build) => ({
    fetchAllCategories: build.query<ICategory[], number>({
      query: () => ({
        url: "/categories",
      }),
      providesTags: result => ["Category"]
    }),
    createCategory: build.mutation<INewCategory, INewCategory>({
      query: (country) => ({
        url: "/categories",
        method: "POST",
        body: country
      }),
      invalidatesTags: ["Category"]
    }),
    // deleteCountry: build.mutation<ICountry, ICountry>({
    //   query: (country) => ({
    //     url: `/countries/${country.id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["Country"]
    // }),
    // updateCountry: build.mutation<ICountry, ICountry>({
    //   query: (country) => ({
    //     url: `/countries/${country.id}`,
    //     method: "PUT",
    //     body: {
    //       country_name: country.country_name
    //     }
    //   }),
    //   invalidatesTags: ["Country"]
    // }),
  }),
});
