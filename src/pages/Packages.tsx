import { useQuery } from "react-query";
import { EnterpricePackage } from "../components/packages/EnterprisePackage";
import { FreePackage } from "../components/packages/FreePackage";
import { ProPackage } from "../components/packages/ProPackage";
import { StarterPackage } from "../components/packages/StarterPackage";
import { getPackages } from "../utils/fetchData";

export const Packages = () => {
  const { isLoading, isError, data, error } = useQuery("packages", getPackages);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="flex gap-10 ">
      {/* Packages */}
      <FreePackage />
      <StarterPackage />
      <ProPackage />
      <EnterpricePackage />
    </div>
  );
};
