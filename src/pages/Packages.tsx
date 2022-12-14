import { Notification, Loader, Text, Checkbox } from "@mantine/core";
import { BiError } from "react-icons/bi";
import { useQuery } from "react-query";
import { IIncludes, IPackages } from "../types/interfaces";
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
  return (
    <div className="flex">
      {data?.map((item: IPackages, index: number) => (
        <div className="flex flex-col" key={item.id}>
          {/* Headers */}
          <div className="flex p-4">{item.name}</div>
          {/* Features */}
          <div className="flex flex-col gap-2 p-2">
            <Text>{item?.monitors} monitors</Text>
            <Text>{item?.users} user</Text>
            <Text>{item?.sms} SMS</Text>
            <Text>{item?.voiceCall} Voice Call</Text>
            <Text>{item?.statusPage} status pages</Text>
            <Text>{item?.integrations} integrations</Text>
            <Text>{item?.logRetention} years log retention</Text>
          </div>
          {/* Includes */}
          <div className="flex flex-col gap-1 p-4">
            <Checkbox label="Uptime Monitoring" />
            <Checkbox label="Ping Monitoring" />
            <Checkbox label="TCP Monitoring" />
            <Checkbox label="DNS Record Monitoring" />
            <Checkbox label="Text Monitoring" />
            <Checkbox label="Screenshot Monitoring" />
            <Checkbox label="SSL Monitoring" />
            <Checkbox label="URL Monitoring" />
            <Checkbox label="Lighthouse Monitoring" />
            <Checkbox label="Domain Expiration Monitoring" />
            <Checkbox label="Advanced Request Features" />
            <Checkbox label="Custom DNS" />
            <Checkbox label="Source Code Monitoring" />
            <Checkbox label="Network Monitoring" />
            <Checkbox label="Whois Monitoring" />
            <Checkbox label="Self Hosted Status Pages" />
            <Checkbox label="Cookie Monitoring" />
            <Checkbox label="IP Blacklist Monitoring" />
            <Checkbox label="Multi Location Monitoring" />
            <Checkbox label="Higher Check Intervals" />
            <Checkbox label="Premium Support" />
            <Checkbox label="Dedicated Account Manager" />
          </div>
        </div>
      ))}
    </div>
  );
};
