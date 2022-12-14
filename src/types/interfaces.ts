// export interface IName {
//   firstName: string;
//   lastName: string;
// }

export interface IGeo {
  lat: string;
  lng: string;
}

export interface ICustomers {
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
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: IAddress;
  password: string;
}

export interface IIncludes {
  uptime: boolean;
  ping: boolean;
  tcp: boolean;
  dns: boolean;
  text: boolean;
  screenShot: boolean;
  ssl: boolean;
  url: boolean;
  lightHouse: boolean;
  domainExpiration: boolean;
  advancedRequest: boolean;
  customDns: boolean;
  sourceCode: boolean;
  network: boolean;
  whoIs: boolean;
  selfHosted: boolean;
  cookie: boolean;
  ipBlacklist: boolean;
  multiLocation: boolean;
  higherChek: boolean;
  premiumSupport: boolean;
  dedicatedAccount: boolean;
}

export interface IPackages {
  id: string;
  name: number | boolean;
  monitors: number | boolean;
  users: number | boolean;
  sms: number | boolean;
  voiceCall: number | boolean;
  statusPage: number | boolean;
  integrations: number | boolean;
  logRetention: number | boolean;
  includes: IIncludes;
}
