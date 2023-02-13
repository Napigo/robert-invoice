import React from "react";
import { Flex, HStack, Text } from "@chakra-ui/react";

type Props = {
  count: number;
  label: string;
};
export const CountItem: React.FC<Props> = ({ count, label }) => {
  return (
    <HStack>
      <Text fontWeight={"semibold"} fontSize="sm">
        {label}
      </Text>
      <Flex
        background="gray.100"
        height="30px"
        borderRadius={5}
        display="flex"
        justifyItems="center"
        alignItems="center"
        paddingLeft="10px"
        paddingRight="10px"
      >
        <Text fontWeight="bold">{count}</Text>
      </Flex>
    </HStack>
  );
};
