import { createSlice } from "@reduxjs/toolkit";

interface CategoryState {
    isOpenCreateModal: boolean;
    isOpenUpdateModal: boolean;
    categoryIdUpdate: number;
}

const initialState: CategoryState = {
    isOpenCreateModal: false,
    isOpenUpdateModal: false,
    categoryIdUpdate: -1
};

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        openCreateModal(state) {
            state.isOpenCreateModal = true;
        },
        closeCreateModal(state) {
            state.isOpenCreateModal = false;
        },
        openUpdateModal(state, action) {
            state.isOpenUpdateModal = true;
            state.categoryIdUpdate = action.payload;
        },
        closeUpdateModal(state) {
            state.isOpenUpdateModal = false;
            state.categoryIdUpdate = -1;
        }
    },
});

export default categorySlice.reducer;