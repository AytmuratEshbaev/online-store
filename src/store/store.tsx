import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { countryAPI } from "../services/CountryService";
import { userAPI } from "../services/UserService";
import { categoryAPI } from "../services/CategoryService";
import { authAPI } from "../services/AuthService";
import { productAPI } from "../services/ProductService";
import userReducer from './reducers/UserSlice';
import countryReducer from './reducers/CountrySlice';
import categoryReducer from './reducers/CategorySlice';
import { authSlice } from './reducers/AuthSlice';

const rootReducer = combineReducers({
  userReducer,
  countryReducer,
  categoryReducer,
  auth: authSlice.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [countryAPI.reducerPath]: countryAPI.reducer,
  [categoryAPI.reducerPath]: categoryAPI.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [productAPI.reducerPath]: productAPI.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userAPI.middleware, countryAPI.middleware, categoryAPI.middleware, authAPI.middleware, productAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
