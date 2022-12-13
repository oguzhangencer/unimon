import { useQuery } from "react-query";
import { getPackages } from "../../utils/fetchData";
import { Checkbox, Text } from "@mantine/core";
import { IPackages } from "../../types/interfaces";

export const StarterPackage = () => {
  const { isLoading, isError, data, error } = useQuery("packages", getPackages);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data
        ?.filter((item: IPackages) => item?.name === "Starter")
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
              <Text key={index}>{item?.statusPage} status pages</Text>
              <Text key={index}>{item?.integrations} integrations</Text>
              <Text key={index}>{item?.logRetention} year log retention</Text>
            </div>
            {/* Includes */}
            <div>
              <Checkbox.Group
                defaultValue={[
                  item?.screenShot,
                  item?.ssl,
                  item?.url,
                  item?.lightHouse,
                  item?.domainExpiration,
                  item?.advancedRequest,
                ]}
                orientation="vertical"
                label="Includes"
                withAsterisk
                spacing="xs"
                // size="xs"
              >
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
                {/* Selectable Includes  */}

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
