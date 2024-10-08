import { IPackages } from "../types/interfaces";
import {
  GetCustomers,
  GetPackages,
  PutAuth,
  PutPackages,
} from "./../constans/endpoints";
import axios from "./axios";

// Fetching Users
export const getCustomers = async () => {
  const response = await axios.get(GetCustomers);
  return response.data;
};

// Fetching Packages
export const getPackages = async () => {
  const response = await axios.get(GetPackages);
  return response.data;
};

// Update Packages
export const putPackages = async ({
  id,
  item,
}: {
  id: string;
  item: IPackages;
}) => {
  const response = await axios.put(`${PutPackages}${id}`, item);
  return response.data;
};

// Fetching Auth
export const putAuth = async ({ id }: { id: string }) => {
  const response = await axios.put(`${PutAuth}${id}`);
  return response.data;
};
