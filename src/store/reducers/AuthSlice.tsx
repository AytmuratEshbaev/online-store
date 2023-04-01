import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";


type initialType = {
  token: string
}
const initialState: initialType = {
  token: ""
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      const cookie = new Cookies()
      if (cookie.get('token') === undefined) {
        state.token = action.payload
        cookie.set('token', state.token)
      } else {
        state.token = cookie.get('token')
      }
    },
    logout: (state) => {
      const cookie = new Cookies()
      cookie.remove('token')
      state.token = ''
    }
  }
})
export default authSlice.reducer;