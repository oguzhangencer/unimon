import { useQuery } from "react-query";
import { getPackages } from "../../utils/fetchData";
import { Checkbox, Text } from "@mantine/core";
import { IPackages } from "../../types/interfaces";

export const ProPackage = () => {
  const { isLoading, isError, data, error } = useQuery("packages", getPackages);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data
        ?.filter((item: IPackages) => item?.name === "Tier 3")
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
                <Checkbox value={item?.sourceCode} label={item?.sourceCode} />
                <Checkbox value={item?.network} label={item?.network} />
                <Checkbox value={item?.whoIs} label={item?.whoIs} />
                <Checkbox value={item?.selfHosted} label={item?.selfHosted} />
                <Checkbox value={item?.cookie} label={item?.cookie} />
                <Checkbox value={item?.ipBlacklist} label={item?.ipBlacklist} />
                <Checkbox
                  value={item?.multiLocation}
                  label={item?.multiLocation}
                />
              </Checkbox.Group>
            </div>
          </div>
        ))}
    </div>
  );
};
