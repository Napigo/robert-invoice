import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useLocation, useParams, useRoutes } from "react-router-dom";

export const InvoiceDetail: React.FC = () => {
  const param = useParams();
  const { state } = useLocation();

  console.log(param);
  console.log(state);

  return (
    <Box>
      <Text>Hello World</Text>
    </Box>
  );
};
