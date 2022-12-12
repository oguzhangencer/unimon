import { GetPackages } from "./../constans/endpoints";
import { GetUsers } from "../constans/endpoints";
import axios from "./axios";

// Fetching Users
export const getUsers = async () => {
  const response = await axios.get(GetUsers);
  return response.data;
};
