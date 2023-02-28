export interface INewUser {
  user: {
    username: string;
    password: string;
  };
  user_detail: {
    first_name: string;
    last_name: string;
    user_image: string;
  };
  user_phones: {
    phone_number: string;
    type: string;
  }[];
  user_address: {
    street_address: string;
    postal_code: number;
    city: string;
    country_id: number;
  };
}

