import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICountry } from "../models/ICountry";

export const countryAPI = createApi({
  reducerPath: "countryAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://ecommerce.icedev.uz/" }),
  endpoints: (build) => ({
    fetchAllCountries: build.query<ICountry[], number>({
      query: (limit: number = 10) => ({
        url: "/countries",
      }),
    }),
  }),
});
