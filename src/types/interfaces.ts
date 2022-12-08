export interface Users {
  id: number;
  firstName: string;
  lastName: string;
  lat: number;
  lng: number;
  email: string;
  crateDate: Date;
  teamName: string;
}

export interface UseGetUsers {
  data: Users[];
  isError: boolean;
  error: Error | null;
  isLoading: boolean;
}
