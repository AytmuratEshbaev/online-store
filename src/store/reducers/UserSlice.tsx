import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INewUser } from "../../models/INewUser";

interface UserState {
  isOpen: boolean;
  // newUser: INewUser;
}

const initialState: UserState = {
  isOpen: false,
  // newUser: initialNewUser,
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
  },
});

export default userSlice.reducer;
