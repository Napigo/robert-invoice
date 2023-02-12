import Logo from "../../common/Logo";
import React from "react";
import { Box, VStack, Text } from "@chakra-ui/react";

export const AuthGreeting: React.FC = () => {
  return (
    <VStack
      display="flex"
      alignItems={{ base: "center", sm: "center", md: "start" }}
      gap={0}
    >
      <Box>
        <Logo />
      </Box>
      <Text
        display={{ base: "flex", md: "flex" }}
        textAlign={{ base: "center", md: "start" }}
        px={{ base: "20px", md: 0 }}
        fontSize={{ base: "sm", md: "md" }}
      >
        Sign in to continue
      </Text>
    </VStack>
  );
};
