import React from "react";
import { HStack, Text } from "@chakra-ui/react";
import { upperCase } from "lodash";

type Props = {
  title: string;
};
export const MenuTitle: React.FC<Props> = ({ title }) => {
  return (
    <HStack background="transparent" width="100%">
      <Text color="gray.400" fontSize={"xs"} fontWeight="semibold">
        {upperCase(title)}
      </Text>
    </HStack>
  );
};
