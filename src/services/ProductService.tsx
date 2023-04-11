import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { INewProduct, IUpdateProduct, IProduct } from '../models/IProduct';

export const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({ baseUrl: "https://ecommerce.icedev.uz/" }),
    tagTypes: ['products'],
    endpoints: (builder) => ({
        fetchAllProducts: builder.query<IProduct[], void>({
            query: () => 'products/',
            providesTags: ['products']
        }),
        fetchSingleProduct: builder.query<IProduct, number | undefined>({
            query: (id) => `products/${id}`,
            providesTags: ['products']
        }),
        fetchLimitProducts: builder.query<IProduct[], number>({
            query: (limit: number = 5) => ({
                url: "/products",
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ["products"]
        }),
        addNewProduct: builder.mutation<INewProduct, Partial<INewProduct>>({
            query: (product) => ({
                url: `products`,
                method: `POST`,
                body: (product),
                headers: {
                    'Content-type': 'application/json'
                }
            }),
            invalidatesTags: ['products']
        }),
        updateProduct: builder.mutation<IProduct, { id: number, product: IUpdateProduct }>({
            query: ({ id, product }) => ({
                url: `products/${id}`,
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: product
            }),
            invalidatesTags: ['products']
        }),
        deleteProduct: builder.mutation<IProduct, number>({
            query(id) {
                return {
                    url: `products/${id}`,
                    method: 'DELETE'
                }
            },
            invalidatesTags: ['products']
        })
    })
})

