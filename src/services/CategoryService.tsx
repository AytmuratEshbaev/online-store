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
   
  }),
});
