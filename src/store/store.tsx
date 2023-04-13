import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { countryAPI } from "../services/CountryService";
import { userAPI } from "../services/UserService";
import { categoryAPI } from "../services/CategoryService";
import { authAPI } from "../services/AuthService";
import { productAPI } from "../services/ProductService";
import { callAPI } from "../services/CallService";
import userReducer from './reducers/UserSlice';
import countryReducer from './reducers/CountrySlice';
import categoryReducer from './reducers/CategorySlice';
import { authSlice } from './reducers/AuthSlice';

const apis = [countryAPI, userAPI, categoryAPI, authAPI, productAPI, callAPI];

const apiReducers = {}
apis.map((api: any) => ({ [api.reducerPath]: api.reducer }))
  .forEach((red: any) => Object.assign(apiReducers, red));

const apiMiddlewares = apis.map((api: any) => api.middleware)

const rootReducer = combineReducers({
  userReducer,
  countryReducer,
  categoryReducer,
  auth: authSlice.reducer,
  ...apiReducers
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(...apiMiddlewares),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
