import { useQuery } from "react-query";
import { getPackages } from "../../utils/fetchData";
import { Notification, Checkbox, Loader, Text } from "@mantine/core";
import { IPackages } from "../../types/interfaces";
import { BiError } from "react-icons/bi";

export const EnterpricePackage = () => {
  const { isLoading, isError, data, error } = useQuery("packages", getPackages);

  if (isLoading)
    return <Loader className="flex" size="lg" variant="bars" color="slate" />;

  if (isError)
    return (
      <Notification icon={<BiError />} color="red">
        Somethings went wrong...
      </Notification>
    );
  return (
    <div>
      {data
        ?.filter((item: IPackages) => item?.name === "Enterprice")
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
              <Text key={index}>{item?.sms} SMS</Text>
              <Text key={index}>{item?.voiceCall} Voice Call</Text>
              <Text key={index}>{item?.statusPage} status pages</Text>
              <Text key={index}>{item?.integrations} integrations</Text>
              <Text key={index}>{item?.logRetention} years log retention</Text>
            </div>
            {/* Includes */}
            <div>
              <Checkbox.Group
                defaultValue={[
                  item?.higherChek,
                  item?.premiumSupport,
                  item?.dedicatedAccount,
                ]}
                orientation="vertical"
                label="Includes"
                withAsterisk
                spacing="xs"
                // size="xs"
              >
                <Checkbox value={item?.higherChek} label={item?.higherChek} />
                <Checkbox
                  value={item?.premiumSupport}
                  label={item?.premiumSupport}
                />
                <Checkbox
                  value={item?.dedicatedAccount}
                  label={item?.dedicatedAccount}
                />
              </Checkbox.Group>
            </div>
          </div>
        ))}
    </div>
  );
};
