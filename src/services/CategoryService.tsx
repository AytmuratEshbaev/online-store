import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICategory } from "../models/ICategory";

export const categoryAPI = createApi({
  reducerPath: "categoryAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://ecommerce.icedev.uz/" }),
  tagTypes: ["Category"],
  endpoints: (build) => ({
    fetchAllCategories: build.query<ICategory[], number>({
      query: (limit: number = 5) => ({
        url: "/categories",
        params: {
          _limit: limit
        }
      }),
      providesTags: result => ["Category"]
    }),
    // fetchSingleCountry: build.query<ICountry, number>({
    //   query: (id) => ({
    //     url: `/countries/${id}`
    //   }),
    //   providesTags: result => ["Country"]
    // }),
    // createCountry: build.mutation<INewCountry, INewCountry>({
    //   query: (country) => ({
    //     url: "/countries",
    //     method: "POST",
    //     body: country
    //   }),
    //   invalidatesTags: ["Country"]
    // }),
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
