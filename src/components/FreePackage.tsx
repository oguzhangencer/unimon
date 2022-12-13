import { useQuery } from "react-query";
import { getPackages } from "../utils/fetchData";
import { Checkbox, Text } from "@mantine/core";
import { IPackages } from "../types/interfaces";

export const FreePackage = () => {
  const { isLoading, isError, data, error } = useQuery("packages", getPackages);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data
        ?.filter((item: IPackages) => item?.name === "Tier 1")
        .map((item: IPackages, index: number) => (
          <div key={index}>
            {/* Headers */}
            <div key={index}>
              <Text>{item?.name}</Text>
            </div>
            {/* Features */}
            <div>
              <Text key={index}>{item?.monitors} monitors</Text>
              <Text key={index}>{item?.users} user</Text>
              <Text key={index}>{item?.statusPage} status page</Text>
              <Text key={index}>{item?.integrations} integration</Text>
              <Text key={index}>{item?.logRetention} months log retention</Text>
            </div>
            {/* Includes */}
            <div>
              <Checkbox.Group
                orientation="vertical"
                label="Includes"
                withAsterisk
                spacing="xs"
                // size="xs"
              >
                <Checkbox value={item?.uptime} label={item?.uptime} />
                <Checkbox value={item?.ping} label={item?.ping} />
                <Checkbox value={item?.tcp} label={item?.tcp} />
                <Checkbox value={item?.dns} label={item?.dns} />
                <Checkbox value={item?.text} label={item?.text} />
                {/* Selectable Includes */}
                <Checkbox value={item?.screenShot} label={item?.screenShot} />
                <Checkbox value={item?.ssl} label={item?.ssl} />
                <Checkbox value={item?.url} label={item?.url} />
                <Checkbox value={item?.lightHouse} label={item?.lightHouse} />
                <Checkbox
                  value={item?.domainExpiration}
                  label={item?.domainExpiration}
                />
                <Checkbox
                  value={item?.advancedRequest}
                  label={item?.advancedRequest}
                />
                <Checkbox value={item?.customDns} label={item?.customDns} />
              </Checkbox.Group>
            </div>
          </div>
        ))}
    </div>
  );
};
