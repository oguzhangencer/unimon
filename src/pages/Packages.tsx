import { useQuery } from "react-query";
import { FreePackage } from "../components/packages/FreePackage";
import { getPackages } from "../utils/fetchData";

export const Packages = () => {
  const { isLoading, isError, data, error } = useQuery("packages", getPackages);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="flex gap-y-6">
      {/* Packages */}
      <FreePackage />
    </div>
  );
};
