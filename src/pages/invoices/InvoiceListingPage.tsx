import React from "react";
import { Box } from "@chakra-ui/react";
import { SearchFilterArea } from "@/components/Invoices/SearchFilterArea";
import { InvoiceTable } from "@/components/Invoices/Table";
import { InvoiceSummarySection } from "@/components/Invoices/InvoiceSummarySection";

export const InvoiceListingPage: React.FC = () => {
  return (
    <>
      <Box paddingTop="20px" paddingBottom="20px">
        <InvoiceSummarySection />
      </Box>
      <Box paddingTop="20px" paddingBottom="20px">
        <SearchFilterArea />
      </Box>
      <Box
        display="flex"
        flexDirection={"column"}
        background="pinks"
        paddingTop={"20px"}
        paddingBottom="20px"
      >
        <InvoiceTable />
      </Box>
    </>
  );
};
