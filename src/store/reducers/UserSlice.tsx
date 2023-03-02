import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  isOpen: boolean;
  isOpenMore: boolean;
  userIdInfo: number;
  isOpenUpdateModal: boolean;
  userIdUpdate: number;
}

const initialState: UserState = {
  isOpen: false,
  isOpenMore: false,
  userIdInfo: -1,
  isOpenUpdateModal: false,
  userIdUpdate: -1,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
    openMoreInformation(state, action) {
      state.isOpenMore = true;
      state.userIdInfo = action.payload;
    },
    closeMoreInformation(state) {
      state.isOpenMore = false;
      state.userIdInfo = -1;
    },
    openUpdateModal(state, action) {
      state.isOpenUpdateModal = true;
      state.userIdUpdate = action.payload;
    },
    closeUpdateModal(state) {
      state.isOpenUpdateModal = false;
      state.userIdUpdate = -1;
    },
  },
});

export default userSlice.reducer;
