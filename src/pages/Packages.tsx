import { Notification, Loader, Text, Checkbox, TextInput } from "@mantine/core";
import { useState } from "react";
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
            {/* Uptime */}
            <div className="flex gap-2">
              <Checkbox
                disabled={editPackageMutation?.isLoading ? true : false}
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
              />
              <Text>Uptime Monitoring</Text>
              {editPackageMutation.isLoading && <Loader size="sm" />}
            </div>
            {/* Ping */}
            <div className="flex gap-2">
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
              />
              <Text>Ping Monitoring</Text>
              {editPackageMutation.isLoading && <Loader size="sm" />}
            </div>
            {/* TCP */}
            <div className="flex gap-2">
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
              />
              <Text>TCP Monitoring</Text>
              {editPackageMutation.isLoading && <Loader size="sm" />}
            </div>
            {/* DNS */}
            <div className="flex gap-2">
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
              />
              <Text>DNS Record Monitoring</Text>
              {editPackageMutation.isLoading && <Loader size="sm" />}
            </div>
            {/*  Text */}
            <div className="flex gap-2">
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
              />
              <Text>Text Monitoring</Text>
              {editPackageMutation.isLoading && <Loader size="sm" />}
            </div>
            {/* Screenshot */}
            <div className="flex gap-2">
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
              />
              <Text>Screenshot Monitoring</Text>
              {editPackageMutation.isLoading && <Loader size="sm" />}
            </div>
            {/* SSL */}
            <div className="flex gap-2">
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
              />
              <Text>SSL Monitoring</Text>
              {editPackageMutation.isLoading && <Loader size="sm" />}
            </div>
            {/* URL */}
            <div className="flex gap-2">
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
              />
              <Text>URL Monitoring</Text>
              {editPackageMutation.isLoading && <Loader size="sm" />}
            </div>
            {/* Lighthouse */}
            <div className="flex gap-2">
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
              />
              <Text>Lighthouse Monitoring</Text>
              {editPackageMutation.isLoading && <Loader size="sm" />}
            </div>
            {/* Domain Expiration */}
            <div className="flex gap-2">
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
              />
              <Text>Domain Expiration Monitoring</Text>
              {editPackageMutation.isLoading && <Loader size="sm" />}
            </div>
            {/* Advanced Request */}
            <div className="flex gap-2">
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
              />
              <Text>Advanced Request Features</Text>
              {editPackageMutation.isLoading && <Loader size="sm" />}
            </div>
            {/* Custom DNS */}
            <div className="flex gap-2">
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
              />
              <Text>Custom DNS</Text>
              {editPackageMutation.isLoading && <Loader size="sm" />}
            </div>
            {/* Source Code */}
            <div className="flex gap-2">
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
              />
              <Text>Source Code Monitoring</Text>
              {editPackageMutation.isLoading && <Loader size="sm" />}
            </div>
            {/* Network */}
            <div className="flex gap-2">
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
              />
              <Text>Network Monitoring</Text>
              {editPackageMutation.isLoading && <Loader size="sm" />}
            </div>
            {/* Whois */}
            <div className="flex gap-2">
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
              />
              <Text>Whois Monitoring</Text>
              {editPackageMutation.isLoading && <Loader size="sm" />}
            </div>
            {/* Self Hosted */}
            <div className="flex gap-2">
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
              />
              <Text>Self Hosted</Text>
              {editPackageMutation.isLoading && <Loader size="sm" />}
            </div>
            {/* Cookie */}
            <div className="flex gap-2">
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
              />
              <Text>Cookie Monitoring</Text>
              {editPackageMutation.isLoading && <Loader size="sm" />}
            </div>
            {/* IP Blacklist */}
            <div className="flex gap-2">
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
              />
              <Text>IP Blacklist Monitoring</Text>
              {editPackageMutation.isLoading && <Loader size="sm" />}
            </div>
            {/* Multi Location */}
            <div className="flex gap-2">
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
              />
              <Text>Multi Location Monitoring</Text>
              {editPackageMutation.isLoading && <Loader size="sm" />}
            </div>
            {/* Higher Check */}
            <div className="flex gap-2">
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
              />
              <Text>Higher Check Intervals</Text>
              {editPackageMutation.isLoading && <Loader size="sm" />}
            </div>
            {/* Premium Support */}
            <div className="flex gap-2">
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
              />
              <Text>Premium Support</Text>
              {editPackageMutation.isLoading && <Loader size="sm" />}
            </div>
            {/* Dedicated Account */}
            <div className="flex gap-2">
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
              />
              <Text>Dedicated Account Manager</Text>
              {editPackageMutation.isLoading && <Loader size="sm" />}
            </div>
            {/* </Checkbox.Group> */}
          </div>
        </div>
      ))}
    </div>
  );
};
