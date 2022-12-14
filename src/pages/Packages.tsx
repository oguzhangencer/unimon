import { Notification, Loader, Text, Checkbox, TextInput } from "@mantine/core";
import { BiError } from "react-icons/bi";
import { GiConsoleController } from "react-icons/gi";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { IPackages } from "../types/interfaces";
import { getPackages, putPackages } from "../utils/fetchData";

export const Packages = () => {
  const { isLoading, isError, data, error } = useQuery<IPackages[]>(
    "packages",
    getPackages
  );
  const queryClient = useQueryClient();

  const editPackageMutation = useMutation(putPackages, {
    onSuccess: () => {
      queryClient.invalidateQueries("packages");
    },
  });

  if (isLoading)
    return <Loader className="flex" size="lg" variant="bars" color="slate" />;

  if (isError)
    return (
      <Notification icon={<BiError />} color="red">
        {`Somethings went wrong...${error}`}
      </Notification>
    );

  return (
    <div className="flex gap-">
      {data?.map((item: IPackages) => (
        <div className="flex flex-col" key={item?.id}>
          {/* Headers */}
          <div className="flex p-4 justify-center">{item?.name}</div>
          {/* Features */}
          <div className="flex flex-col justify-start gap-2 p-2">
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
            <Text>Includes</Text>
            {/* <Checkbox.Group
              className="flex flex-col gap-1"
              defaultValue={Object.keys(item?.includes)}
              withAsterisk> */}
            <Checkbox
              onChange={() => {
                editPackageMutation.mutate({
                  id: item?.id,
                  item: {
                    ...item,
                    includes: {
                      ...item?.includes,
                      uptime: !item?.includes?.uptime,
                    },
                  },
                });
              }}
              checked={item?.includes?.uptime}
              label="Uptime Monitoring"
            />
            <Checkbox
              onChange={() => {
                editPackageMutation.mutate({
                  id: item?.id,
                  item: {
                    ...item,
                    includes: {
                      ...item?.includes,
                      ping: !item?.includes?.ping,
                    },
                  },
                });
              }}
              checked={item?.includes?.ping}
              label="Ping Monitoring"
            />
            <Checkbox
              onChange={() => {
                editPackageMutation.mutate({
                  id: item?.id,
                  item: {
                    ...item,
                    includes: {
                      ...item?.includes,
                      tcp: !item?.includes?.tcp,
                    },
                  },
                });
              }}
              checked={item?.includes?.tcp}
              label="TCP Monitoring"
            />
            <Checkbox
              onChange={() => {
                editPackageMutation.mutate({
                  id: item?.id,
                  item: {
                    ...item,
                    includes: {
                      ...item?.includes,
                      dns: !item?.includes?.dns,
                    },
                  },
                });
              }}
              checked={item?.includes?.dns}
              label="DNS Record Monitoring"
            />
            <Checkbox
              onChange={() => {
                editPackageMutation.mutate({
                  id: item?.id,
                  item: {
                    ...item,
                    includes: {
                      ...item?.includes,
                      text: !item?.includes?.text,
                    },
                  },
                });
              }}
              checked={item?.includes?.text}
              label="Text Monitoring"
            />
            <Checkbox
              onChange={() => {
                editPackageMutation.mutate({
                  id: item?.id,
                  item: {
                    ...item,
                    includes: {
                      ...item?.includes,
                      screenShot: !item?.includes?.screenShot,
                    },
                  },
                });
              }}
              checked={item?.includes?.screenShot}
              label="Screenshot Monitoring"
            />
            <Checkbox
              onChange={() => {
                editPackageMutation.mutate({
                  id: item?.id,
                  item: {
                    ...item,
                    includes: {
                      ...item?.includes,
                      ssl: !item?.includes?.ssl,
                    },
                  },
                });
              }}
              checked={item?.includes?.ssl}
              label="SSL Monitoring"
            />
            <Checkbox
              onChange={() => {
                editPackageMutation.mutate({
                  id: item?.id,
                  item: {
                    ...item,
                    includes: {
                      ...item?.includes,
                      url: !item?.includes?.url,
                    },
                  },
                });
              }}
              checked={item?.includes?.url}
              label="URL Monitoring"
            />
            <Checkbox
              onChange={() => {
                editPackageMutation.mutate({
                  id: item?.id,
                  item: {
                    ...item,
                    includes: {
                      ...item?.includes,
                      lightHouse: !item?.includes?.lightHouse,
                    },
                  },
                });
              }}
              checked={item?.includes?.lightHouse}
              label="Lighthouse Monitoring"
            />
            <Checkbox
              onChange={() => {
                editPackageMutation.mutate({
                  id: item?.id,
                  item: {
                    ...item,
                    includes: {
                      ...item?.includes,
                      domainExpiration: !item?.includes?.domainExpiration,
                    },
                  },
                });
              }}
              checked={item?.includes?.domainExpiration}
              label="Domain Expiration Monitoring"
            />
            <Checkbox
              onChange={() => {
                editPackageMutation.mutate({
                  id: item?.id,
                  item: {
                    ...item,
                    includes: {
                      ...item?.includes,
                      advancedRequest: !item?.includes?.advancedRequest,
                    },
                  },
                });
              }}
              checked={item?.includes?.advancedRequest}
              label="Advanced Request Features"
            />
            <Checkbox
              onChange={() => {
                editPackageMutation.mutate({
                  id: item?.id,
                  item: {
                    ...item,
                    includes: {
                      ...item?.includes,
                      customDns: !item?.includes?.customDns,
                    },
                  },
                });
              }}
              checked={item?.includes?.customDns}
              label="Custom DNS"
            />
            <Checkbox
              onChange={() => {
                editPackageMutation.mutate({
                  id: item?.id,
                  item: {
                    ...item,
                    includes: {
                      ...item?.includes,
                      sourceCode: !item?.includes?.sourceCode,
                    },
                  },
                });
              }}
              checked={item?.includes?.sourceCode}
              label="Source Code Monitoring"
            />
            <Checkbox
              onChange={() => {
                editPackageMutation.mutate({
                  id: item?.id,
                  item: {
                    ...item,
                    includes: {
                      ...item?.includes,
                      network: !item?.includes?.network,
                    },
                  },
                });
              }}
              checked={item?.includes?.network}
              label="Network Monitoring"
            />
            <Checkbox
              onChange={() => {
                editPackageMutation.mutate({
                  id: item?.id,
                  item: {
                    ...item,
                    includes: {
                      ...item?.includes,
                      whoIs: !item?.includes?.whoIs,
                    },
                  },
                });
              }}
              checked={item?.includes?.whoIs}
              label="Whois Monitoring"
            />
            <Checkbox
              onChange={() => {
                editPackageMutation.mutate({
                  id: item?.id,
                  item: {
                    ...item,
                    includes: {
                      ...item?.includes,
                      selfHosted: !item?.includes?.selfHosted,
                    },
                  },
                });
              }}
              checked={item?.includes?.selfHosted}
              label="Self Hosted Status Pages"
            />
            <Checkbox
              onChange={() => {
                editPackageMutation.mutate({
                  id: item?.id,
                  item: {
                    ...item,
                    includes: {
                      ...item?.includes,
                      cookie: !item?.includes?.cookie,
                    },
                  },
                });
              }}
              checked={item?.includes?.cookie}
              label="Cookie Monitoring"
            />
            <Checkbox
              onChange={() => {
                editPackageMutation.mutate({
                  id: item?.id,
                  item: {
                    ...item,
                    includes: {
                      ...item?.includes,
                      customDns: !item?.includes?.customDns,
                    },
                  },
                });
              }}
              checked={item?.includes?.ipBlacklist}
              label="IP Blacklist Monitoring"
            />
            <Checkbox
              onChange={() => {
                editPackageMutation.mutate({
                  id: item?.id,
                  item: {
                    ...item,
                    includes: {
                      ...item?.includes,
                      multiLocation: !item?.includes?.multiLocation,
                    },
                  },
                });
              }}
              checked={item?.includes?.multiLocation}
              label="Multi Location Monitoring"
            />
            <Checkbox
              onChange={() => {
                editPackageMutation.mutate({
                  id: item?.id,
                  item: {
                    ...item,
                    includes: {
                      ...item?.includes,
                      higherChek: !item?.includes?.higherChek,
                    },
                  },
                });
              }}
              checked={item?.includes?.higherChek}
              label="Higher Check Intervals"
            />
            <Checkbox
              onChange={() => {
                editPackageMutation.mutate({
                  id: item?.id,
                  item: {
                    ...item,
                    includes: {
                      ...item?.includes,
                      premiumSupport: !item?.includes?.premiumSupport,
                    },
                  },
                });
              }}
              checked={item?.includes?.premiumSupport}
              label="Premium Support"
            />
            <Checkbox
              onChange={() => {
                editPackageMutation.mutate({
                  id: item?.id,
                  item: {
                    ...item,
                    includes: {
                      ...item?.includes,
                      dedicatedAccount: !item?.includes?.dedicatedAccount,
                    },
                  },
                });
              }}
              checked={item?.includes?.dedicatedAccount}
              label="Dedicated Account Manager"
            />
            {/* </Checkbox.Group> */}
          </div>
        </div>
      ))}
    </div>
  );
};
