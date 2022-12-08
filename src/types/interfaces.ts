export interface IUsers {
  id: number;
  firstName: string;
  lastName: string;
  lat: number;
  lng: number;
  email: string;
  crateDate: Date;
  teamName: string;
}

export interface IUseGetUsers {
  data: IUsers[];
  isError: boolean;
  error: Error | null;
  isLoading: boolean;
}
