import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { INewUser } from "../models/INewUser";
import { IUser } from "../models/IUser";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://ecommerce.icedev.uz/" }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    fetchAllUsers: build.query<IUser[], number>({
      query: (limit: number = 5) => ({
        url: "/users",
        params: {
          _limit: limit
        }
      }),
      providesTags: result => ["User"]
    }),
    fetchSingleUser: build.query<IUser, number>({
      query: (id) => ({
        url: `users/${id}`,
      }),
      providesTags: result => ["User"]
    }),
    createUser: build.mutation<INewUser, INewUser>({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"]
    }),
    deleteUser: build.mutation<IUser, IUser>({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"]
    }),
    updateUser: build.mutation<IUser, IUser>({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "PUT",
        body: {
          user: {
            username: user.username
          },
          user_detail: {
            first_name: user.user_detail.first_name,
            last_name: user.user_detail.last_name,
            user_image: user.user_detail.user_image,
          }
        }
      }),
      invalidatesTags: ["User"]
    }),
  }),
});
