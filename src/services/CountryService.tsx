import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICountry, INewCountry } from "../models/ICountry";

export const countryAPI = createApi({
  reducerPath: "countryAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://ecommerce.icedev.uz/" }),
  tagTypes: ["Country"],
  endpoints: (build) => ({
    fetchAllCountries: build.query<ICountry[], number>({
      query: (limit: number = 5) => ({
        url: "/countries",
        params: {
          _limit: limit
        }
      }),
      providesTags: result => ["Country"]
    }),
    fetchSingleCountry: build.query<ICountry, number>({
      query: (id) => ({
        url: `/countries/${id}`
      }),
      providesTags: result => ["Country"]
    }),
    createCountry: build.mutation<INewCountry, INewCountry>({
      query: (country) => ({
        url: "/countries",
        method: "POST",
        body: country
      }),
      invalidatesTags: ["Country"]
    }),
    deleteCountry: build.mutation<ICountry, ICountry>({
      query: (country) => ({
        url: `/countries/${country.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Country"]
    }),
    updateCountry: build.mutation<ICountry, ICountry>({
      query: (country) => ({
        url: `/countries/${country.id}`,
        method: "PUT",
        body: {
          country_name: country.country_name
        }
      }),
      invalidatesTags: ["Country"]
    }),
  }),
});
