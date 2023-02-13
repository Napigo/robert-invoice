import React from "react";
import { LoginForm } from "@/components/LoginForm";
import { Box, Container, Text } from "@chakra-ui/react";

export const AuthLoginPage: React.FC = () => {
  console.log("authlogin page");
  return (
    <Container
      maxW={"900px"}
      height="100vh"
      display="flex"
      justifyContent={"center"}
      alignItems="center"
      padding={0}
    >
      <Box
        display={{ base: "flex" }}
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        gap={{ base: 20 }}
        marginY="auto"
        w="full"
        px={"20px"}
      >
        <Box
          w={{ sm: "100%", md: "100%" }}
          alignItems="center"
          justifyContent={"center"}
        >
          <Box
            display={"flex"}
            flexDirection="column"
            gap={6}
            maxWidth="400px"
            mx="auto"
          >
            <Text fontSize="xl" fontWeight={"bold"}>
              Login
            </Text>
            <LoginForm />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
