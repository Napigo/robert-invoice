import React from "react";
import { InvoiceSummarySection } from "@/components/Invoices/InvoiceSummarySection";
import { VStack } from "@chakra-ui/react";

export const InvoiceListingPage: React.FC = () => {
  return (
    <VStack flex={1} gap={200} padding={"20px"} background="transparent">
      <InvoiceSummarySection />
    </VStack>
  );
};
