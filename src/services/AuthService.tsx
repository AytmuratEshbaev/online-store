import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthUserData } from '../models/IAuth';

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ecommerce.icedev.uz/',
  }),
  tagTypes: ['auth'],
  endpoints: (build) => ({
    userLogin: build.mutation({
      query(data) {
        const body = `${encodeURIComponent('username')}=${encodeURIComponent(data.username)}&&${encodeURIComponent('password')}=${encodeURIComponent(data.password)}`
        return {
          url: 'token',
          method: 'POST',
          body,
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
          }
        }
      },
      invalidatesTags: ['auth'],
    }),
  }),
});

export const {
  useUserLoginMutation
} = authAPI;
