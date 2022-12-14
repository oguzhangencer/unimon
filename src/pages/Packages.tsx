import { Notification, Loader } from "@mantine/core";
import { BiError } from "react-icons/bi";
import { useQuery } from "react-query";
import { getPackages } from "../utils/fetchData";

export const Packages = () => {
  const { isLoading, isError, data, error } = useQuery("packages", getPackages);

  if (isLoading)
    return <Loader className="flex" size="lg" variant="bars" color="slate" />;

  if (isError)
    return (
      <Notification icon={<BiError />} color="red">
        {`Somethings went wrong...${error}`}
      </Notification>
    );
  return <div className="flex gap-10 "></div>;
};
