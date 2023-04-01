import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { authSlice } from "../store/reducers/AuthSlice";
type IUser = {
  username: string,
  password: string
}
type IToken = {
  access_token: string
}
export const authAPI = createApi({
  reducerPath: 'authUser',
  baseQuery: fetchBaseQuery({ baseUrl: "https://ecommerce.icedev.uz/" }),
  tagTypes: ['login'],
  endpoints: builder => ({
    signIn: builder.mutation<IToken, IUser>({
      query(data) {
        const body = encodeURIComponent('username') + '=' + encodeURIComponent(data.username)
          + '&&' +
          encodeURIComponent('password') + '=' + encodeURIComponent(data.password)
        return {
          url: 'token',
          method: 'POST',
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body,
        }
      },
      async onQueryStarted(data, { dispatch, queryFulfilled, getState }) {
        const { data: accessToken } = await queryFulfilled
        try {
          dispatch(authSlice.actions.login(accessToken.access_token))
        } catch (e) {
          console.log(e);
        }
      },
      invalidatesTags: ['login']
    })
  })
})

export const { useSignInMutation } = authAPI;