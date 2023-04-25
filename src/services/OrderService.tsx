import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IOrderStatus, IServerResponseOrder, IResponseOrders } from "../models/IOrder";


export const orderAPI = createApi({
    reducerPath: 'orderAPI',
    baseQuery: fetchBaseQuery({ baseUrl: "https://ecommerce.icedev.uz/" }),
    tagTypes: ['orders'],
    endpoints: builder => ({
        setOrder: builder.mutation<IResponseOrders, IServerResponseOrder>({
            query: (data) => {
                return {
                    url: 'orders',
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }
            }
        }),
        // getOrderStatus: builder.query<IOrderStatus[], void>({
        //     query: () => 'orders/status/',
        //     providesTags: (result, error, arg) =>
        //         result
        //             ? [...result.map(({ id }) => ({ type: 'orders' as const, id })), 'orders']
        //             : ['orders']
        // }),
        // getSingleOrderStatus: builder.query<IOrderStatus, number>({
        //     query: (id) => `oreders/status/${id}`
        // }),
        // addOrderStatus: builder.mutation<IOrderStatus, Omit<IOrderStatus, 'id'>>({
        //     query: (data) => {
        //         return {
        //             url: 'orders/status',
        //             method: 'POST',
        //             headers: {
        //                 'Content-type': 'application/json; charset=UTF-8'
        //             },
        //             body: (data)
        //         }
        //     }
        // }),
        // updateOrderStatus: builder.mutation<IOrderStatus, { data: Omit<IOrderStatus, 'id'>, id: number | undefined }>({
        //     query: ({ data, id }) => {
        //         return {
        //             url: `orders/status/${id}`,
        //             method: 'POST',
        //             headers: {
        //                 'Content-type': 'application/json; charset=UTF-8'
        //             },
        //             body: (data)
        //         }
        //     }
        // }),
        // delOrderStatus: builder.mutation<IOrderStatus, number>({
        //     query: (id) => {
        //         return {
        //             url: `orders/status/${id}`,
        //             method: 'DELETE'
        //         }
        //     }
        // }),
        // getOrders: builder.query<IResponseOrders[], string>({
        //     // query:()=>'orders'
        //     query: (token) => {
        //         console.log('token', token)
        //         return {
        //             url: 'orders',
        //             method: 'GET',
        //             headers: {
        //                 'Authorization': `Bearer ${token}`
        //             },
        //         }
        //     }
        // }),
        // getOrdersUser: builder.query<IResponseOrders[], number>({
        //     query: (user_id) => `orders/${user_id}`
        // }),
        delOrder: builder.mutation<IResponseOrders, { id_order: number | undefined, id_user: number | undefined }>({
            query: ({ id_order, id_user }) => {
                return {
                    url: `orders/${id_user}/${id_order}`,
                    method: 'DELETE'
                }
            }
        })
    })
})
