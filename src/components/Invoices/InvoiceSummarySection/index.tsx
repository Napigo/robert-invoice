import React from "react";
import { Card } from "@/components/UIKit";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { CountItem } from "../CountItem";

export const InvoiceSummarySection: React.FC = () => {
  return (
    <Box paddingLeft={"20px"} paddingRight="20px" width="100%">
      <Card width="inherit">
        <VStack width="inherit" flex={1} background="transparent">
          <HStack width={"inherit"} gap={10}>
            <CountItem label="Total Invoices" count={0} />
            <CountItem label="Pending" count={3} />
            <CountItem label="Active Warranty" count={3} />
          </HStack>
        </VStack>
      </Card>
    </Box>
  );
};
