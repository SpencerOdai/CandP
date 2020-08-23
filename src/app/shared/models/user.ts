export interface IUser {
  id: number;
  name: string;
  username: string;
  picture: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
  dob: string;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

interface IGeo {
  lat: string;
  lng: string;
}
