import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from '../../models/IProduct';
import { IAddress } from '../../models/IUser';
import { IOrderDetail } from '../../models/IOrder';

type StateType = {
    count: number
    product: IOrderDetail[]
    address: IAddress
    date: string
}

const initialState: StateType = {
    count: 0,
    product: [],
    address: {} as IAddress,
    date: ''
}

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addProduct: (state,action:PayloadAction<IProduct>)=>{
            const {price,id}=action.payload
            if(state.product.find(item=>item.product_id===action.payload.id)===undefined){
                state.product.push({
                    product_id:id,
                    price,
                    quantity:1
                })
            }else{
                var index:number = state.product.findIndex(item=>item.product_id===action.payload.id)
                state.product[index].quantity+=1
            }
                state.count += 1
        },
        decrement: (state, action: PayloadAction<number>) => {
            var index: number = state.product.findIndex(item => item.product_id === action.payload)

            if (state.product.find(item => item.product_id === action.payload)?.quantity === 1) {
                state.product = state.product.filter(item => item.product_id !== action.payload)
                state.count -= 1
            } else {
                state.product[index].quantity -= 1
                state.count -= 1
            }

        },
        delProduct: (state, action: PayloadAction<number>) => {
            var index: number = state.product.findIndex(item => item.product_id === action.payload)
            state.count = state.count - state.product[index].quantity
            state.product = state.product.filter(item => item.product_id !== action.payload)
        },
        addAddress: (state, action: PayloadAction<IAddress>) => {
            state.address = action.payload
        },
        setDate: (state, action: PayloadAction<string>) => {
            state.date = action.payload
        }
    }
})

export default cartSlice.reducer;