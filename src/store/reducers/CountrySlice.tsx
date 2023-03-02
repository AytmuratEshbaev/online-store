import { createSlice } from "@reduxjs/toolkit";

interface CountryState {
    isOpenCreateModal: boolean;
    isOpenUpdateModal: boolean;
    countryIdUpdate: number;
}

const initialState: CountryState = {
    isOpenCreateModal: false,
    isOpenUpdateModal: false,
    countryIdUpdate: -1
};

export const countrySlice = createSlice({
    name: "country",
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
            state.countryIdUpdate = action.payload;
        },
        closeUpdateModal(state) {
            state.isOpenUpdateModal = false;
            state.countryIdUpdate = -1;
        }
    },
});

export default countrySlice.reducer;
