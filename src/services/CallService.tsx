import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICallBack, IResponseCallBack } from "../models/ICallback";

export const callAPI = createApi({
    reducerPath: 'callAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://ecommerce.icedev.uz/' }),
    tagTypes: ['calls'],
    endpoints: build => ({
        sendCall: build.mutation<ICallBack, ICallBack>({
            query: (data) => {
                return {
                    url: `call_orders`,
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: (data)
                }
            },
            invalidatesTags: ['calls']
        }),
        fetchCalls: build.query<IResponseCallBack[], void>({
            query: () => 'call_orders',
            providesTags: ['calls']
        }),
        removeCall: build.mutation<IResponseCallBack, number | undefined>({
            query: (id) => {
                return {
                    url: `call_orders/${id}`,
                    method: 'DELETE'
                }
            },
            invalidatesTags: ['calls']
        })
    })
})