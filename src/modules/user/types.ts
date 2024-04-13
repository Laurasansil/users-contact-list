type Location = {
  city: string;
  country: string;
  postcode: number;

  state: string;
  street: { name: string; number: number };
};

export type GetUserRes = {
  results: User[];
};

export type User = {
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
  location: Location;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
};
