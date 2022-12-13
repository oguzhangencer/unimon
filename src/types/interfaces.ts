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
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: IAddress;
  password: string;
}

export interface IPackages {
  id: string;
  name: string;
  monitors: string;
  users: string;
  sms: string;
  voiceCall: string;
  statusPage: string;
  integrations: string;
  logRetention: string;
  uptime: string;
  ping: string;
  tcp: string;
  dns: string;
  text: string;
  screenShot: string;
  ssl: string;
  url: string;
  lightHouse: string;
  domainExpiration: string;
  advancedRequest: string;
  customDns: string;
  sourceCode: string;
  network: string;
  whoIs: string;
  selfHosted: string;
  cookie: string;
  ipBlacklist: string;
  multiLocation: string;
  higherChek: string;
  premiumSupport: string;
  dedicatedAccount: string;
}
