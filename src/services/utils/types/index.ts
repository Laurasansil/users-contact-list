type LocationInfo = {
  city: string;
  country: string;
  postcode: number;

  state: string;
  street: { name: string; number: number };
};

export type UserProfileInfo = {
  cell: string;
  phone: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  login: {
    uuid: string;
  };
  dob: {
    date: string;
  };
  id: { value: string };
  location: LocationInfo;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
};
