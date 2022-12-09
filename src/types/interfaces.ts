// export interface IName {
//   firstName: string;
//   lastName: string;
// }

export interface IGeo {
  lat: string;
  lng: string;
}

export interface IUsers {
  name: string;
  email: string;
  createDate: string;
  teamName: string;
  geo: IGeo;
  id: string;
}

export interface IAddress {
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface IAuth {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: IAddress;
  password: string;
  id: string;
}
