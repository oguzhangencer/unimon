import { GetPackages, PutPackages } from "./../constans/endpoints";
import { GetUsers } from "../constans/endpoints";
import axios from "./axios";

// Fetching Users
export const getUsers = async () => {
  const response = await axios.get(GetUsers);
  return response.data;
};

// Fetching Packages
export const getPackages = async () => {
  const response = await axios.get(GetPackages);
  return response.data;
};

// Update Packages
export const putPackages = async ({ id }: { id: string }) => {
  const response = await axios.put(`${PutPackages}${id}`);
  return response.data;
};
