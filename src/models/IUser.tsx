import { ICountry } from "./ICountry";

export interface IUser {
  id: number;
  username: string;
  is_admin: boolean;
  user_detail: {
    first_name: string;
    last_name: string;
    user_image: string;
  };
  phone_numbers: {
    phone_number: string;
    type: string;
    id: number;
  }[];
  addresses: {
    street_address: string;
    postal_code: string;
    city: string;
    id: number;
    country: ICountry;
  }[];
}


export interface IAddress {
  street_address: string
  postal_code: string
  city: string
  id: number
  country: ICountry
}