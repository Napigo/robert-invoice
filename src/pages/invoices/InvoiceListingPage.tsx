import React from "react";
import { InvoiceSummarySection } from "@/components/Invoices/InvoiceSummarySection";
import { VStack } from "@chakra-ui/react";
import { SearchFilterArea } from "@/components/Invoices/SearchFilterArea";

export const InvoiceListingPage: React.FC = () => {
  return (
    <VStack flex={1} background="blu" paddingTop={"20px"} paddingBottom="20px">
      <InvoiceSummarySection />
      <SearchFilterArea />
    </VStack>
  );
};
