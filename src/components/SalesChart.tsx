import { ResponsiveLine } from "@nivo/line";
import { useQuery } from "react-query";
import { ICustomers } from "../types/interfaces";
import { getCustomers } from "../utils/fetchData";

export const SalesChart = () => {
  // const { isLoading, isError, data, error } = useQuery<ICustomers>(
  //   "customers",
  //   getCustomers
  // );

  // if (isLoading) return <div>Loading...</div>;
  return <div>{/* <ResponsiveLine data={data} /> */}</div>;
};
