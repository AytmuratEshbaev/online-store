import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { countryAPI } from "../services/CountryService";
import { userAPI } from "../services/UserService";
import userReducer from './reducers/UserSlice';
import countryReducer from './reducers/CountrySlice';
import { categoryAPI } from "../services/CategoryService";

const rootReducer = combineReducers({
  userReducer,
  countryReducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [countryAPI.reducerPath]: countryAPI.reducer,
  [categoryAPI.reducerPath]: categoryAPI.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userAPI.middleware, countryAPI.middleware, categoryAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
