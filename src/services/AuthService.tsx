import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store/store';



export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ecommerce.icedev.uz/',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const auth = (getState() as RootState).auth;
        let token = auth.token;
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
  }),
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (credentials) => ({
        url: '/token',
        method: 'POST',
        body: { ...credentials }
    })
    }),
  }),
});

export const {
  useUserLoginMutation
} = authAPI;
