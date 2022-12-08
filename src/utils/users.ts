import { GetUsers } from "../constans/endpoints";
import axios from "./axios";

export const getUsers = async () => {
  const response = await axios.get(GetUsers);

  return response.data;
};
