import React from "react";
import { Card } from "@/components/UIKit";
import { HStack, VStack } from "@chakra-ui/react";
import { CountItem } from "../CountItem";

export const InvoiceSummarySection: React.FC = () => {
  return (
    <Card width="100%">
      <VStack width="100%" flex={1} background="transparent">
        <HStack width={"inherit"} gap={10}>
          <CountItem label="Total Invoices" count={0} />
          <CountItem label="Pending" count={3} />
          <CountItem label="Active Warranty" count={3} />
        </HStack>
      </VStack>
    </Card>
  );
};
